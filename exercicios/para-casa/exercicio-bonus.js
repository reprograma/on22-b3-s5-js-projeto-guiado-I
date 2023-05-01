const readline = require('readline-sync');

// Cria um objeto readline para ler entrada do usuário
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const minhaLoja2 = new Loja ("Livraria Papoula", "Clássicos Brasileiros")
// Função que exibe o menu de opções
function exibirMenu() {
  console.log('\n==== MENU ====');
  console.log('1 - Adicionar livro');
  console.log('2 - Buscar livro');
  console.log('3 - Apagar livro');
  console.log('4 - Listar todos os livros');
  console.log('5 - Sair\n');
  rl.question('Digite o número da opção desejada: ', (opcao) => {
    switch (opcao) {
      case '1':
        // Chama o método cadastrarLivro da classe Loja
        rl.question('Digite o título do livro: ', (titulo) => {
          rl.question('Digite o autor do livro: ', (autor) => {
            rl.question('Digite o preço do livro: ', (preco) => {
              rl.question('Digite o estoque do livro: ', (estoque) => {
                minhaLoja.cadastrarLivro(titulo, autor, parseFloat(preco), parseInt(estoque));
                console.log('Livro adicionado com sucesso!');
                exibirMenu();
              });
            });
          });
        });
        break;
      case '2':
        // Chama o método buscarLivro da classe Loja
        rl.question('Digite o título do livro a ser pesquisado: ', (titulo) => {
          const livroEncontrado = minhaLoja.buscarLivro(titulo);
          if (livroEncontrado) {
            console.log('Livro encontrado:');
            console.log(livroEncontrado);
          } else {
            console.log(`Livro com título ${titulo} não encontrado.`);
          }
          exibirMenu();
        });
        break;
      case '3':
        // Chama o método apagarLivro da classe Loja
        rl.question('Digite o id do livro a ser apagado: ', (id) => {
          const livroApagado = minhaLoja.apagarLivro(parseInt(id));
          if (livroApagado) {
            console.log('Livro apagado com sucesso:');
            console.log(livroApagado);
          } else {
            console.log(`Livro com id ${id} não encontrado.`);
          }
          exibirMenu();
        });
        break;
      case '4':
        // Chama o método listarLivros da classe Loja
        const livros = minhaLoja.listarLivros();
        console.log('Todos os livros da loja:');
        console.log(livros);
        exibirMenu();
        break;
      case '5':
        // Encerra o programa
        console.log('Programa encerrado.');
        rl.close();
        break;
      default:
        // Opção inválida
        console.log('Opção inválida. Tente novamente.');
        
    }})}




    //NÃO TÁ FUNCIONANDO AINDA MAIS UMA HORA VAI :)
