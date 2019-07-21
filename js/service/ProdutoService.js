class ProdutoService{

    static validar(produto){
        if(!produto.nome){
            return "O nome é obrigatório"
        }
    }

    static buscarProdutos(){
        let produtos = JSON.parse(localStorage.getItem("produtos"))

        if(!produtos) return []
        else return produtos
    }
    
    static selecionarProdutos(produto){
        localStorage.setItem("produtoSelecionado", JSON.stringify(produto))
    }

    static buscarProdutoSelecionado(){
        return JSON.parse(localStorage.getItem("produtoSelecionado"))
    }

    static cadastrar(){
        let cadastrados = ProdutoService.buscarTodos();
        cadastrados.push;

        localStorage.setItem('produtos', JSON.stringify(cadastrados))
    }

}