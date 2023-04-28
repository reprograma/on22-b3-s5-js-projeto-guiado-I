const { stdin, stdout } = require('process')
const rl = require('readline')
/**
 *  1. Cadastrar novos livros: id, título, autor, editora e preço.
    2. Listar todos os livros cadastrados.
    3. Pesquisar um livro pelo título e exibir suas informações.
    4. Apagar um livro da lista de livros
 */
/**
 * - @OK Crie uma classe Livro com as propriedades titulo, autor, editora e preco. O id deve ser preechido com um número aleatório entre 0 e 100
- @quaseOK Ao preencher o id, verifique se não existe um livro com aquele ID na lista. Se houver, crie outro ID aletório e repita esse processo até que o número gerado não tenha sido selecionado como ID anteriormente.
- @OK Crie uma classe Loja com uma propriedade livros, que deverá ser um array de objetos da classe Livro.
- @OK Na classe Loja, crie um método cadastrarLivro que recebe como parâmetros as informações do livro e cria um objeto da classe Livro para adicioná-lo ao array livros.
- @OK Na classe Loja, crie um método listarLivros que percorre o array livros e exibe as informações de cada livro.
- @OK Na classe Loja, crie um método buscarLivro que recebe como parâmetro o título do livro a ser pesquisado. Esse método deve percorrer o array livros, buscar o livro pelo título e exibir suas informações.
- @OK Na classe Loja, crie um método apagarLivro que recebe o id do livro e apaga ele do array de livros daquela loja. Esse método deve percorrer o array de livros da loja , encontrar o objeto no array que tem o id igual ao que foi enviado, se ele existir deve apaga-lo usando o index dele no array original, caso não, informar que o livro com aquele ID não existe

*/

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
                                // cria para o NOVO LIVRO um outro ID aleatório.
                                // Isso se repete até que o idIndisponível seja false, ou seja: Quando o find não encontrar nenhum livro na lista com o ID igual ao do novo livro
                                novoLivro = novoLivro.substituirID(novoLivro)
                            }else{
                                // quando ele não encontrar, encerramos o fluxo do while
                                break
                            }
                            
                        }
                        // so depois da validação do ID válido que adicionamos o novo livro a lista
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
            const livroExiste = this.livros.find(livro => livro.id == id)
            if(!livroExiste){
                console.log('-----------------------------');
                console.log("Nenhum livro foi encontrado com este ID")
                return this.lidarSaida()
            }
            this.livros.forEach((livro, posicao)=>{
                if(livro.id == id){
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