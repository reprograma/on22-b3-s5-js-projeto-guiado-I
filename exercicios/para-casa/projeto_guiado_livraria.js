/****Você precisa criar um programa para gerenciar 
 uma loja de livros. O programa deve permitir:**

1. Cadastrar novos livros: id, título, autor, 
editora e preço.
2. Listar todos os livros cadastrados.
3. Pesquisar um livro pelo título e exibir suas 
informações.
4. Apagar um livro da lista de livros

### Requisitos

OK- Crie uma classe Livro com as propriedades titulo, 
autor, editora e preco. O id deve ser preechido com 
um número aleatório entre 0 e 100
OK- Ao preencher o id, verifique se não existe um livro
com aquele ID na lista. Se houver, crie outro ID 
aletório e repita esse processo até que o número 
gerado não tenha sido selecionado como ID 
anteriormente.
OK- Crie uma classe Loja com uma propriedade livros, 
que deverá ser um array de objetos da classe Livro.
OK-crie um método cadastrarLivro que 
recebe como parâmetros as informações do livro e cria
 um objeto da classe Livro para adicioná-lo ao array 
 livros.

OK- Na classe Loja, crie um método listarLivros que 
percorre o array livros e exibe as informações de 
cada livro.!!!!!!!

NAO CONSEGUI- Na classe Loja, crie um método buscarLivro que 
recebe como parâmetro o título do livro a ser 
pesquisado. Esse método deve percorrer o array livros,
 buscar o livro pelo título e exibir suas informações

MEU ID ALTERA O NUMERO, NUNCA ENCONTRO O NUMERO PRA DELETAR - Na classe Loja, 
crie um método apagarLivro que 
recebe o id do livro e apaga ele do array de livros
daquela loja. Esse método deve percorrer o 
array de livros da loja , encontrar o objeto 
no array que tem o id igual ao que foi enviado, 
se ele existir deve apaga-lo usando o index dele 
no array original, caso não, informar que o livro 
com aquele ID não existe

**Bonus**

Execute o programa pelo terminal, receba as 
informações do livro novo e adicione a classe da Loja
O menu que será exibido no console terá todos os 
métodos que a classe loja tem e você escolher cada 
uma das ações por um número.

Ex.:

1 - adicionar livo : Deve chamar o método adicionar 
livro e em seguida perguntar as propriedades do livro
ao usuário
2 - Deletar livro: Enviar o id do livro que você quer
 se seja deletado...

e assim por diante...

DICA: Use o `readline` que aprendemos na semana 
passada para pegar as entradas do usuário. */


class Livro{
    constructor(titulo,autor,editora,preco){
        this.titulo = titulo
        this.autor = autor
        this.editora = editora
        this.preco = preco
        this.gerarNumeroId()
    }
    gerarNumeroId(){
       return this.id = Math.floor(Math.random() * 100)
        
        
    }
   
}
 

class Loja {
    constructor(livros){
        this.livros = [livros];
    }
    cadastrarLivros(livro){
        this.livros.push(livro);
    }
    listarLivros(){
          console.log(this.livros);    
       
    }
    buscarTituloLivro(titulo){
        if(this.livros.titulo == titulo){// NAO FUNCIONA
            console.log(`${this.livro}`)
        }
    }
    deletarLivro(id){
        this.livros.forEach((livro,posicao) =>{
            if(livro.id == id){
               livros.splice(posicao,1)//PORQUE??? com id nao consegui
            }console.log("Esse ID não existe")
        })
    } 
}

const livro = new Livro("Branca de Neve","disney","saraiva",29.90)
const livro2 = new Livro("Joao e Maria","autor","editora",19.90)
const livro3 = new Livro("Harry Potter","autor","editora",190.90)
const livro4 = new Livro("Anne Frank","autor","editora",79.90)
const loja1 = new Loja([livro,livro2])
loja1.cadastrarLivros(livro3)
loja1.cadastrarLivros(livro4)
loja1.listarLivros()
loja1.deletarLivro(61)//NAO FUNCIONOU COM O ID.
loja1.buscarTituloLivro("joao e maria")//NAO FUNCIONOU.

// ****BONUS****







