 class Livro  {
    constructor(titulo, autor, editora, preco) { //constructor será o primeiro métoda que será executado quando a classe for iniciada    
        this.titulo = titulo,
        this.autor = autor,
        this.editora = editora,
        this.preco = preco

    }
}

class Loja {
    constructor(livros) {
        this.livros = livros
    }

    cadastrarLivro(informacoesLivro) {

        this.livros.push(informacoesLivro)
    }

    listarLivros() {

    }

    buscarLivro() {

    }

    apagarLivro() {

    }
}

const arrayLivros = [
    new Livro ("Dom Casmurro", "Machado de Assis", "Penguim", 25.50),
    new Livro ("O Retrato de Dorian Grey", "Osacr Wild", "Clube de Literatura Clássica", 70.50),
    new Livro ("Inteligência Emocional", "Daniel Goleman", "Sextante", 50.00),
    new Livro ("Brasil: Uma biografia", "Lilia M. Schwarcz e Heloísa M. Starling", "Companhia das Letras", 90.50),
    new Livro ("1984","George Orwell","Companhia das Letras", 60.00)


]

const livro = 
    new Livro (arrayLivros, "Educação como prática da liberdade", "Paulo Freire", "Paz&Terra", 25.5)

    const novoLivro = new Livro("Livro 1", "Autor 1", "Editora 1", 25.90)
    livro.cadastrarLivro(livro);
    console.log(livro)