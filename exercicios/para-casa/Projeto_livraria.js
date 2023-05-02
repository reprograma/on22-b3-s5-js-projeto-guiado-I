const { stdin, stdout } = require('process')
const rl = require('readline')



class Livro {
    constructor(titulo, autor, editora, edicao, preco){
        this.titulo = titulo 
        this.autor = autor 
        this.editora = editora 
        this.edicao = edicao 
        this.preco = preco
        this.id = Math.floor(Math.random() * 101) /**  método privado pq está definido dentro do constructor desta
         classe, serve p evitar o uso fora do momento da criação do objeto apartir da classe.*/
    }

    substituirID(livro){
        livro.id = Math.floor(Math.random() * 101)
        return livro
    }
}


class Livraria {
    constructor(nome){
        this.nome = nome 
        /** recebe conjunto vazio 1x durante a criação do array do objeto novo livro */
        this.livros = []
        /** Para criaçãod e ambiente de pergunta e 
        resposta para o cliente final usando o terminal */
    
        const rl = require('readline')
        this.prompt = rl.createInterface({ 
            input: stdin,
            output: stdout
        })
    }

    cadastrarLivro(){
        console.log('-------------------------------------------------')
        console.log('Digite as informações para entrada de novo livro:')
        console.log('-------------------------------------------------')
        this.prompt.question("Título:", (respostaTitulo)=>{
            let titulo = respostaTitulo 

            this.prompt.question("Autor:", (respostaAutor)=>{
                let autor = respostaAutor 

                this.prompt.question("Editora:", (respostaEditora)=>{
                    let editora = respostaEditora 

                    this.prompt.question("Ano Edição:", (respostaEdicao)=>{
                        let edicao = respostaEdicao 

                        this.prompt.question("Preço:", (respostaPreco)=>{
                            let preco = parseFloat(respostaPreco)
                            let novoLivro = new Livro(titulo, autor, editora, edicao, preco)

                            this.livros.push(novoLivro)
                            console.log(this.livros) 

                            console.log('----------------------------')
                            console.log('Livro cadastrado com sucesso')
                            console.log('----------------------------')
                            
                              this.prompt.question("Gostaria de adicionar novo livro?: s/n \n", (resposta)=> {
                                if(resposta == 's'){
                                    return this.cadastrarLivro()
                                }
                                    return this.lidarSaida()
                            })
                        })
                    })
                })
            })
        })
    } 
 
    

    listarLivros(){
        console.log('===========================')
        console.log(this.livros)
        console.log('===========================')
        return this.lidarSaida()
    }

    buscarLivro(){
        this.prompt.question("Digite o título do livro para busca: \n",(titulo)=>{
            const livroEncontrado = this.livros.find(livro => livro.titulo == titulo)
            if(livroEncontrado){
                console.log("===============================")
                console.log(livroEncontrado)
                console.log("===============================")
                return this.lidarSaida()
            }
        } )
    
    }

    apagarLivro(){
        this.prompt.question("Digite o título do livro que você deseja apagar: \n",(titulo)=>{
            
            const livroExiste = this.livros.find(livro => livro.titulo == titulo)
            if(!livroExiste){
            
                console.log('---------------------------------------');
                console.log("Nenhum livro foi encontrado com este ID");
                console.log('---------------------------------------');
                return this.lidarSaida()
            }
            this.livros.forEach((livro, posicao)=>{
            
                if(livro.titulo == titulo){
                
                    this.livros.splice(posicao,1)
                    console.log('--------------------------');
                    console.log('Livro apagado com sucesso!');
                    console.log('--------------------------');
                }
            })
            return this.lidarSaida()
        })
        
            }
        


    menu(){
        console.log("**************************************");
        console.log(`Seja bem vindo à livraria ${this.nome}`);
        console.log('**************************************');
        console.log("______________________________________"); 
        console.log(' Menu '); 
        console.log('1 - Cadastrar novo livro;'); 
        console.log('2 - Listar livros do acervo;'); 
        console.log('3 - Buscar livro;'); 
        console.log('4 - Apagar livro do acervo.'); 
        console.log('______________________________________');

        this.prompt.question("Digite a opção desejada: \n", (resposta)=>{
            const opcao = parseInt(resposta); // entra string, sai numero decimal

            switch (opcao) {
                case 1:
                    this.cadastrarLivro()
                    break;
                case 2:
                    this.listarLivros()
                    break;
                case 3: 
                    this.buscarLivro()
                    break;
                case 4: 
                    this.apagarLivro()
                    break;
                case 0: 
                    console.log('--------------------------')
                    console.log("Volte sempre!")
                    console.log('--------------------------')
                    
                    this.prompt.close()
            
                default:
                    console.log("--------------------------------------")
                    console.log("Opção não encontrada, tente novamente!")
                    console.log("--------------------------------------")
                    this.prompt.close()
                    break;
            }
        })
    }

    lidarSaida(){
        console.log('-----------------------')
        console.log('1 - Voltar ao Menu')
        console.log('2 - Sair')
        console.log('-----------------------')

        this.prompt.question("Escolha uma das opções: \n", (resposta)=>{
            
            const alternativa = parseInt(resposta)

            switch (alternativa) {
                case 1:
                    this.menu()
                    break;
                case 2:
                    console.log('=================================================')
                    console.log("Aguardaremos ansiosos seu retorno! Volte Sempre!!")
                    console.log('=================================================')
                    this.prompt.close()
                    break;
                default:
                    console.log(`A opção ${opcao} não é valida, tente novamente!`)
                    this.lidarSaida()
                    break;
            }
        })
    }
}

const novaLoja = new Livraria("Bratti's")
novaLoja.menu()

const livro1 = new Livro("O Mundo de Sofia", "Jostein Gaarder", "Cia das Letras", "R$ 64,00")
console.log(livro1)
const livro2 = new Livro("O Hobbit", "J.R.R.Tolkien", "Martins Fontes", 79.80)
console.log(livro2)
const livro3 = new Livro("Origens mágicas da wicca", "Sorita d'Este", "Alfabeto", 35.49 )
console.log(livro3)
const livro4 = new Livro("As cronicas de Narnia", "C.S Lewins", "Martins Fontes", 49.90)
console.log(livro4)
const livro5 = new Livro("O triangulo das Bermudas", "Charles Berlitz", "Circulo do livro", 28.00)
console.log(livro5)
const livro6 = new Livro("As mil e uma noites - 2 Volumes", "Antoine Galland", "Nova Fronteira", 189.90)
console.log(livro6)
const livro7 = new Livro("Harry Potter - A pedra filosofal", "J.K Rowling", "Rocco", 59.90)
console.log(livro7)
const livro8 = new Livro("O Senhor dos aneis - A sociedade do Anel", "J.R.R Tolkien", "Martins Fontes", 80)
console.log(livro8)
const livro9 = new Livro("O jogar numero dois", "Ernest Cline", "Intrinseca", 90)
console.log(livro9)
const livro10 = new Livro("Pai rico pai pobre", "Robert T. Kiyosaki", "AltaBooks", 59.85)
console.log(livro10)








