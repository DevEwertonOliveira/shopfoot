let drawer = document.querySelector('.drawer')
let drawerMenu = document.querySelector('drawer-menu')
let body = document.querySelector('body')

let produtosCadastrados = ProdutoService.listagemProdutos();

function listagemProdutos(){
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

function openDrawer(){
    drawer.style.display = 'flex'
    drawerMenu.style.animation = 'abrir-menu .5s ease-in'
    body.style.overflowY = 'hidden'
}

function closeDrawer(){
    drawerMenu.style.animation = 'fechar-menu .5s ease'
    setTimeout(() => {
        drawer.style.display = 'none'
        body.style.overflowY = 'scroll'
    }, 500);
}