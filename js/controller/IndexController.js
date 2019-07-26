let produtosCadastrados = ProdutoService.buscarProdutos();

function listarProdutos(){
    for (let i = 0; i < produtosCadastrados.length; i++) {
        const element = produtosCadastrados[i];
        document.getElementById('produtos').innerHTML += 
        /*html*/`
        <div>

            <img>${element.img}</img>
            <h1>${element.nome}</h1>
            <p>${element.descricao}</p>
            <span>${element.tamanho}</span>
            <span>${element.preco}</span>
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