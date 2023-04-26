console.log("bem vindos ao sistema livraria.com")
class livros{
    constructor(titulo, autor, editora, valor){
        this.gerarIdLivro()
        this.titulo = titulo;
        this.autor = autor;
        this.editora = editora;
        this.valor = valor;

    }
    gerarIdLivro(){
        const idAleatorio = Math.floor(Math.random() * 10) + 90
        return this.id = idAleatorio
    }
}

const Livro = [
    new livros('dorme menino dorme', 'Laura Herrera', 'LM Livros Da Matriz', 25),
    new livros('cordelinho', 'Chico Salles', 'Rovelle ltda', 35),
    new livros('as armas da persuasão', 'Robert B Cialdini','GMT Editores ltda', 40),
    new livros('só zoando', 'Andy Griffiths', 'Editora Fundamento Educacional ltda', 15),
    new livros('1000 palavras em inglês', 'Sarah Bocconi', 'happy books editora ltda', 60),
 ];

console.log(Livro)


/*
 class Loja{
    constructor(livros,nome){
        this.livros = livros;
        this.nome = nome;
    }
    cadastroLivro(novoLivro){
        this.livros.push(livros)
    }
    
 }
 const novoLivro = new livros('English File','Christina','Oxford',90)

    listaLivros(livros);{

        console.log('Livros disponiveis:')
        console.log(' ')
         this.livros.forEach(livro => {
            console.log(`titulo: ${livro.titulo}`)
            console.log(`autor: ${livro.autor}`)
            console.log(`editora: ${livro.editora}`)
            console.log(`valor: R$${livro.valor.toFixed(2)}`)
            console.log(`id: ${livro.idAleatorio}`)
            console.log(``)
         })
    }*/
   /* pesquisarLivro(tituloPesquisado){
        const livroPesquisado = this.livros.find((livro) = livro.titulo == tituloPesquisado)
            console.log(`titulo: ${livroPesquisado.titulo}`)
            console.log(`autor: ${livroPesquisado.autor}`)
            console.log(`editora: ${livroPesquisado.editora}`)
            console.log(`valor: R$${livroPesquisado.valor.toFixed(2)}`)
            console.log(`id: ${livroPesquisado.idAleatorio}`)
            console.log(``)
    }
  /*  deletarLivro(idAleatorioPesquisado){
        const idAleatorio = idAleatorioPesquisado
        const indexpesquisado = this.livros.findIndex((livro) => idAleatorioPesquisado == livro.idAleatorio)
        console.log(indexpesquisado)
        if(indexPesquisado != -1) {
            this.livros.splice(indexPesquisado, 1)
            console.log(`O livro com o ID: ${idAleatorio} foi deletado!`)
        } else {
            console.log(`Não há nenhum livro com o ID: ${idAleatorio}!`)
            console.log(``)
        }
        
    }


const loja = new Loja(livros,'sistema livraria.com')




loja.cadastroLivro(novoLivro)

loja.listaLivros()

loja.pesquisarLivro('so zoando')

loja.deletarLivro(0)
loja.deletarLivro(50)
loja.deletarLivro(90)

loja.listaLivros(

)
class biblioteca{
    organizaLivros(){
        for (let i = 0; i <= 5; i++){
            this.livros.push(new livros(`titulo-${i}`,`autor-${i}`,`editora-${i}`,`valor-${i}`))
        return new livros
        }
        console.log(this.livros)
    }
}
console.log(livros.organizaLivros)


/*
- [ok]  Crie uma classe Livro com as propriedades titulo, autor, editora e preco. O id deve ser
 preechido com um número aleatório entre 0 e 100.
 
- []   Crie uma classe Loja com uma propriedade livros, que deverá ser um array de objetos da classe Livro.

- []   Na classe Loja, crie um método cadastrarLivro que recebe como parâmetros as informações do livro e
 cria um objeto da classe Livro para adicioná-lo ao array livros.

- []   Na classe Loja, crie um método listarLivros que percorre o array livros e exibe as informações de 
cada livro.

- []    Na classe Loja, crie um método buscarLivro que recebe como parâmetro o título do livro 
a ser pesquisado. Esse método deve percorrer o array livros, buscar o livro pelo título e 
exibir suas informações.

- []    Na classe Loja, crie um método apagarLivro que recebe o id do livro e apaga ele do array de 
livros daquela loja. Esse método deve percorrer o array de livros da loja , encontrar o objeto 
no array que tem o id igual ao que foi enviado, se ele existir deve apaga-lo usando o index dele no
array original, caso não, informar que o livro com aquele ID não existe.*/

//está dando erro por hora esta assim, vou trabalhar a logica, pq eu realizando sozinha estou um desastre.