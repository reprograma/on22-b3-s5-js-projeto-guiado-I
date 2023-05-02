cosnt {stdin, stout } = require('process')
const rl = require('readline')

class Livro { 
    constructor(titulo, autor, editora, preco){
        this.titulo = titulo
        this.autor = autor
        this.editora = editora
        this.preco = preco
        this.id = Math.floor(Math.random() * 101) //método privado porque só está definido dentro do constructor, para evitar o uso além do momento da criação
        }  

    substituirID(livro){
        livro.id = Math.floor(Math.random() * 101)
        return livro
    }    
}
         
class Loja {
    constructor(nome){
        this.nome = nome
        this.livros = [] 
        this.prompt = rl.createInterface({ 
            input: stdin, 
            output: stout
        })
    }
    cadastrarLivros(){
        /** arrumar os parenteses e Chaves: */
    console.log("Digite as informações do novo livro abaixo: \n") 
    this.prompt.question("Título: \n", (respostaTitulo)=>{
        let titulo = 
    })


    /**this.prompt.question("Título: \n", (respostaTitulo)=>{
           let titulo = respostaTitulo 
           this.prompt.question("Autor: \n," (respostaAutor)=>{
              let autor = respostaAutor
              this.prompt.question("Editora: \n," (respostaEditora)=>{

                let editora = respostaeditora
                this.prompt.question("Preço: \n," (respostaPreco)=>{
                    let preco = parseFloat(respostaPreco)
                    const idDisponivel 
                    let novoLivro = new Livro(titulo,autor,editora,preco)
                     
                    /**while(idDisponivel){
                        novoLivro = novoLivro.substituirID(novoLivro)
                        idDisponivel = this.livros.find((livro) =>
                        livro.id == novoLivro.id 
                        )
                    }*/
                    
                            
                        
                
                    this.livros.push()
                    console.log('Livro cadastrado com sucesso')
                    this.prompt.question("gostaria de add um novo livro?: sim/não"), (resposta)=>{
                        if(resposta =="S"){
                            // não consegui terminar a linha de raciocineo
                        
                        }
                    })
                    this.lidarSaida()

                
                
                })


        })
        })*/
        this.lidarSaida()
    }

    listarLivros(){
        console.log("A lista de livros")
        this.lidarSaida()
    }

    buscarLivros(titulo){
        console.log("buscar livro por titulo")
        this.lidarSaida()
    }

    apagarLivro() {
        console.log("apagou um livro")
        this.lidarSaida()
    }

    menu() {
        // copiar os consoles logs salvo no racunho
        console.log(`Bem vindo à livraria ${this.nome}`)
        console.log('Menu')
        console.log('1 - Cadastrar Livro Novo')
        console.log('2 - Listar livros do acervo')
        console.log('3 - Buscar Livro')
        console.log('4 - Apagar')
        this.prompt.question("Digite uma opção: \n ", (resposta)=>{
            
            const opcao = parseInt(resposta); //ela entra como string e transdorma em numero intiero
            
            switch (opcao) {
                case 1: 
                    this.cadastrarLivro()
                    break;
                case 2: 
                    this.listarLivros()
                    break;
                case 3: 
                    this.apagarLivro()
                    break;
                case 4: 
                    this.buscarLivro()
                    break;
                case 0:
                    console.log('Volte sempre á nossa loja! \n')
                    console.log(' ----------xxx-------------')
                    
                    this.prompt.close()
                    default: 
                    console.log('não é uma opção')
                        break;
            }
        })

    }

    lidarSaida() {
        console.log('1- Voltar ao menu ')
        console.log('2 - Sair')
        this.prompt.question("Escolha uma das opções",(resposta)=> {
            const opcao = parseInt(resposta)
            switch (opcao){
                case 1:
                    this.menu()
                    break;
                case 2: 
                    console.log('Volte sempre á nossa loja! \n')
                    console.log(' ----------xxx-------------')
                    this.prompt.close()
                     break;
                default: 
                console.log(`A opção ${opcao} não é valida! `)
                this.lidarSaida()
                break
            }
        })
    }


const livro1 = new Livro("O Mundo de Sofia", "Jostein Gaarder", "Cia das Letras", "R$ 64,00")
console.log(livro1)

const loja = new Loja("Lágrimas em código")

loja.menu()