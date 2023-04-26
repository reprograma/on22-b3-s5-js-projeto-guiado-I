/**
 * Cadastrar novos livros: id, título, autor, editora e preço.
 * Listar todos os livros cadastrados.
 * Pesquisar um livro pelo título e exibir suas informações.
 * Apagar um livro da lista de livros */

class Livro {
    constructor(id,titulo,autor,editora,preco){
        this.id = id,
        this.titulo = titulo,
        this.autor = autor,
        this.editora = editora,
        this.preco = preco
        this.gerarId()
    }
    gerarId(){
        const idLivro = Math.floor(Math.random()*101)
        //mandar um if se a id for igual a de outro livro
        while(idLivro === this.id){
            idLivro = Math.floor(Math.random()*101)
        }
        return this.id = idLivro
    }

}

class Loja {
    constructor(){
        this.livros = []
    }
    cadastrarLivro(id,titulo,autor,editora,preco){
        let livro = new Object()
        livro = new Livro(this.id=id,this.titulo=titulo,this.autor = autor,this.editora = editora, this.preco = preco)
        this.livros.push(livro)
        
    }
    listarLivros(){
        return console.log(this.livros.map(item=>item))
    }
    buscarLivro(titulo){           
        let resultadoBusca = this.livros.find(item => item.titulo === titulo)
        if(resultadoBusca === undefined){
           console.log(`${titulo} - Não encontrado.`)
        } else {console.log(resultadoBusca)}
    }
    apagarLivro(id){
        let apagar 
        for (let i=0; i<this.livros.length;i++){
            if(this.livros[i].id === id){
                apagar = i
                this.livros.splice(apagar,1)
                return console.log(this.livros)
            } 
            return console.log(`O id "${id}" não existe`)
        }
    }
}



const lojaLivros = new Loja()

lojaLivros.cadastrarLivro(this.id,"Tarinspotting", "Irvine Welsh", "Minerva", 20.00)
lojaLivros.cadastrarLivro(this.id,"Junky", "W. Burroughs", "Companhia das Letras", 30.00)
lojaLivros.cadastrarLivro(this.id,"Autobiography of Red", "Anne Carson", "Penguin Books", 90.00)

lojaLivros.listarLivros()

lojaLivros.buscarLivro("Junky")
lojaLivros.buscarLivro("Memórias Póstumas de Brás Cubas")

lojaLivros.apagarLivro(7)