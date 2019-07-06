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