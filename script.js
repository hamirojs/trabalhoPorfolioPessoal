
      function teste() {
        const inputNome = document.getElementById("inputNome");
        const inputEmail = document.getElementById("inputEmail");
        const inputMensagem = document.getElementById("inputMensagem");
        const padraoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        [inputNome, inputEmail, inputMensagem].forEach(
          (campo) => (campo.style.borderColor = "")
        );

        if (inputNome.value.trim() === "") {
          alert("O campo nome deve ser informado.");
          inputNome.style.borderColor = "red";
          inputNome.focus();
          return;
        } else if (inputNome.value === null) {
          alert("O campo nome deve ser informado");
          inputNome.style.borderColor = "red";
          inputNome.focus();
          return;
        } else if (inputEmail.value.trim() === "") {
          alert("O campo email deve ser informado.");
          inputEmail.style.borderColor = "red";
          inputEmail.focus();
          return;
        } else if (inputEmail.value === null) {
          alert("O campo email deve ser informado.");
          inputEmail.focus();
          return;
        } else if (!padraoEmail.test(inputEmail.value.trim())) {
          alert("Informe um email válido (ex: email@email.com)");
          inputEmail.style.borderColor = "red";
          inputEmail.focus();
          return;
        } else if (inputMensagem.value.trim() === "") {
          alert("Digite uma mensagem.");
          inputMensagem.style.borderColor = "red";
          inputMensagem.focus();
          return;
        } else if (inputMensagem.value === null) {
          alert("Digite uma mensagem.");
          inputMensagem.style.borderColor = "red";
          inputMensagem.focus();
          return;
        }

        alert("Email enviado com sucesso.");
      }

      document.addEventListener("DOMContentLoaded", () => {
        const padraoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        document
          .querySelectorAll("#inputNome, #inputEmail, #inputMensagem")
          .forEach((campo) => {
            campo.addEventListener("input", () => {
              // remove o vermelho se o campo tiver conteúdo válido
              if (campo.id === "inputEmail") {
                if (padraoEmail.test(campo.value.trim())) {
                  campo.style.borderColor = "";
                }
              } else if (campo.value.trim() !== "") {
                campo.style.borderColor = "";
              }
            });
          });
      });
