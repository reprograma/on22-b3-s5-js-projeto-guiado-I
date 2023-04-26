class Livro {
    constructor(titulo, autor, editora, preco) {
        this.titulo = titulo;
        this.autor = autor;
        this.editora = editora;
        this.preco = preco;

        this.id = this.criarId();

    }
    criarId() {
        this.arrayDeLivros = [];
        let id = Math.floor(Math.random() * 100);
        while (this.arrayDeLivros.some(livro => livro.id === id)) {
            id = Math.floor(Math.random() * 100);
        }
        return id;
    }
}


class Loja {
    constructor() {
        this.arrayDeLivros = [];
    }

    cadastrarLivro() {

        // estou adicionando dois livros na mão, por isso não deixei o loop chegar a 100.
        // fiz de acordo com push feito na aula de revisão com o exemplo carros e fabrica de carros:
        for (let i = 0; i < 98; i++) {
            this.arrayDeLivros.push(new Livro(`titulo-${i}`, `autor-${i}`, `editora-${i}`, `preco-${i}`))
        }
        this.arrayDeLivros.push(livro1);
        this.arrayDeLivros.push(livro2);

        //this.arrayDeLivros.push(new Livro("The Lord Of the Rings", "Tolkien, J.R.R.", "Harper Collins", 50));
        //this.arrayDeLivros.push(new Livro("As mil e uma noites", "trad. Aluísio Abranches", "Anima", 35));

        console.log(this.arrayDeLivros);
    }

    listaLivros() {
        console.log('Lista de livros:');
        this.arrayDeLivros.forEach(livro => {
            console.log("- " + livro.titulo + ", de " + livro.autor + ", publicado pela editora " + livro.editora + ". Preço: R$ " + livro.preco.toFixed(2) + ".");
        });
    }

    buscarLivro(titulo) {

        const livroEncontrado = this.arrayDeLivros.find(livro => livro.titulo === titulo);

        if (livroEncontrado) {
            console.log("Livro encontrado:" + livroEncontrado.titulo + ", de " + livroEncontrado.autor + ", publicado pela editora " + livroEncontrado.editora + ". Preço: R$" + livroEncontrado.preco.toFixed(2) + ".");
        } else {
            console.log("Livro não encontrado.");
        }
        return livroEncontrado;
    }
    apagarLivro(id) {
        const indiceDeLivro = this.arrayDeLivros.findIndex(livro => livro.id === id);
        if (indiceDeLivro !== -1) {
            this.arrayDeLivros.splice(indiceDeLivro, 1);
            console.log("Livro com ID " + id + " apagado com sucesso.");
        } else {
            console.log("Livro com ID " + id + "não encontrado.");
        }
    }
}

const loja = new Loja();

//tô suando frio de nervoso

let livro1 = new Livro("The Lord Of the Rings", "Tolkien, J.R.R.", "Harper Collins", 50);
let livro2 = new Livro("As mil e uma noites", "trad. Aluísio Abranches", "Anima", 35);
loja.cadastrarLivro(livro1);
loja.cadastrarLivro(livro2);
loja.buscarLivro("The Lord Of the Rings");
loja.buscarLivro("As mil e uma noites");
loja.apagarLivro(livro2.id);
