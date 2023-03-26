const EXPRESS = require("express");
const NODEMAILER = require("nodemailer");
const CONFIG = require("config");
const PATH = require('path');
const APP = EXPRESS();
const APP_PORT = CONFIG.get("app_port");
const APP_PROTOCOL = "http";
const APP_SERVER = "localhost";
const MAILHOG_HOST = CONFIG.get("mailhog.host");
const MAILHOG_PORT = CONFIG.get("mailhog.smtp_port");

const TRANSPORTER = NODEMAILER.createTransport({
    host: MAILHOG_HOST,
    port: MAILHOG_PORT
});

APP.use(EXPRESS.json());
APP.use(EXPRESS.urlencoded({extended:true}));

// @route GET /health
// @desc  Get application health
APP.get("/health", (req, res) => {
    res.status(200).json({
        status: "ok",
        message: "healthy"
    });
});

// @route POST /send
// @desc  Send email
APP.post("/send", (req, res) => {
    const assunto = req.body.assunto;
    const nome = req.body.nome;
    const from = req.body.email;
    const texto = req.body.texto;

    const obj = TRANSPORTER.sendMail({
        from: `${nome} <${from}>`,
        to: "localhost@mailhog.local",
        subject: assunto,
        text: texto
    });

    if (!obj) {
        res.status(500).redirect('/?ok=false');
    }

    res.status(200).redirect('/?ok=true');
});

/** 
 * Index HTML Endpoint
*/
APP.get('/', function (req, res) {
    res.sendFile(PATH.join(__dirname, '/index.html'));
});

APP.get('/style.css', function (req, res) {
    res.sendFile(PATH.join(__dirname, '/style.css'));
});

APP.get('/scripts.js', function (req, res) {
    res.sendFile(PATH.join(__dirname, '/scripts.js'));
});

APP.get('/mail.svg', function (req, res) {
    res.sendFile(PATH.join(__dirname, '/mail.svg'));
});

APP.listen(APP_PORT, () => {
    console.log(`Service endpoint ${APP_PROTOCOL}://${APP_SERVER}:${APP_PORT}`);
});