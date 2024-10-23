let currentIndex = 0; // Índice da imagem atual
const slides = document.querySelectorAll('.slider__image'); // Seleciona todas as imagens do carrossel
const totalSlides = slides.length; // Total de imagens
const intervalTime = 3000; // Tempo em milissegundos para a transição automática

function updateCarousel() {
    const offset = -currentIndex * (80 + 20); // Ajusta o deslocamento considerando a largura da imagem e a margem
    document.querySelector('.slider').style.transform = `translateX(${offset}px)`; // Aplica a transformação
}

function autoSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; // Muda para a próxima imagem
    updateCarousel(); // Atualiza a posição do carrossel
}

// Inicia o auto slide com um intervalo definido
setInterval(autoSlide, intervalTime);
