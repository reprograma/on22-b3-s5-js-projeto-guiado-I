class Livro {
  constructor(titulo, autor, editora, preco){
    this.id = this.geradorDeId();
    this.titulo = titulo;
    this.autor = autor;
    this.editora = editora;
    this.preco = preco;
  };

  geradorDeId(){
    const livros = [];
    let id = Math.floor(Math.random() * 101);
    while (livros.some((livro) => {
      livro.id === id // me diz se esta verificação é true ou false
    })){// se true, ele entra novamente, gera outro numero e verifica
      id = Math.floor(Math.random() * 101);
    };
    return id;
  };
};

const livro = [
  new Livro("A casa dos pesadelos", "Marcos Debrito", "Faro Editorial", 20),
  new Livro("A mulher na janela", "A. J. Finn", "Arqueiro", 26),
  new Livro("Memórias póstumas de Braz cubas", "Machado de Assis", "Ciranda cultural", 14),
  new Livro("O pequeno príncipe", "Antoine de Saint-Exupéry", "Via Leitura", 30),
  new Livro("Os miseráveis", "Victor Hugo", "Principis", 30)
];
// console.log(livro[1]);

class Loja {
  constructor(){
    this.livros = [];
  };

  cadastrarLivro(livro){
    this.livros.push(livro);
  };

  listarlivros(){
    this.livros.forEach((livro)=> {
      console.log(livro);
    });
  };

  buscarlivro(titulo){
    const livroPeloTitulo = this.livros.filter((livro) => {
      livro.titulo === titulo;
      console.log(livroPeloTitulo);
    });
  };

  apagarLivro(id) {
    const index = this.livros.findIndex((livro) => {
      livro.id === id
    });
    if (index !== -1) {// findIndex retorna -1, caso não encontre o que procura
      this.livros.splice(index, 1);//remove um livro com este index
      console.log("Livro removido com sucesso");
    };
    console.log("Não existe um livro com este id");
  };
};

// Bonus aqui