class Livro {
  constructor(titulo, autor, editora, preco) {
    this.titulo = titulo;
    this.autor = autor;
    this.autor = editora;
    this.preco = preco;
    this.id = Math.floor(Math.random() * 100);
  }

  verificarSeExisteId() {
    this.id = []
    while (this.livros.some((livro) => livro.id === id)) {
      id = Math.floor(Math.random() * 100);
    }

    return id;
  }
}

const livros = [
  new Livro("Crepúsculo", "Stephenie Meyer", "Little, Brown and Company", 49.99),
  new Livro("Percy Jackson e o ladrão de raios", "Rick Riordan", "Miramax Books", 44.99),
  new Livro("A Seleção", "Kiera Cass", "Editorial Presença", 64.9),
];

class Loja {
  constructor() {
    this.livros = [livros];
  }

  cadastrarLivro(titulo, autor, editora, preco) {
    const livro = new Livro(titulo, autor, editora, preco);
    this.livros.push(livro);
  }

  listarLivros() {
    console.log("Lista de livros:", this.livros);
  }

  buscarLivro(titulo) {
    for (let livro of this.livros) {
      if (livro.titulo == titulo) {
        console.log(`ID: ${livro.id}`);
        console.log(`Título: ${livro.titulo}`);
        console.log(`Autor: ${livro.autor}`);
        console.log(`Editora: ${livro.editora}`);
        console.log(`Preço: R$${livro.preco.toFixed(2)}`);
        return;
      }
    }
    console.log("Livro não encontrado");
  }

  apagarLivro(id) {
    const index = this.livros.findIndex((livro) => livro.id === id);
    if (index !== -1) {
      this.livros.splice(index, 1);
      console.log(`Livro com ID ${id} apagado.`);
    } else {
      console.log(`Livro com ID ${id} não encontrado.`);
    }
  }
}

const loja = new Loja();

const novoLivro = new Livro("Tenho Fé Que Consigo", "Luana Melo", "Minha Livraria", 39.9);
console.log("Novo livro:", novoLivro);

loja.listarLivros();

loja.buscarLivro("Harry Potter e a câmera secreta");

loja.apagarLivro(40);
loja.apagarLivro(3);
loja.apagarLivro(70);

//surtei bastante mas passo bem kkk
