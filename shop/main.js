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

// Adiciona os event listeners aos botões "Adicionar ao Carrinho"
document.querySelectorAll('.produto button').forEach((button, index) => {
    const produtos = [
        { nome: 'Produto 1', preco: 499.99 },
        { nome: 'Produto 2', preco: 299.99 },
        { nome: 'Produto 3', preco: 199.99 },
        { nome: 'Produto 4', preco: 399.99 },
    ];

    button.addEventListener('click', () => {
        adicionarAoCarrinho(produtos[index]);
    });
});

// Finalizar Compra
const finalizarCompraButton = document.getElementById('finalizar-compra');
finalizarCompraButton.addEventListener('click', () => {
    const contatoForm = document.getElementById('contato');
    contatoForm.scrollIntoView({ behavior: 'smooth' });
});
