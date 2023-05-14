const { stdin, stdout } = require('process');
const rl = require('readline')

class livro {
    constructor(titulo,autor,editora,preco){
        this.titulo = titulo;
        this.autor = autor;
        this.editora = editora;
        this.preco = preco;
        this.id = Math.floor(Math.random() * 101)   
    }
    substituirID(Livro){
        Livro.id =  this.id = Math.floor(Math.random() * 101)
        return livro
    }
}
class Loja {
    constructor(nome){
        this.nome = nome
        this.livros = []
        this.prompt = rl.createInterface({
            input: stdin,
            output: stdout
        })
    }
    cadastrarLivro(){
        console.log('Cadastre o novo livro:')
        
        this.prompt.question('Titulo: ',(respostaTitulo)=>{
            let titulo = respostaTitulo
            this.prompt.question('Autor: ',(respostaAutor)=>{
                let autor = respostaAutor
                this.prompt.question('Editora: ',(respostaEditora)=>{
                    let editora = respostaEditora
                    this.prompt.question('Preco: ',(respostaPreco)=>{
                        let preco = parseFloat(respostaPreco)
                        let idIndisponivel = true
                        
                        let novoLivro = new Livro(titulo,autor,editora,preco)
                        
                        while(idIndisponivel){
                            
                            idIndisponivel = this.livros.find((livro)=> 
                                livro.id == novoLivro.id
                            )
                            if(idIndisponivel){
                                novoLivro = novoLivro.substituirID(novoLivro)
                            }else{
                                break
                            } 
                        }
                        this.livros.push(novoLivro)
                        console.log('Cadastro feito :D');
                        this.prompt.question('Gostaria de cadastrar mais um? : sim/não',(resposta)=>{
                            if(resposta == 'sim','Sim','SIM'){
                                return this.cadastrarLivro()
                            }
                            return this.lidarSaida()
                        })
                    })
                })
            })
        })
    }

    listarLivros(){
        console.log(this.livros)
        return this.lidarSaida()
    }

    buscarLivro(){
        this.prompt.question('Digite o titulo do seu livro:',(titulo)=>{
            const livroEncontrado = this.livros.find(livro => livro.titulo == titulo)
            if(livroEncontrado){
                console.log(livroEncontrado)
                return this.lidarSaida()
            }
            console.log('Livro não encontrado no nosso sistema.')
            return this.lidarSaida()
        })
        
    }

    apagarLivro(){
        this.prompt.question('Digite o ID do livro que você deseja apagar:',(id)=>{
            const livroExiste = this.livros.find(livro => livro.id == id)
            if(!livroExiste){
                console.log("Nenhum livro foi encontrado com este ID")
                return this.lidarSaida()
            }
           
            this.livros.forEach((livro, posicao)=>{
                if(livro.id == id){
                    this.livros.splice(posicao,1)
                    console.log('Livro apagado com sucesso!');
                }
            })
            return this.lidarSaida()
        })
    }

    menu(){
        console.log(`Bem vinde :D ! Essa é a loja de livros: ${this.nome}`);
        console.log('1 - Cadastrar livro');
        console.log('2 - Exibir todos os livros');
        console.log('3 - Apagar um livro');
        console.log('4 - Buscar um livro');
        console.log('0 - Sair ');
        this.prompt.question('Escolha uma das opções:', (resposta)=>{
            const opcao = parseInt(resposta);

            switch (opcao) {
                case 1:
                    this.cadastrarLivro()
                    break;
                case 2:
                    this.listarLivros()
                    break;
                case 3:
                    this.apagarLivro()
                    break
                case 4:
                    this.buscarLivro()
                    break
                case 0:
                    console.log('Espero que tenha gostado da nossa Loja! :D');
                    this.prompt.close()
                    break
                default:
                    console.log(`A opção ${opcao} não é válida`)
                    this.prompt.close()
                    break;
            }

        })
    }

    lidarSaida(){

        console.log('1 - voltar para o menu');
        console.log('0 - sair');
        this.prompt.question("Escolha uma das opções: ",(resposta)=>{
            const opcao = parseInt(resposta)
            switch (opcao) {
                case 1:
                    this.menu()
                    break;
                case 0:
                    console.log('Espero que tenha gostado da nossa Loja! :D')
                    this.prompt.close()
                    break
                default:
                    console.log(`A opção ${opcao} não é válida`)
                    this.lidarSaida()
                    break;
            }
        })
    }

}

const loja = new Loja('li T.I ratura')
const livros = new livro('Crime do Padre Amaro','Eçá de Queriroz','LPM',15)
console.log(livros)
loja.menu()