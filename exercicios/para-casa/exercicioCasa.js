class Livro{
    constructor(titulo, autor, editora, preco, id) {
        this.titulo = titulo
        this.autor = autor
        this.editora = editora
        this.preco = preco
        this.id = id
    }

    getTitulo(){
        return this.titulo
    }
    
    getAutor(){
        return this.autor
    }

    getEditora(){
        return this.editora
    }

    getPreco(){
        return this.preco
    }

    getID() {
        return this.id
   }

}

class Loja{

    cadastrarLivro(titulo, autor, editora, preco){
        do{
            var id = parseInt(Math.random() * 100)
        } while (this.listarID().includes(id)) 
        const livro = new Livro(titulo, autor, editora, preco, id)
        array.push(livro)
    }
    
    listarLivro(){
        const arrayLivro = []
        for (let livro of array){
            arrayLivro.push(livro.getID)
            arrayLivro.push(livro.getTitulo)
            arrayLivro.push(livro.getAutor)
            arrayLivro.push(livro.getEditora)
            arrayLivro.push(livro.getPreco)
        }
        return arrayLivro

    }

    listarID(){
        const arrayID = []
        for (let livro of array){
            arrayID.push(livro.getID)
        }
        return arrayID
    }

    apagarLivro(IDapagar){
        for (let index in array){
            if (array[index].getID = IDapagar) {
                array.splice(index, 1);
                return "apagado com sucesso"    
            }
        }
        return "Id não existe"

    }
    buscarLivro(tituloRecebido){
        const arrayLivro = [] 
        for (let livro of array ) {
           if (livro.getTitulo.contains(tituloRecebido)) {
                arrayLivro.push(livro.getID)
                arrayLivro.push(livro.getTitulo)
                arrayLivro.push(livro.getAutor)
                arrayLivro.push(livro.getEditora)
                arrayLivro.push(livro.getPreco)
            }
        
        }
        return arrayLivro
    }
}

const array = [];

const loja = new Loja
loja.cadastrarLivro("nome","autor","preco",20)
console.log(loja.listarLivro())

