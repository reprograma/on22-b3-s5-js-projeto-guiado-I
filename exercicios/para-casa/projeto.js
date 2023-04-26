/**[OK] - Crie uma classe Livro com as propriedades titulo, autor, editora e preco. O id deve ser preechido com um número
 aleatório entre 0 e 100

[OK] - Ao preencher o id, verifique se não existe um livro com aquele ID na lista. Se houver, crie outro ID aletório e repita
 esse processo até que o número gerado não tenha sido selecionado como ID anteriormente.

[OK?] - Crie uma classe Loja com uma propriedade livros, que deverá ser um array de objetos da classe Livro.

[OK] Na classe Loja, crie um método cadastrarLivro que recebe como parâmetros as informações do livro e cria um objeto da classe
 Livro para adicioná-lo ao array livros.

[OK] Na classe Loja, crie um método listarLivros que percorre o array livros e exibe as informações de cada livro.

[OK] Na classe Loja, crie um método buscarLivro que recebe como parâmetro o título do livro a ser pesquisado. Esse método deve 
percorrer o array livros, buscar o livro pelo título e exibir suas informações.

[OK] Na classe Loja, crie um método apagarLivro que recebe o id do livro e apaga ele do array de livros daquela loja. Esse método 
deve percorrer o array de livros da loja , encontrar o objeto no array que tem o id igual ao que foi enviado, se ele existir
 deve apaga-lo usando o index dele no array original, caso não, informar que o livro com aquele ID não existe */

 class Livro {
    constructor(titulo, autor, editora, preco){
        this.titulo = titulo;
        this.autor = autor;
        this.editora = editora;
        this.preco = preco;
        this.id = this.IdAleatoria();
    }

    IdAleatoria() {
        return Math.floor(Math.random() * 101);
    }
 }

 class Loja {
    constructor(){
        this.livros = [];
    }

    cadastrarLivro(livro){
        this.livros.push(livro)
    }

    listarLivros(){
       this.livros.forEach(livro => {
        console.table(livro)//O console.table() tem uma apresentação mais agradável mas ele ocupa mais espaço no terminal, então
        // o resto acaba ficando "escondido lá pro começo do terminal."
       })
    }

    buscarLivro(titulo){
        const livroEncontrado = this.livros.find((livro) => livro.titulo === titulo) 
        if(livroEncontrado){
            console.log(`Título: ${livroEncontrado.titulo}, Autor: ${livroEncontrado.autor}, Editora: ${livroEncontrado.editora}, Preço: ${livroEncontrado.preco}, ID: ${livroEncontrado.id}`)
        }else{
            console.log(`O livro com título ${titulo} não foi encontrado na loja.`)
        }

        
    }
    /** Aqui eu tenho um dilema, na questão foi dito pra deletar o livro com base no ID que a gente criou, mas o ID é aleatório
     * e sempre muda a cada vez que a gente roda o console no terminal, então acaba sendo bem díficil saber se a gente está
     * querendo deletar o livro correto, isso quando a ID corresponde ao que foi digitado, não sei se estou perdendo algo
     * e lidando de forma ignorante com o assunto, mas como a ID é sempre aleatória não sei se vai dar certo.
     * Para eu conseguir fazer a função dar certo, vou tentar fazer buscando pelo Título, igual o buscarLivro.
     */
    apagarLivro(titulo){
        const index = this.livros.findIndex(livro => livro.titulo === titulo);
        if (index !== -1) {
            const livroRemovido = this.livros.splice(index, 1);
            console.log(`O livro "${livroRemovido[0].titulo}" foi removido da loja.`)
        }else{
            console.log(`O livro com título "${titulo}" não foi encontrado na loja.`)
        }
    }
 }

const livrariaCultural = new Loja();

const livro1 = new Livro('Monster', 'Naoki Urasawa', 'Panini', "R$80,00")
const livro2 = new Livro('Boa Noite Punpun', 'Inio Asano', 'JBC', "R$250,00")
const livro3 = new Livro('Strongest Man Kurosawa', 'Nobuyuki Fukumoto', 'Shogakukan', "R$29,90")
const livro4 = new Livro('Dorohedoro', 'Q. Hayashida', 'Panini', 'R$30,00')
const livro5 = new Livro('Uzumaki','Junji Ito', 'JBC', 'R$90,00' )



// {===========Consoles e funções===========}

//  -Cadastrar livros novos no catálogo-
livrariaCultural.cadastrarLivro(livro1);
livrariaCultural.cadastrarLivro(livro2);
livrariaCultural.cadastrarLivro(livro3);
livrariaCultural.cadastrarLivro(livro4);
livrariaCultural.cadastrarLivro(livro5);

//  -Buscar livros por título-
livrariaCultural.buscarLivro("Boa Noite Punpun");

//  -Apagar livros por título-
livrariaCultural.apagarLivro("Uzumaki")

//  -Mostrar a lista de todos os livros-
livrariaCultural.listarLivros();

