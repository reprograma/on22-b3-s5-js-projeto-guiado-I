// É luta 

class Livro {
  constructor(titulo, autor, editora, preco) {
    this.titulo = titulo;
    this.autor = autor;
    this.editora = editora;
    this.preco = preco;
    this.id = Math.floor(Math.random() * 101);
  }
}

class Loja {
  constructor() {
    this.livros = [];
  }

  cadastrarLivro(titulo, autor, editora, preco) {
    const novoLivro = new Livro(titulo, autor, editora, preco);
    this.livros.push(novoLivro);
    console.log(`Livro "${titulo}" cadastrado com sucesso!`);
  }

  listarLivros() {
    console.log("Lista de livros da loja:");
    this.livros.forEach((livro) => {
      console.log(`- Título: ${livro.titulo}; Autor: ${livro.autor}; Editora: ${livro.editora}; Preço: R$ ${livro.preco}; ID: ${livro.id}`);
    });
  }

  buscarLivro(titulo) {
    const livroEncontrado = this.livros.find((livro) => livro.titulo === titulo);
    if (livroEncontrado) {
      console.log(`Livro "${titulo}" encontrado!`);
      console.log(`- Título: ${livroEncontrado.titulo}; Autor: ${livroEncontrado.autor}; Editora: ${livroEncontrado.editora}; Preço: R$ ${livroEncontrado.preco}; ID: ${livroEncontrado.id}`);
    } else {
      console.log(`Livro "${titulo}" não encontrado na loja.`);
    }
  }

  apagarLivro(id) {
    const livroIndex = this.livros.findIndex((livro) => livro.id === id);
    if (livroIndex >= 0) {
      this.livros.splice(livroIndex, 1);
      console.log(`Livro com ID ${id} apagado da loja.`);
    } else {
      console.log(`Não foi encontrado um livro com o ID ${id} na loja.`);
    }
  }
}

