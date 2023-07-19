

class livro{
    constructor(titulo, autor,editora, preco){
        this.titulo = titulo
        this.autor = autor 
        this.editora = editora
        this.preco = preco

        const gerarID = () =>{
            this.id = Math.floor(Math.random() * 101)
        }

        gerarID()

    }
}


class loja {
    cadastrarlivros(){}

    listarlivros(){}

    buscarlivros(titulo){}

    apagarlivro(){}
}

const livro = new livro("O livro que você gostaria que seus pais tivessem lido","Philippa Perry","Fontanar", 39.00)
console.log(livro)