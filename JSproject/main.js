const form = document.getElementById('formularioNumerico');
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const valorA = parseFloat(campoA.value);
    const valorB = parseFloat(campoB.value);

    if (valorB > valorA) {
        alert(`Formulário válido! Campo B (${valorB}) é maior que Campo A (${valorA}).`);

    } else {
        alert(`Erro: Campo B (${valorB}) deve ser maior que Campo A (${valorA}).`);
    }
});
