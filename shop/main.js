let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    const offset = -currentSlide * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

// Função para avançar automaticamente os slides
function autoSlide() {
    moveSlide(1);
}

// Iniciar o carrossel automático a cada 3 segundos
setInterval(autoSlide, 3000);

function showInterestForm() {
    document.getElementById('contact-form').style.display = 'block';
}

function hideInterestForm() {
    document.getElementById('contact-form').style.display = 'none';
}

document.getElementById('interestForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulário enviado com sucesso!');
    hideInterestForm();
});
