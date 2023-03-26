(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {

            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }

            validarEmail(form);

            form.classList.add('was-validated');
        }, false)
    })
})()

function getUrlVars() {
    var url = window.location.href;
    var vars = {};
    var hashes = url.split("?")[1];
    var hash = hashes.split('&');

    for (var i = 0; i < hash.length; i++) {
        params = hash[i].split("=");
        vars[params[0]] = params[1];
    }

    return vars;
}

function validarEmail(form) {
    const emailRegex = /\S+@\S+\.\S+/;

    var emailField = form.querySelector("#email");

    if (!emailRegex.test(emailField.value)) {
        emailField.setCustomValidity("Invalid field.");
        emailField.classList.remove('is-valid');
        emailField.classList.add('is-invalid');
    } else {
        emailField.classList.remove('is-invalid');
        emailField.classList.add('is-valid');
        emailField.setCustomValidity("")
    }
}

window.onload = function () {
    var obj = getUrlVars();

    var msgErro = document.querySelector("#msgErro");
    var msgSucess = document.querySelector("#msgSucesso");

    if (obj.ok === 'true') {
        
        if (msgErro.classList.contains('show')) {
            msgErro.classList.remove('show');
        }

        if (!msgSucess.classList.contains('show')) {
            msgSucess.classList.add('show');
        }
        
    } else {
        
        if (!msgErro.classList.contains('show')) {
            msgErro.classList.add('show');
        }

        if (msgSucess.classList.contains('show')) {
            msgSucess.classList.remove('show');
        }
        
    }
}