$(document).ready(function() {
    // Adiciona o pattern ao campo do CEP
    $("input[name=cep]").mask("00000-000");

    $("form").on("submit", function(event) {
        // Interrompe o evento
        event.stopPropagation();
        // Previne (impede) o comportamento padrão do navegador ao enviar o formulário, neste caso, impede o envio do formulário
        event.preventDefault();
    });

    // Aparece em tempo real o preenchimento
    $("input[name=cep]").on("keyup", function(event) {
        let cep = $('input[name=cep]').val();
        cep = cep.replace("-", "");
        if (cep.length == 8) {
            $("input[name=cep]").removeClas("is-invalid");
            alert(cep);
        } else {
            $("input[name=cep]").addClass("is-invalid");
        }
    });
});