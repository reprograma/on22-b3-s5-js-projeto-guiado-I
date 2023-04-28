class Livro {
    constructor(titulo, autor, editora, preco) {
      this.id = this.gerarId();
      this.titulo = titulo;
      this.autor = autor;
      this.editora = editora;
      this.preco = preco;
    }
  
    gerarId() {
      let id = Math.floor(Math.random() * 101); // número aleatório entre 0 e 100
      while (loja.livros.find(livro => livro.id === id)) { // verifica se já existe um livro com esse id na loja
        id = Math.floor(Math.random() * 101); // se já existir, gera um novo número aleatório
      }
      return id;
    }
  }
  
  class Loja {
    constructor() {
      this.livros = [];
    }
  
    cadastrarLivro(titulo, autor, editora, preco) {
      const livro = new Livro(titulo, autor, editora, preco);
      this.livros.push(livro);
    }
  
    listarLivros() {
      this.livros.forEach(livro => {
        console.log(`Título: ${livro.titulo}\nAutor: ${livro.autor}\nEditora: ${livro.editora}\nPreço: ${livro.preco}\nID: ${livro.id}\n`);
      });
    }
  
    buscarLivro(titulo) {
      const livro = this.livros.find(livro => livro.titulo === titulo);
      if (livro) {
        console.log(`Título: ${livro.titulo}\nAutor: ${livro.autor}\nEditora: ${livro.editora}\nPreço: ${livro.preco}\nID: ${livro.id}\n`);
      } else {
        console.log(`Livro não encontrado`);
      }
    }
  
    apagarLivro(id) {
      const index = this.livros.findIndex(livro => livro.id === id);
      if (index !== -1) {
        this.livros.splice(index, 1);
        console.log(`Livro com ID ${id} apagado com sucesso`);
      } else {
        console.log(`Livro com ID ${id} não encontrado`);
      }
    }
  }

  




  const loja = new Loja();

// cadastrar um livro
loja.cadastrarLivro("O Senhor dos Anéis", "J.R.R. Tolkien", "HarperCollins", 89.90);

// cadastrar mais livros
loja.cadastrarLivro("Harry Potter e a Pedra Filosofal", "J.K. Rowling", "Rocco", 59.90);
loja.cadastrarLivro("1984", "George Orwell", "Companhia das Letras", 39.90);

// listar todos os livros da loja
loja.listarLivros();

// buscar um livro pelo título
loja.buscarLivro("O Senhor dos Anéis");

// apagar um livro pelo id
loja.apagarLivro(1);

// tentar apagar um livro que não existe
loja.apagarLivro(10);
