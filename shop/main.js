const navbar = document.querySelector('.navbar');
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

// Fechar o menu de navegação ao clicar em um link
const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
});

// Carrinho de Compras
let carrinho = [];

// Função para adicionar produto ao carrinho
function adicionarAoCarrinho(produto) {
    carrinho.push(produto);
    mostrarCarrinho(); // Atualiza a seção do carrinho
    window.location.hash = 'carrinho'; // Redireciona para a seção do carrinho
}

// Função para calcular o total do carrinho
function calcularTotal() {
    return carrinho.reduce((total, produto) => total + produto.preco, 0);
}

// Função para exibir produtos no carrinho
function mostrarCarrinho() {
    const carrinhoContainer = document.getElementById('carrinho-container');
    carrinhoContainer.innerHTML = ''; // Limpa o container antes de exibir

    if (carrinho.length === 0) {
        carrinhoContainer.innerHTML = '<p>Seu carrinho está vazio.</p>';
        return;
    }

    carrinho.forEach(produto => {
        const produtoDiv = document.createElement('div');
        produtoDiv.innerText = `${produto.nome} - R$${produto.preco.toFixed(2)}`;
        carrinhoContainer.appendChild(produtoDiv);
    });

    // Adiciona o total ao carrinho
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
        { nome: 'Produto 5', preco: 499.99 },
        { nome: 'Produto 6', preco: 299.99 },
        { nome: 'Produto 7', preco: 199.99 },
        { nome: 'Produto 8', preco: 399.99 },
    ];

    button.addEventListener('click', () => {
        adicionarAoCarrinho(produtos[index]);
    });
});

// Finalizar Compra
const finalizarCompraButton = document.getElementById('finalizar-compra');
finalizarCompraButton.addEventListener('click', () => {
    // Rola para o formulário de contato
    const contatoForm = document.getElementById('contato');
    contatoForm.scrollIntoView({ behavior: 'smooth' });
});
