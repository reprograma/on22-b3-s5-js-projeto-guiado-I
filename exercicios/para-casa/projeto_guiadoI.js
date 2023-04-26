// 1 Crie uma classe Livro com as propriedades titulo, autor, editora e preco. O id deve ser preechido com um número aleatório entre 0 e 100
const ask = require("prompt-sync")();
const readline = require("node:readline/promises");
const { stdin: input, stdout: output } = require("node:process");

const rl = readline.createInterface({ input, output });

class Book {
  #books;

  constructor(title, author, publisher, price, books) {
    this.id = this.generateID();
    this.title = title;
    this.author = author;
    this.publisher = publisher;
    this.price = price;
    this.#books = books;
  }

  generateID() {
    const id = Math.floor(Math.random() * 101);
    const idExists = this.#books?.some((book) => {
      return book.id === id;
    });

    if (idExists) {
      this.generateID();
      return;
    }

    return id;
  }
}

class Bookstore {
  constructor() {
    this.books = [];
  }

  addBook(title, author, publisher, price) {
    const bk = new Book(title, author, publisher, price, this.books);

    this.books.push(bk);

    return bk.id;
  }

  indexBooks() {
    if (!this.books.length) {
      console.log("Nenhum livro cadastrado.");
      return;
    }
    
    this.books.forEach((book) => {
      console.log(book);
    });
  }

  getBook(title) {
    const foundBook = this.books.find((book) => book.title === title);

    console.log(foundBook);
  }

  removeBook(id) {
    if (id === undefined) {
      console.log("invalid id provided");

      return;
    }

    const bookToRemove = this.books.findIndex(
      (book) => book.id === parseInt(id)
    );

    if (bookToRemove === -1) {
      console.log(`The book with id: ${id} is not registered`);
      return;
    }

    delete this.books[bookToRemove];
  }
}

async function getUserAnswer() {
  const res = await rl.question(
    `Digite um número para o que deseja:\n
    1 - Adicionar livro
    2 - Buscar livro
    3 - Mostrar todos os livros
    4 - Deletar livro
    0 - Sair\n`
  );

  return parseInt(res);
}

const newBookQuestions = [
  { key: "title", text: "Qual o nome do livro? " },
  { key: "author", text: "Qual o nome do autor? " },
  { key: "publisher", text: "Agora nos diga o nome da editora: " },
  { key: "price", text: "Quanto esse livro deve custar? " },
];

async function init() {
  let answer = -1;
  const bookStore = new Bookstore();

  do {
    answer = await getUserAnswer();

    switch (answer) {
      case 1:
        const bookInfo = newBookQuestions.map((q) => ask(q.text));

        bookStore.addBook(...bookInfo);
        break;
      case 2:
        const title = ask("Diga-nos o título do livro que está procurando: ");
        bookStore.getBook(title);
        break;
      case 3:
        console.log("TODOS OS LIVROS: ");
        bookStore.indexBooks();
        break;
      case 4:
        const id = ask("Diga-nos o ID do livro para removê-lo: ");
        bookStore.removeBook(id);
        console.log("O livro foi removido com sucesso!");
        break;
    }
  } while (answer !== 0);

  rl.close();
}

void init();
