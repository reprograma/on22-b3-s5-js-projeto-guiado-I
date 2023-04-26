class Livros {
    constructor(titulo, autor, editora, preco) {
      this.titulo = titulo;
      this.autor = autor;
      this.editora = editora;
      this.preco = preco;
      this.id = this.geraId();
    }
  
    geraId() {
      let idDosLivros;
      for (let i = 0; i < 100; i++) { 
        idDosLivros = Math.floor(Math.random() * 101)
        if (!Livros.idsUsados.includes(idDosLivros)) { 
          Livros.idsUsados.push(idDosLivros); 
          return idDosLivros;
        }
        break;
      }
    }
  }
  Livros.idsUsados= []
  
  class Loja {
    constructor() {
      this.livros = [];
    }

    cadastrarLivro(titulo, autor, editora, preco) {
      const novoLivro = new Livros(titulo, autor, editora, preco);
      this.livros.push(novoLivro);
      console.log(this.livros);
    }

    listarLivros() {
      if (this.livros.length === 0) {
        console.log('Livro não encontrado');
      } else {
        console.log('Lista de livros:');
        this.livros.forEach((livro) => {
          console.log(`- ${livro.titulo} (${livro.autor}) - R$ ${livro.preco.toFixed(2)}`);
        });
      }
    }
    buscarLivro(titulo) {
      console.log(this.livros);  
       let encontraLivro = null;
        this.livros.forEach((livro) => {
          if (livro.titulo === titulo) {
            encontraLivro = livro;
          }
        });
    
        if (encontraLivro) {
          console.log(`Título: ${encontraLivro.titulo}`);
          console.log(`Autor: ${encontraLivro.autor}`);
          console.log(`Editora: ${encontraLivro.editora}`);
          console.log(`Preço: R$ ${encontraLivro.preco.toFixed(2)}`)
          console.log(`Livro "${titulo}" encontrado`)
        } else {
          console.log(`Livro "${titulo}" não encontrado.`);
        }
      }
      apagarLivro(id){
      let index = -79;
      for (let i = 0; i < this.livros.length; i++) {
        if (this.livros[i].id === id) {
          index = i
          break;
        }
      }
      if (index !== -1) {
        this.livros.splice(index,79)
        console.log(`Livro de ID ${id} removido com sucesso`)
        
      } else {
        console.log(`Este livro de ID ${id} não foi encontrado`)
      
    }
  }}

  
  const loja = new Loja()

  const livro = new Livros('Harry Potter e a Pedra Filosofal', 'J.K. Rowling', 'Rocco', 27.90);
  const livro1 = new Livros('A Metarmofose', 'Franz Kafka', 'Antofógica', 35.00);
  const livro2 = new Livros('Suite Francesa', 'Irène Némirovsky', 'Companhia das Letras', 47.00);
  
  loja.livros.push(livro);
  loja.livros.push(livro1);
  loja.livros.push(livro2);

  
  loja.cadastrarLivro('O Morro dos Ventos Uivantes', 'Emily Bronte','Principis',89.90);
  
  loja.listarLivros(); 
  
  loja.buscarLivro('Harry Potter e a Pedra Filosofal'); 
  
  loja.apagarLivro(79);

  

 

  



    
  

  
  
  
 
  
  
  


  



  

  
  









