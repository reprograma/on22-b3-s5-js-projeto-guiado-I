const { stdin, stdout } = require('process')
const rl = require('readline')

class Livro{
    constructor(titulo, autor,editora, preco){
        this.titulo = titulo
        this.autor = autor
        this.editora = editora
        this.preco = preco
        this.id = Math.floor(Math.random() * 101)
      
        
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
        // deixa disponível uma estrutura do readline para que seja possível usar dentro da classe o .question()
        this.prompt = rl.createInterface({
            input: stdin,
            output: stdout
        })
    }

    cadastrarLivro(){
        console.log("Digite as informações do novo livro abaixo:\n")
        
        this.prompt.question("Titulo: \n",(respostaTitulo)=>{
            let titulo = respostaTitulo
            this.prompt.question("Autor: \n",(respostaAutor)=>{
                let autor = respostaAutor
                this.prompt.question("Editora: \n",(respostaEditora)=>{
                    let editora = respostaEditora
                    this.prompt.question("Preço: \n",(respostaPreco)=>{
                        let preco = parseFloat(respostaPreco)
                        // Define um valor inicial para a variável, para que seja possível executar o while a primeira vez
                        let idIndisponivel = true
                        // cria um novo livro com um ID aleatório
                        let novoLivro = new Livro(titulo,autor,editora,preco)
                        
                        while(idIndisponivel){
                            // procura um livro na lista de livros que tenha um ID igual ao novo livro que foi criado e retorna...
                            idIndisponivel = this.livros.find((livro)=> 
                                livro.id == novoLivro.id
                            )
                            // Se ele encontrar um livro com o ID igual ao novo livro...
                            if(idIndisponivel){
                               
                                novoLivro = novoLivro.substituirID(novoLivro)
                            }else{
                                
                                break
                            }
                            
                        }
                        
                        this.livros.push(novoLivro)
                        console.log('-----------------------------');
                        console.log('Livro Cadastrado com sucesso!');
                        console.log('-----------------------------');
                        this.prompt.question("Gostaria de adicionar um novo livro? : S/N \n",(resposta)=>{
                            if(resposta == "S"){
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
        console.log('-----------------------------');
        console.log(this.livros)
        return this.lidarSaida()
    }

    buscarLivro(){
        this.prompt.question("Digite o titulo do livro que você quer encontrar:\n",(titulo)=>{
            const livroEncontrado = this.livros.find(livro => livro.titulo == titulo)
            if(livroEncontrado){
                console.log('-----------------------------');
                console.log(livroEncontrado)
                return this.lidarSaida()
            }
            console.log('-----------------------------');
            console.log("O livro não foi encontrado!")
            return this.lidarSaida()
        })
        
    }

    apagarLivro(){
        this.prompt.question("Digite o ID do livro que você deseja apagar: \n",(id)=>{
            // verifica se o livro existe antes de apagar
            const livroExiste = this.livros.find(livro => livro.id == id)
            if(!livroExiste){
                // se NAO existir, retorna para o usuario informando que não existe e exibe o menu de saída
                console.log('-----------------------------');
                console.log("Nenhum livro foi encontrado com este ID")
                return this.lidarSaida()
            }
            // Precisamos entender em que posição do array this.livros o livro que queremos apagar está, por isso usamos também o parametro que registra o index de cada livro
            this.livros.forEach((livro, posicao)=>{
                // verifica se existe um livro que o ID seja igual ao ID enviado pelo usuário
                if(livro.id == id){
                    // Caso encontre, ele ira no array de livros (this.livros), e utiliza o método splice() para apagar o item do array
                    this.livros.splice(posicao,1)
                    console.log('-----------------------------');
                    console.log('Livro apagado com sucesso!');
                }
            })

            
            return this.lidarSaida()
        })
    }

    menu(){
        console.log('-----------------------------');
        console.log(`Bem-vindo(a) a Loja de Livros: ${this.nome}`);
        console.log('-----------------------------');
        console.log('1 - Cadastrar Livro 📗');
        console.log('2 - Exibir todos livros 📚');
        console.log('3 - Apagar Livro 📕');
        console.log('4 - Buscar Livro 🔍');
        console.log('0 - Sair ❌');
        console.log('-----------------------------');
        this.prompt.question("Escolha uma das opções:\n", (resposta)=>{
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
                    console.log('---✨-----✨---✨----✨----✨----✨');
                    console.log('✨Espero que tenha gostado da nossa Loja!✨\n');
                    console.log('       👋  Volte Sempre! 👋        \n');
                    console.log('---✨-----✨-------✨------✨------');
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
        console.log('-----------------------------');
        console.log('1 - voltar para o menu 🔙');
        console.log('0 - sair ❌');
        console.log('-----------------------------');
        this.prompt.question("Escolha uma das opções: ",(resposta)=>{
            const opcao = parseInt(resposta)
            switch (opcao) {
                case 1:
                    this.menu()
                    break;
                case 0:
                    console.log('---✨-----✨---✨----✨----✨----✨');
                    console.log('✨Espero que tenha gostado da nossa Loja!✨\n');
                    console.log('       👋  Volte Sempre! 👋        \n');
                    console.log('---✨-----✨-------✨------✨------');
                    this.prompt.close()
                    break
                default:
                    console.log(`A opção ${opcao} é inválida. Por favor, digite uma opção válida`)
                    this.lidarSaida()
                    break;
            }
        })
    }

}

const loja = new Loja("Lágrimas em códigos")


loja.menu()