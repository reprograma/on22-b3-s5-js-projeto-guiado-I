/*
-- [feito] Crie uma classe Livro com as propriedades titulo, autor, editora e preco.
   O id deve ser preechido com um número aleatório entre 0 e 100

-- Ao preencher o id, verifique se não existe um livro com aquele ID na lista. Se houver, crie outro ID
   aletório e repita esse processo até que o número gerado não tenha sido selecionado como ID anteriormente.

-- [feito] Crie uma classe Loja com uma propriedade livros, que deverá ser um array de objetos da classe Livro.

-- [feito] Na classe Loja, crie um método cadastrarLivro que recebe como parâmetros as informações do livro
   e cria um objeto da classe Livro para adicioná-lo ao array livros.

-- [feito] Na classe Loja, crie um método listarLivros que percorre o array livros e exibe as informações de cada livro.

-- [feito] Na classe Loja, crie um método buscarLivro que recebe como parâmetro o título do livro a ser pesquisado.
   Esse método deve percorrer o array livros, buscar o livro pelo título e exibir suas informações.

-- [feito] Na classe Loja, crie um método apagarLivro que recebe o id do livro e apaga ele do array de livros
   daquela loja. Esse método deve percorrer o array de livros da loja , encontrar o objeto no array que
   tem o id igual ao que foi enviado, se ele existir deve apaga-lo usando o index dele no array original,
   caso não, informar que o livro com aquele ID não existe
*/
class Loja {
    
    constructor(livros, nome) {
        this.livros = livros;
        this.nome = nome;
    }

    cadastrarLivro(livro) {
        
        this.livros.push(livro)
    }

    listarLivros() {
        
        console.log(`Nossa loja possui os seguintes livros:`)
        console.log(` `)
        
        this.livros.forEach(livro => {
            
            console.log(`Título: ${livro.titulo}`)
            console.log(`Autor: ${livro.autor}`)
            console.log(`Preço: R$${livro.preco.toFixed(2)}`)
            console.log(`Editora: ${livro.editora}`)
            console.log(`Id: ${livro.id}`)
            console.log(` `)
        })
    }

    buscarLivro(tituloBuscado) {
        
        let livroBuscado = this.livros.find((livro) => livro.titulo == tituloBuscado)
        
        if(livroBuscado) {

            console.log(`Aqui estão as informaçõpes do livro que você buscou:`)
            console.log(` `)
            console.log(`Título: ${livroBuscado.titulo}`)
            console.log(`Autor: ${livroBuscado.autor}`)
            console.log(`R$ ${livroBuscado.preco.toFixed(2)}`)
            console.log(`Editora: ${livroBuscado.editora}`)
            console.log(`Id: ${livroBuscado.id}`)
            console.log(` `)
        } else {
            console.log(`Não temos nenhum livro com o título "${tituloBuscado}"!`)
            console.log(` `)
        }
    }
    
    apagarLivro(idBuscado) {

        let indexBuscado = this.livros.findIndex((livro) => idBuscado == livro.id)
        console.log(indexBuscado)

        //o valor do indexBuscado precisa ser != de 1 dado que este é o retorno padrão do findIndex()
        //no caso de retorno -1, o splice() acabaria deletando o último elemtento do array (contagem inversa)
        if(indexBuscado != -1) {
            this.livros.splice(indexBuscado, 1)
            console.log(`O livro com o Id ${idBuscado} foi removido!`)
        } else {
            console.log(`Não temos nenhum livro com o Id ${idBuscado}!`)
            console.log(` `)
        }
    }
}


class Livro {
    
    constructor(titulo, autor, preco, editora,) {
        this.titulo = titulo;
        this.autor = autor;
        this.preco = preco;
        this.editora = editora;
        this.id = this.gerarIDs()
    }

    gerarIDs() {
        let idAleatorio = Math.floor(Math.random() * 100)
        return idAleatorio
    }
    
    //este método faria a verificação dos ids. contudo, não entendi como relizar corretamente sua chamada.
    /*
    verificarIDs() {

        while (this.livros.some((livro) => livro.id == idAleatorio)) {
            idAleatorio = Math.floor(Math.random() * 100)
        }
        let idFinal = idAleatorio
        return idFinal
    }
    */
}

// inicialização do array livros e da loja
const livros = [
    new Livro("Gödel, Escher, Bach", "Douglas Hofstadter", 120.00, "Basic Books (AZ)"),
    new Livro("Ciência da Lógica - 2: A doutrina da Essência", "G.W.F. Hegel", 44.99, "Editora Vozes"),
    new Livro("Passeio ao Farol", "Virginia Woolf", 55.00, "Penguin-Companhia"),
    new Livro("The C Programming Language", "Brian W. Kernighan", 155.87, "Prentice Hall"),
]

const loja = new Loja(livros, "Minha Loja")

//outros livros, para cadastro posterior
let novoLivro = new Livro("Neon Genesis Evangelion - Vol. 14", "Yoshiyuki Sadamoto", 74.90, "Editora JBC")
let outroLivro = new Livro("Testojunkie", "Paul B. Preciado", 549.90, "N-1 Edições")

//chamadas dos métodos

loja.listarLivros()

loja.cadastrarLivro(novoLivro)

loja.buscarLivro("Passeio ao Farol")

loja.apagarLivro(10)
loja.apagarLivro(30)
loja.apagarLivro(50)
loja.apagarLivro(70)
loja.apagarLivro(90)

loja.listarLivros()

loja.cadastrarLivro(outroLivro)

loja.buscarLivro("O castelo")

loja.apagarLivro(0)
loja.apagarLivro(20)
loja.apagarLivro(40)
loja.apagarLivro(60)
loja.apagarLivro(80)

loja.listarLivros()