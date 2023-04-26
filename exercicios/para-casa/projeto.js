class Livros {
    constructor (titulo,autor,editora,preco,id){
        this.titulo = titulo
        this.autor = autor 
        this.editora = editora
        this.preco = preco
        this.gerarIdAleatoria()
    }

   gerarIdAleatoria(){
        this.id = Math.floor(Math.random() * 101)
   }

}

class Loja {
    constructor() {
        this.livro = []
    }
    cadastrarLivros(novosLivros){
        this.livro.push(novosLivros)
        }
    listarLivros(){
       console.log(this.livro)
        }
    buscarLivro(titulo){
        this.livro.forEach(livro => {
            if(livro.titulo === titulo){
                console.log(`titulo: ${livro.titulo}`)
                console.log(`autor: ${livro.autor}`)
                console.log(`editora: ${livro.editora}`)
                console.log(`preço: ${livro.preco}`)
            } 
            })
        }
        apagarLivro(id){
            this.livros.forEach((livro,posicao) => {
                if(livro.id == id){
                    livros.splice(index,1)
                }
            });
        }
    }

const novaLoja = new Loja ()
const livro1 = new Livros('A hipótese do amor','Ali Hazelwood','Arqueiro', 40.99) // livro caro da murrinha
novaLoja.cadastrarLivros(livro1)
const livro2 = new Livros('Clube do livro dos homens','Lyssa Kay Adams','Arqueiro', 37.99)
novaLoja.cadastrarLivros(livro2)
const livro3 = new Livros('Ultra Carnem', 'Cesar Bravo','Darkside Books', 34.99)
novaLoja.cadastrarLivros(livro3)
console.log(novaLoja.Livros)
novaLoja.listarLivros()
novaLoja.buscarLivro('Ultra Carnem')
loja.apagarLivro(88)
console.log(livro)