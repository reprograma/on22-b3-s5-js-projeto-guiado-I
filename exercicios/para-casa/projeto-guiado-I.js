class Livro{
  constructor(titulo, autor, editora, preco) {
    this.gerarIdUnico();
    this.titulo = titulo;
    this.autor = autor;
    this.editora = editora;
    this.preco = preco;
  }
  gerarIdUnico(){
    this.id = Math.floor(Math.random()* 100)
   }
  }

  const livro1 = new Livro ("Dogma e Ritual da Alta Magia", "Levi, Eliphas", "Madras", 45.00 )
console.log(livro1)
       
  class Loja{
    constructor (){
      this.livros = []
    }
   
    CadastrarLivro(livro){
  
        this.livros.push(livro)

    }
    listarLivros(){
      console.log(this.livros)
    }

    buscarLivro(titulo){
      const livroEncontrado = this.livros.find(livro => livro.titulo === titulo);
  
      if (livroEncontrado) {
        console.log(`Livro encontrado: ${livroEncontrado.titulo}`);
        console.table(livroEncontrado);
      } else {
        console.log(`O livro "${titulo}" não foi encontrado.`);
      }
    }

    apagarLivro(id){

      listaDeDoces.forEach((livro, id) => {
        if(livro.id == id){
          listaDeLivros.splice(id,98)
        }
      })
    } 
  } 
    
  const novaLoja1 = new Loja()
  const novoLivro = new  Livro("O grito", "Eu, Eu mesma e Irene", "Jaca Mole", 10)
  novaLoja1.CadastrarLivro(novoLivro)
  let listaDeLivros = [(98,"Dogma e Ritual da Alta Magia", "Levi, Eliphas", "Madras", 45.00 ), (0,"O grito", "Eu, Eu mesma e Irene", "Jaca Mole", 10)]

//Após executar o apagarLivro apagou,conforme solicitado o livro 98, "Dogma e Ritual da Alta Magia" 
novaLoja1.listarLivros()
//Porém quando eu exercuto listarLivros(), ele me devolve os dois livros com um Id duferente.

novaLoja1.buscarLivro("O grito")
//Devolteu direitinho as informações do livro "O Grito";


 

