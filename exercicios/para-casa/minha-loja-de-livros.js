// [OK]- Crie uma classe Livro com as propriedades titulo, autor, editora e preco. O id deve ser preechido 
// com um número aleatório entre 0 e 100
// [OK]- Ao preencher o id, verifique se não existe um livro com aquele ID na lista. Se houver, 
// crie outro ID aletório e repita esse processo até que o número gerado não tenha sido selecionado como 
// ID anteriormente.
// [OK]- Crie uma classe Loja com uma propriedade livros, que deverá ser um array de objetos da classe Livro.
// [OK]- Na classe Loja, crie um método cadastrarLivro que recebe como parâmetros as informações do livro 
// e cria um objeto da classe Livro para adicioná-lo ao array livros.
// [OK]- Na classe Loja, crie um método listarLivros que percorre o array livros e exibe as informações de cada livro.
// [OK]- Na classe Loja, crie um método buscarLivro que recebe como parâmetro o título do livro a ser pesquisado. 
// Esse método deve percorrer o array livros, buscar o livro pelo título e exibir suas informações.
// [OK]- Na classe Loja, crie um método apagarLivro que recebe o id do livro e apaga ele do array de livros 
// daquela loja. Esse método deve percorrer o array de livros da loja , encontrar o objeto no array que tem 
// o id igual ao que foi enviado, se ele existir deve apaga-lo usando o index dele no array original, 
// caso não, informar que o livro com aquele ID não existe

class Livro {
   constructor(titulo, autor, editora, preco) {
     this.titulo = titulo;
     this.autor = autor;
     this.editora = editora;
     this.preco = preco;
 
     this.id = this.gerarId();
   }
 
   gerarId() {
     const numAleatorio = Math.floor(Math.random() * 100);
     return numAleatorio;
   }
 }
 
 class Loja {
   constructor() {
     this.livros = [];
   }
   cadastrarLivro(titulo, autor, editora, preco, id) {
     const livro1 = new Livro(titulo, autor, editora, preco, id);
     this.livros.push(livro1);
     const livro2 = new Livro("Como não surtar","Psi Laura","Sobreviventes","150,00");
     this.livros.push(livro2);
   }
   listarLivros(){
      console.log(loja.livros) 
     };
   buscarLivros(titulo){
      const livroEncontrado =  this.livros.find((Livro) => Livro.titulo === titulo);
      console.log(`Livro encontrado: ${livroEncontrado.titulo} (${livroEncontrado.autor})`)
   };
   apagarLivro(id){
    this.Livros.forEach(livro, posição => {
      if(Livro.id === id){
        this.Livros.splice(posição,1)
        consle.log(`Livro com id: ${id} foi removido`)
      };
    }); 
 };
}
 
 const loja = new Loja();
 loja.cadastrarLivro("Programação", "José", "Novo Horizonte", 80);
 loja.listarLivros();
 loja.buscarLivros("Programação");
 loja.apagarLivro(id);

 console.log(loja.livros);