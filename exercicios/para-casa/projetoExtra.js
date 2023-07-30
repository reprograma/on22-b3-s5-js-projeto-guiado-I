const readline = require('readline');

class Livro {
    constructor(titulo, autor, editora, preço, id) {
        this.titulo = titulo;
        this.autor = autor;
        this.editora = editora;
        this.preço = preço;
        this.id = id;

    }
}

class Loja {
    constructor() {
        this.livros = []; //propriedade livros no constructor
        this.prompt = readline.createInterface({
        input: process.stdin,
        output: process.stdout
})

}

menu() {
  console.log('1 - Adicionar livro');
  console.log('2 - Apagar livro');
  console.log('3 - Listar livros');
  console.log('4 - Pesquisar livro por título');
  console.log('0 - Sair');
  this.prompt.question('Escolha uma opção: ', function(opcao) {
    const id = parseInt(Math.random() * 1000);
    switch (opcao) {
      case '1':
        this.cadastrarLivro()
        rl.question('Título do livro: ', function(titulo) {
          rl.question('Autor do livro: ', function(autor) {
            rl.question('Editora do livro: ', function(editora) {
              rl.question('Preço do livro: ', function(preço) {
                const livro = new Livro(titulo, autor, editora, parseFloat(preço), id);
                loja.cadastrarLivro(titulo, autor, editora, preço, id);
                menu();
              });
            });
          });
        });
        break;
      case '2':
        rl.question('ID do livro que deseja deletar: ', function(id) {
          loja.apagarLivro(parseInt(id));
          menu();
        });
        break;
      case '3':
        loja.listarLivros();
        menu();
        break;
      case '4':
        rl.question('Título do livro que deseja pesquisar: ', function(titulo) {
          loja.pesquisarLivroPorTitulo(titulo);
          menu();
        });
        break;
      case '0':
        console.log('Encerrando programa...');
        rl.close();
        break;
      default:
      console.log('Opção inválida, tente novamente.');
        menu();
        break;
        
    }
  }); 
} 

}