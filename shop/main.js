let menuVisible = false;

function toggleMenu() {
    const menu = document.querySelector('.menu');
    menuVisible = !menuVisible;
    menu.style.display = menuVisible ? 'flex' : 'none';
    document.body.style.overflow = menuVisible ? 'hidden' : 'auto';
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
    menuVisible = false;
    document.querySelector('.menu').style.display = 'none'; 
    document.body.style.overflow = 'auto'; 
}

let carrinho = [];

function adicionarAoCarrinho(produto) {
    carrinho.push(produto);
    mostrarCarrinho(); 
    window.location.hash = 'carrinho'; 
}

function calcularTotal() {
    return carrinho.reduce((total, produto) => total + produto.preco, 0);
}

function mostrarCarrinho() {
    const carrinhoContainer = document.getElementById('carrinho-container');
    carrinhoContainer.innerHTML = ''; 

    if (carrinho.length === 0) {
        carrinhoContainer.innerHTML = '<p>Seu carrinho está vazio.</p>';
        return;
    }

    carrinho.forEach(produto => {
        const produtoDiv = document.createElement('div');
        produtoDiv.innerText = `${produto.nome} - R$${produto.preco.toFixed(2)}`;
        carrinhoContainer.appendChild(produtoDiv);
    });

    const total = calcularTotal();
    const totalDiv = document.createElement('div');
    totalDiv.innerHTML = `<strong>Total: R$${total.toFixed(2)}</strong>`;
    carrinhoContainer.appendChild(totalDiv);
}

document.querySelectorAll('.produto button').forEach((button, index) => {
    const produtos = [
        { nome: 'Playstation 5 Bundle Slim Digital', preco: 4999.99 },
        { nome: 'Console Xbox Series X 1TB', preco: 4999.99 },
        { nome: 'Nintendo Switch Oled', preco: 2999.99 },
        { nome: 'Pc Gamer Completo Intel Core I7', preco: 4999.99 },
    ];

    button.addEventListener('click', () => {
        adicionarAoCarrinho(produtos[index]);
    });
});

// Finalizar Compra
const finalizarCompraButton = document.getElementById('finalizar-compra');
finalizarCompraButton.addEventListener('click', () => {
    const total = calcularTotal();
    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio.');
        return;
    }

    const confirmation = confirm(`Total: R$${total.toFixed(2)}\nDeseja finalizar a compra?`);
    if (confirmation) {
        alert('Compra realizada com sucesso!');

        // Aqui você pode adicionar a lógica para enviar os dados do formulário
        handleSubmit(); // Chama a função para simular o envio do formulário

        // Recarregar a página após 2 segundos
        setTimeout(() => {
            location.reload();
        }, 2000);
    }
});

// Handle form submission
function handleSubmit(event) {
    if (event) event.preventDefault(); // Previne o comportamento padrão se o evento for passado
    alert('Mensagem enviada!'); // Simulação de envio
    document.getElementById('contato-form').reset(); // Reseta o formulário
}

// Auto slide do carrossel
const images = document.querySelectorAll('.carrossel-imagens img');
let currentIndex = 0;
const totalImages = images.length;

function updateCarousel() {
    const offset = -currentIndex * 100;
    document.querySelector('.carrossel-imagens').style.transform = `translateX(${offset}%)`;
}

function autoSlide() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
}

setInterval(autoSlide, 3000);
