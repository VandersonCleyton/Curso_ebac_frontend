document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formulario-emprestimo');
    const nomeCompletoInput = document.getElementById('nome-completo');
    const rendaMensalInput = document.getElementById('renda-mensal');
    const valorEmprestimoInput = document.getElementById('valor-emprestimo');
    const valorParcelasInput = document.getElementById('valor-parcelas');
    const mensagemElement = document.getElementById('mensagem');

    formulario.addEventListener('submit', function (e) {
        e.preventDefault();

        const nomeCompleto = nomeCompletoInput.value.trim();
        const rendaMensal = parseFloat(rendaMensalInput.value);
        const valorEmprestimo = parseFloat(valorEmprestimoInput.value);
        const valorParcelas = parseInt(valorParcelasInput.value);

        if (!nomeCompleto || nomeCompleto.split(' ').length < 2) {
            exibirMensagem('Erro: Por favor, insira seu nome completo.', 'erro');
            return;
        }

        if (isNaN(rendaMensal) || isNaN(valorEmprestimo) || isNaN(valorParcelas) || valorParcelas <= 0) {
            exibirMensagem('Por favor, preencha todos os campos corretamente.', 'erro');
            return;
        }

        const valorParcela = valorEmprestimo / valorParcelas;

        if (valorParcelas > rendaMensal) {
            exibirMensagem('Erro: O valor da prestação não pode exceder a renda mensal.', 'erro');
        } else {
            exibirMensagem('Sucesso: Empréstimo solicitado com sucesso!', 'sucesso');
        }
    });

    function exibirMensagem(mensagem, tipo) {
        mensagemElement.textContent = mensagem;
        mensagemElement.className = '';
        mensagemElement.classList.add(tipo);
        mensagemElement.classList.remove('oculto');
    }
});