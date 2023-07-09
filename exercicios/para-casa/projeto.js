const readline = require('readline');

class Livro {
  constructor(titulo, autor, editora, preco) {
    this.titulo = titulo;
    this.autor = autor;
    this.editora = editora;
    this.preco = preco;
    this.id = Math.floor(Math.random() * 101);
  }

  substituirID(livro) {
    livro.id = Math.floor(Math.random() * 101);
    return livro;
  }
}

class Loja {
  constructor(nome) {
    this.nome = nome;
    this.livros = [];
    this.prompt = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  cadastrarLivros() {
    console.log("Digite as informações do novo livro:\n");
    this.prompt.question("Título: \n", (respostaTitulo) => {
      let titulo = respostaTitulo;
      this.prompt.question("Autor: \n", (respostaAutor) => {
        let autor = respostaAutor;
        this.prompt.question("Editora: \n", (respostaEditora) => {
          let editora = respostaEditora;
          this.prompt.question("Preço: \n", (respostaPreco) => {
            let preco = parseFloat(respostaPreco);
            let novoLivro = new Livro(titulo, autor, editora, preco);
            this.livros.push(novoLivro);
            console.log("Livro cadastrado com sucesso");
            this.prompt.question("Gostaria de adicionar um novo livro? (S/N)", (resposta) => {
              if (resposta.toUpperCase() === "S") {
                this.cadastrarLivros();
              } else {
                this.lidarSaida();
              }
            });
          });
        });
      });
    });
  }

  listarLivros() {
    console.log(this.livros);
    this.lidarSaida();
  }

  buscarLivro() {
    this.prompt.question("Digite o título do livro:\n", (titulo) => {
      const livroEncontrado = this.livros.find(livro => livro.titulo === titulo);
      if (livroEncontrado) {
        console.log(livroEncontrado);
      } else {
        console.log("O livro não foi encontrado");
      }
      this.lidarSaida();
    });
  }

  apagarLivro() {
    this.prompt.question("Digite o ID do livro que deseja apagar: \n", (id) => {
      const livroIndex = this.livros.findIndex(livro => livro.id == id);
      if (livroIndex === -1) {
        console.log("Nenhum livro foi encontrado com este ID");
      } else {
        this.livros.splice(livroIndex, 1);
        console.log("Livro apagado com sucesso");
      }
      this.lidarSaida();
    });
  }

  menu() {
    console.log("___________________________________");
    console.log(`Bem Vindo(a) a Loja: ${this.nome}`);
    console.log("_________________");
    console.log("1- Cadastrar Livros");
    console.log("2- Exibir todos os Livros");
    console.log("3- Apagar Livro");
    console.log("4- Buscar Livro");
    console.log("0- Sair");
    console.log("___________________________________");

    this.prompt.question("O que você deseja fazer?", (resposta) => {
      const opcao = parseInt(resposta);

      switch (opcao) {
        case 1:
          this.cadastrarLivros();
          break;
        case 2:
          this.listarLivros();
          break;
        case 3:
          this.apagarLivro();
          break;
        case 4:
          this.buscarLivro();
          break;
        case 0:
          console.log("Espero que tenha gostado da nossa Loja. Volte Sempre!");
          this.prompt.close();
          break;
        default:
          console.log(`A opção ${opcao} não é válida`);
          this.lidarSaida();
          break;
      }
    });
  }

  lidarSaida() {
    console.log("1- Voltar para o menu");
    console.log("2- Sair");
    this.prompt.question("Escolha uma das opções", (resposta) => {
      const opcao = parseInt(resposta);
      switch (opcao) {
        case 1:
          this.menu();
          break;
        case 2:
          this.prompt.close();
          break;
        default:
          console.log(`A opção ${opcao} é inválida, por favor digite uma opção válida`);
          this.lidarSaida();
          break;
      }
    });
  }
}

const minhaLoja = new Loja("Minha Loja");
minhaLoja.menu();


