/*Crie uma classe Livro com as propriedades titulo, autor, editora e preco. 
O id deve ser preechido com um número aleatório entre 0 e 100
Ao preencher o id, verifique se não existe um livro com aquele ID na lista. Se houver, crie outro ID
aletório e repita esse processo até que o número gerado não tenha sido selecionado como ID anteriormente.*/

class Livro {
    constructor(titulo, autor, editora, preco) {
      this.id = this.gerarId();
      this.titulo = titulo;
      this.autor = autor;
      this.editora = editora;
      this.preco = preco;
    }
  
    gerarId() {
      let id = Math.floor(Math.random() * 100);
      while (loja.livros.some(livro => livro.id === id)) {
        id = Math.floor(Math.random() * 100);
      }
      return id;
    }
  }
  
  /*Crie uma classe Loja com uma propriedade livros, que deverá ser um array de objetos da classe Livro.
Na classe Loja, crie um método cadastrarLivro que recebe como parâmetros as informações do livro e cria 
um objeto da classe Livro para adicioná-lo ao array livros.*/


  class Loja {
    constructor() {
      this.livros = [];
    }
  
    cadastrarLivro(titulo, autor, editora, preco) {
      const livro = new Livro(titulo, autor, editora, preco);
      this.livros.push(livro);
    }
    /*- Na classe Loja, crie um método listarLivros que percorre o array livros e exibe as 
    informações de cada livro.*/

    listarLivros() {
      console.log("Livros cadastrados:");
      this.livros.forEach(livro => console.log(livro));
    }
  
    /*- Na classe Loja, crie um método buscarLivro que recebe como parâmetro o título do livro a ser pesquisado. 
Esse método deve percorrer o array livros, buscar o livro pelo título e exibir suas informações.*/

    buscarLivro(titulo) {
      const livro = this.livros.find(livro => livro.titulo === titulo);
      if (livro) {
        console.log("Informações do livro:");
        console.log(livro);
      } else {
        console.log("Livro não encontrado.");
      }
    }
  

    /*- Na classe Loja, crie um método apagarLivro que recebe o id do livro e apaga ele do array de livros daquela loja. 
Esse método deve percorrer o array de livros da loja , encontrar o objeto no array que tem o id igual ao que
 foi enviado, se ele existir deve apaga-lo usando o index dele no array original, caso não, informar que 
 o livro com aquele ID não existe*/

    apagarLivro(id) {
      const index = this.livros.findIndex(livro => livro.id === id);
      if (index !== -1) {
        this.livros.splice(index, 1);
        console.log(`Livro com ID ${id} removido.`);
      } else {
        console.log(`Livro com ID ${id} não encontrado.`);
      }
    }
  }
  
  const loja = 
  new Loja();
  
