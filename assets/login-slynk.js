const formulario = document.querySelector("form");

const campoEmail = document.querySelector('input[type="email"]');

const campoSenha = document.querySelector('input[type="password"]');

const lembrarEmail = document.querySelector('input[type="checkbox"]');

const emailCorreto = "andreyalexanderpaz@gmail.com";
const senhaCorreta = "123456";

const emailSalvo = localStorage.getItem("slynkEmail");

if (emailSalvo) {
    campoEmail.value = emailSalvo;
    lembrarEmail.checked = true;
}

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const emailDigitado = campoEmail.value.trim();
    const senhaDigitada = campoSenha.value;

    if (emailDigitado === "" || senhaDigitada === "") {

        alert("Preencha o e-mail e a senha.");

        return;
    }

    if (!campoEmail.checkValidity()) {
        alert("Digite um e-mail válido.");
        campoEmail.focus();
        return;
    }

    if (
        emailDigitado === emailCorreto &&
        senhaDigitada === senhaCorreta
    ) {

        if (lembrarEmail.checked) {

            localStorage.setItem(
                "slynkEmail",
                emailDigitado
            );

        } else {

            localStorage.removeItem("slynkEmail");

        }


        alert("Login realizado com sucesso!");

        window.location.href = "dashboard.html";

    } else {

        alert("E-mail ou senha incorretos.");

    }

});