class Livro {
    constructor(titulo, autor, editora, preço, id) {
        this.titulo = titulo;
        this.autor = autor;
        this.editora = editora;
        this.preço = preço;
        this.id = id;

    }
}

//Crie uma classe Loja com uma propriedade livros, que deverá ser um array de objetos da classe Livro.

class Loja {
    constructor() {
        this.livros = []; //propriedade livros no constructor
    }

/*Na classe Loja, crie um método cadastrarLivro que recebe como parâmetros as informações do livro e cria um objeto da 
classe Livro para adicioná-lo ao array livros.**/

    cadastrarLivro(titulo, autor, editora, preço, id) {
    const livro = new Livro(titulo, autor, editora, preço, id);//criei um novo objeto da classe Livro
    this.livros.push(livro);//adiciona o objeto ao array de livros

}

//Na classe Loja, crie um método listarLivros que percorre o array livros e exibe as informações de cada livro.

    listarLivros() { 
    this.livros.forEach(livro => { //usei o forEach para percorrer o array de livros e exibir as informações
        console.log(`Titulo: ${livro.titulo}`);
        console.log(`Autor: ${livro.autor}`);
        console.log(`Editora: ${livro.editora}`);
        console.log(`Preço: ${livro.preço}`);
        console.log(`Id: ${livro.id}`);

    })

}

/**Na classe Loja, crie um método buscarLivro que recebe como parâmetro o título do livro a ser pesquisado.
 * Esse método deve percorrer o array livros, buscar o livro pelo título e exibir suas informações.**/

    buscarLivro(titulo) {
    this.livros.forEach(livro => { //usei o forEach para percorrer o array de livros e exibir as informações
        if (livro.titulo === titulo) {
        console.log(`Titulo: ${livro.titulo}`);
        console.log(`Autor: ${livro.autor}`);
        console.log(`Editora: ${livro.editora}`);
        console.log(`Preço: ${livro.preço}`);
        console.log(`Id: ${livro.id}`);

        }
    })
}

/**Na classe Loja, crie um método apagarLivro que recebe o id do livro e apaga ele do array de livros daquela loja. 
Esse método deve percorrer o array de livros da loja , encontrar o objeto no array que tem o id igual ao que foi enviado,
se ele existir deve apaga-lo usando o index dele no array original, caso não, informar que o livro com aquele ID não existe. */

    apagarLivro(id) {
        const index = this.livros.findIndex((livro) => livro.id === id)
        if (index === -1) {
            console.log(`Livro com ID ${id} não encontrado.`)
        } else {
            this.livros.splice(index, 1)
            console.log(`Livro com ID ${id} removido com sucesso.`)
        }

    }
}

//Criação da loja e dos livros:
const loja = new Loja();
const livro1 = new Livro("Javascript da Depressão", "Nazaré Almeida", "Reprograma Livros", 200, 0);
const livro2 = new Livro("Programação para quem não desiste", "Java de Oliveira Script", "Reprograma Books", 100, 1);

//Cadastro dos livros:
loja.cadastrarLivro(livro1.titulo, livro1.autor, livro1.editora, livro1.preço, livro1.id);
loja.cadastrarLivro(livro2.titulo, livro2.autor, livro2.editora, livro2.preço, livro2.id);

//Listagem dos livros na loja:
console.log('Lista de livros da loja:')
loja.listarLivros();

//Busca de um livro específico na loja:
console.log('Busca de livro:')
loja.buscarLivro("Javascript da Depressão");

//Remoção de um livro pelo ID:
console.log('Remoção de livro:')
loja.apagarLivro(livro2.id)

//Verificação da lista de livros depois de cada remoção:
console.log('Nova lista de livros após feita a remoção:')
loja.listarLivros()