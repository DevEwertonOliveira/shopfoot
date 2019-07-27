let produtosCadastrados = ProdutoService.buscarProdutos();

function listarProdutos(){
    for (let i = 0; i < produtosCadastrados.length; i++) {
        const element = produtosCadastrados[i];
        document.getElementById('produtos').innerHTML += 
        /*html*/`
        <div class="produtosTotal">
            <div class="produtosIndex">
            <img src="${element.img}">
            </div>
            <div class="produtosDescricao">
            <div>
            <h1>${element.nome}</h1>
            </div>
            <p>${element.descricao}</p>
            <span>Tamanho: ${element.tamanho}</span>
            <span>Preço: ${element.preco}</span>
            <p class="categoria">Categoria: ${element.categoria}</p>
            </div>
        </div>
        `
    }
}

function selecionarProduto(i) {
    ProdutoService.selecionarProduto(produtosCadastrados[i])
    document.querySelector('body').style.animation = "zoom-in 3s" // aplica a animação do zoom
    setTimeout(() => {
        location.href = "produto.html" //mudar de página    
    }, 750);
    
}


function openDrawer(){
    document.querySelector('.drawer').style.display = 'flex'
    document.querySelector('.drawer-menu').style.animation = 'abrir-menu .5s ease-in'
    document.querySelector('body').style.overflowY = 'hidden'
}

function closeDrawer(){
    document.querySelector('.drawer-menu').style.animation = 'fechar-menu .5s ease'
    setTimeout(() => {
        document.querySelector('.drawer').style.display = 'none'
        document.querySelector('body').style.overflowY = 'scroll'
    }, 500);
}