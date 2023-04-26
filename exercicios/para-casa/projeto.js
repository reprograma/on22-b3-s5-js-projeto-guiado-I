class Livro {
    constructor(titulo , editora , autor , preco ,) {
        this.titulo = titulo;
        this.editora = editora;
        this.autor = autor;
        this.preco = preco;
        this.id = this.gerarId()
    }

    gerarId(){

        let idGerado = Math.floor(Math.random() * 100)
        return idGerado
    }

    verificarId() {
        while (this.livros.some((livro) => livro.id = id)) {
            this.gerarId()
        }
        return id
    }
}

const livros = [
    new Livro("O conto da Aia" , "Rosa" , "Margaret Atwood" , "R$15,00" , id ),
    new Livro("Ensaio sobre a segueira" , "Sabão" , "José Saramago" , "R$12,00" , id ),
    new Livro("Guerra e paz" , "Aurora" , "Lev tolstói" , "R$30,00" , id ),
    new Livro("Dom Quixote" , "Flores" , "Miguel de Cervantes" , "R$20,00" , id ),
];

class Loja {
    constructor(livros) {
        this.livros = livros
    }
cadastrarLivro(livro) {
  this.livros.push(livro)
    }

listarLivros() {
    this.livros.forEach(livro => {
        console.log(`Título: ${livro.titulo}`);
        console.log(`Editora: ${livro.editora}`);
        console.log(`Autor: ${livro.autor}`);
        console.log(`Preço: ${livro.preco}`);
        console.log(`Id: ${livro.id}`);
        })
}
buscarLivro(tituloBuscado) {
    const livroBuscado = this.livros.find((livro) => livro.titulo == tituloBuscado)
    console.log(`Título: ${livroBuscado.titulo}`);
    console.log(`Editora: ${livroBuscado.editora}`);
    console.log(`Autor: ${livroBuscado.autor}`);
    console.log(`Preço: ${livroBuscado.preco}`);
    console.log(`Id: ${livroBuscado.id}`);
    }

 deletarLivro(idBuscado) {
    const indexBuscado = this.livros.findIndex((livro) => idBuscado == livro.id)
      console.log(indexBuscado)
    
      if(indexBuscado /= -1) {
          this.livros.splice(indexBuscado, 1)
          console.log(`O livro com id ${idBuscado} foi deletado.`)
    } else {
           console.log(`Não existe nehum livro com o id ${idBuscado}`)
    }
    const novoLivro = new Livro("Cem anos de solidão" , "Árvore" , "Gabriel Garcia Marquez" , "R$25,00" , id ) 
    livros.cadastrarLivro(novoLivro)
    }
}
