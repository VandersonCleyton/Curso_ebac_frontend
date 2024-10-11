$(document).ready(function() {
    $('#carousel-imagens').slick({
        autoplay: true,
    });

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(DDD) 2345-6789'
    });

    $('#cpf').mask('000.000.000-00', {
        placeholder: '123.456.789-00'
    });

    $('#cep').mask('00000-000', {
        placeholder: '012345-678'
    });

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            },
            cpf: {
                required: true
            },
        },
        messages: {
            nome: 'Por favor, insira seu nome.',
            email: 'Insira um e-mail válido.',
            telefone: 'Por favor, insira seu telefone.',
            endereco: 'Por favor, insira seu endereço.',
            cep: 'Por favor, insira seu cep.',
            cpf: 'Por favor, insira seu cpf.'
        },
        submitHandler: function(form) {
 
            alert('Formulário enviado com sucesso!');

            form.reset();
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`);
            }
        }
    });
});