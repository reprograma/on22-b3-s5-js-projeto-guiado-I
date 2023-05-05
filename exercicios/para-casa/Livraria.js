const { stdin, stdout } = require("process");
const rl = require("readline");

class Livros {
  constructor(titulo, autor, editora, preco) {
    this.titulo = titulo;
    this.autor = autor;
    this.editora = editora;
    this.editora = preco;
    this.id = Math.floor(Math.random() * 101);
  }
}
 
class Loja {
  constructor(nome) {
    this.nome = nome;
    this.livros = [];

    this.prompt = rl.createInterface({
      input: stdin,
      output: stdout,
    });
  }

  cadastrarLivro() {
    console.log("Digite aqui as informações do novo livro: \n");

    this.prompt.question("Título: \n", (respostaTitulo) => {
      let titulo = respostaTitulo
        this.prompt.question("Autor(a): \n", (respostaAutor) => {
            let autor = respostaAutor
            this.prompt.question("Editora: \n", (respostaEditora) =>{
                let editora = respostaEditora
                this.prompt.question("Preço: \n", (respostaPreco) => {
                    let preco = 
                })
            })
        })
    });
  }
}
