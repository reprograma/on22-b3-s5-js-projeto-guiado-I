const { stdin } = require('process')
const rl = require('readline')

class Livro {
    constructor(titulo, autor, editora, preco){
        this.titulo = titulo
        this.autor = autor
        this.editora = editora
        this.preco = preco
        this.id = Math.floor(Math.random()* + 101)
    }
      
    substiruirId(livro){
        livro.id = Math.floor(Math.random()* 101)
        return livro
    }
}

class Loja {
    constructor(){
        this.livros = []
        this.prompt = rl.createInterface({
            input: process.stdin,
            output: process.stdout
        })
    }

    cadastrarLivro(){        
        console.log("Digite os dados do livro: \n")
        
        this.prompt.question("Título: \n" , (respostaTitulo)=>{
            let titulo = respostaTitulo
            this.prompt.question("Autor: \n" , (respostaAutor)=>{
                let autor = respostaAutor
                this.prompt.question("Editora: \n" , (respostaEditora)=>{
                    let editora = respostaEditora
                    this.prompt.question("Preco: \n" , (respostaPreco)=>{
                        let preco = parseFloat(respostaPreco)
                        this.livros.push(new Livro(titulo,autor,editora,preco))
                        console.log(this.livros)
                        this.saida()
                    })
                })
            })
        })
       
    }

    listarLivros(){
        console.log(this.livros)
        return this.saida()
    }

    buscarLivros(título){
        this.prompt.question("Digite o título do livro que voce está procurando: \n", (titulo)=>{
            const livroEncontrado = this.livros.find(livro => livro.titulo == titulo)
            if(livroEncontrado){
                console.log(livroEncontrado)
            }
            console.log("O livro nao foi encontrado")
        })
        this.saida()
    }

    apagarLivro(){
        this.prompt.question("Digite o ID do livro que voce deseja apagar: \n" , (id)=>{
            const livroExiste = this.livros.find(livro => livro.id == id)
            if(!livroExiste){
            console.log("Nenhum livro foi encontrado com este ID")
            return this.saida()
        }
        this.livros.forEach((livro, posicao)=>{
           if(livro.id == id){
            this.livros.splice(posicao,1)
            console.log("Livro apagado com sucesso.")
            
           }

        })
        
        return this.saida()

        })
        
    }

    menu(){
        console.log('Bem-vindo a loja de livros');
        console.log('1 - Cadastrar livro');
        console.log('2 - Exibir lista de livros');
        console.log('3 - Buscar livro');
        console.log('4 - Apagar livro');
        console.log('0 - Sair do menu');
        this.prompt.question("Escolha uma das opcoes: \n" , (resposta)=>{
            const opcao = parseInt(resposta);

            switch (opcao) {
                case 1:
                    this.cadastrarLivro()
                    break;
                case 2:
                    this.listarLivros()
                    break;
                case 3:
                    this.buscarLivros()
                    break;
                case 4:
                    this.apagarLivro()
                    break;
                case 0:
                    console.log("Obrigada por visitar nossa loja.")
                    this.prompt.close()
                    break
                default:
                    console.log(`A opcao ${opcao} nao é válida`)
                    this.prompt.close()
                    break;
            }

        } )
    }

    saida(){
        console.log('1 - Voltar para o menu')
        console.log('2 - Sair')
        this.prompt.question("Escolha uma das opcoes" , (resposta)=>{
            const opcao = parseInt(resposta)
            switch(opcao) {
                case 1:
                    this.menu()
                    break;
                case 2:
                    console.log("Obrigada pela visita")  
                    this.prompt.close()  
                    break;
                default:
                    console.log(`A opcao ${opcao} é inválida. Por favor digite uma nova opcao`)
                    this.saida()
                    break;
                    
            }
        })
        
    }
              
}

const loja = new Loja ("Livraria Girassol")

loja.menu()