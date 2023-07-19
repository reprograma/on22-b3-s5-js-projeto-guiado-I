const { stdin, stdout } = require('process')
const rl = require('readline')



class Livro {
    constructor(titulo, autor, editora, edicao, preco){
        this.titulo = titulo 
        this.autor = autor 
        this.editora = editora 
        this.edicao = edicao 
        this.preco = preco
        this.id = Math.floor(Math.random() * 101) 
    }

    substituirID(livro){
        livro.id = Math.floor(Math.random() * 101)
        return livro
    }
}


class Livraria {
    constructor(nome){
        this.nome = nome 
        
        this.livros = []
      
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
            const opcao = parseInt(resposta); 
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

const novaLoja = new Livraria("Lelets")
novaLoja.menu()