
# Projeto para envio de e-mails com NODE.js 

## Techs
- Node.js
- Express
- Config
- Mail Hog
- HTML5
- Valilla JS
- CSS3
- Bootstrap 5
- Bootstrap Icons

## Como rodar?

No Ubuntu

1. Abrir um terminal dentro do projeto
2. Instalar o node.js e docker: `$ sudo apt install nodejs && sudo snap install docker`
3. Executar o seguinte comando para instalar node e dependências: `$ npm install`
4. Executar o container do MailHog: `$ docker-compose -f ./docker-compose.yml up -d`
5. Para executar o projeto em modo desenvolvimento: `npm run dev`
6. Acessar o endereço `http://localhost:3005/`

