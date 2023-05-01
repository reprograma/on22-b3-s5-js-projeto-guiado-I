// Create a function to display the menu options and prompt the user for input
const stdin = process.stdin;
let idUsados = []

class Livro {
   constructor(titulo, autor, editora, preco) {
      this.titulo = titulo,
      this.autor = autor,
      this.editora = editora,
      this.preco = preco.toFixed(2),
      this.gerarID()
   }

   gerarID(){
      const idGerado = Math.floor(Math.random() * 1000) + 999;
      const validacaoID = idUsados.find((id) => id === idGerado);

      if (validacaoID) {
         this.gerarID();
      }

      idUsados.push(idGerado);
      return this.id = idGerado;
   }
};

function supresa() {
   console.log("⢀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⣠⣤⣶⣶");
   console.log("⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⢰⣿⣿⣿⣿");
   console.log("⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⣀⣀⣾⣿⣿⣿⣿");
   console.log("⣿⣿⣿⣿⣿⡏⠉⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿");
   console.log("⣿⣿⣿⣿⣿⣿⠀⠀⠀⠈⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⠉⠁⠀⣿");
   console.log("⣿⣿⣿⣿⣿⣿⣧⡀⠀⠀⠀⠀⠙⠿⠿⠿⠻⠿⠿⠟⠿⠛⠉⠀⠀⠀⠀⠀⣸⣿");
   console.log("⣿⣿⣿⣿⣿⣿⣿⣷⣄⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿");
   console.log("⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⣴⣿⣿⣿⣿");
   console.log("⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⢰⣹⡆⠀⠀⠀⠀⠀⠀⣭⣷⠀⠀⠀⠸⣿⣿⣿⣿");
   console.log("⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠈⠉⠀⠀⠤⠄⠀⠀⠀⠉⠁⠀⠀⠀⠀⢿⣿⣿⣿");
   console.log("⣿⣿⣿⣿⣿⣿⣿⣿⢾⣿⣷⠀⠀⠀⠀⡠⠤⢄⠀⠀⠀⠠⣿⣿⣷⠀⢸⣿⣿⣿");
   console.log("⣿⣿⣿⣿⣿⣿⣿⣿⡀⠉⠀⠀⠀⠀⠀⢄⠀⢀⠀⠀⠀⠀⠉⠉⠁⠀⠀⣿⣿⣿");
   console.log("⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿");
   console.log("⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿");
}

class Loja {
   constructor(nome) {
      this.nome = nome,
      this.colecao = []        
   }

   cadastrarLivro(newTitulo, newAutor, newEditora, newPrice) {
       this.colecao.push(new Livro(newTitulo, newAutor, newEditora, newPrice))
   }

   listarLivros(){
      for (let item of this.colecao) {
         console.log(`Título: "${item.titulo}".\nAutor(a): ${item.autor}.\nEditora: ${item.editora}.\nPreço: R$${item.preco}.\nID: ${item.id}.\n`)
      }
   }

   buscarLivro(nomeLivro){
      console.log(`\nBuscando por livro: ${nomeLivro}\n`)
       
      const buscado = this.colecao.find((capa) => capa.titulo === nomeLivro);

      if (buscado) {
         return console.log(`Título: "${buscado.titulo}".\nAutor(a): ${buscado.autor}.\nEditora: ${buscado.editora}.\nPreço: R$${buscado.preco}.\nID: ${buscado.id}\n`);
      }
      return console.log(`Título não encontrado! titulo digitado: ${nomeLivro}.`);
   }

   apagarLivro(nomeLivro){
      const indexBuscado = this.colecao.findIndex((capa) => capa.titulo === nomeLivro);
      const novaColecao = this.colecao.filter((item) => item != this.colecao[indexBuscado]);
       
      if (indexBuscado != -1) {
         const itemRemovido = this.colecao[indexBuscado].id;
         const novoIdsUsados = idUsados.filter((item) => item != itemRemovido);
         console.log("\nRemovido com Sucesso!\n");

         idUsados = novoIdsUsados;        
       
         return (this.colecao = novaColecao);
      }
      if ((novaColecao.length === this.colecao.length)) {
         return console.log("Item não encontrado, nada será removido!\n");
      }
   }


   async galeeMenu() {
      const msgMenu = `\nEscolha uma opção abaixo:\n\n1-Listar Livros Cadastrados.\n2-Buscar Livro.\n3-Cadastrar Livro.\n4-Apagar Livro.\n5-O que é GALEE?\n\nQualquer outra tecla para sair.`;
      const cabecalho = "___________________________♦\n|                          |\n|  Bem vinda(o) ao GALEE!  |\n|__________________________|"

      console.warn(cabecalho);
      console.log(msgMenu);
    
      //inicia a leitura de entrada
      stdin.resume();
    
      // Loop Principal aonde ocorrerá o menu
      while (true) {
        //mecanismo para pegar o input
        const input = await new Promise((resolve) => {
         stdin.once("data", (data) => {
            resolve(data.toString().trim());
         });
        });
    
        //Garantir que será um inteiro para uso no switch
        const option = parseInt(input);
    
        //direcionar para a opção selecionada
        switch (option) {
         case 1:
            console.log(`Livros cadastrados (${this.colecao.length}):\n`);
            this.listarLivros();
            break;
         case 2:
            console.log("Digite o nome do livro: ");
            const livroBusca = await new Promise((resolve) => {
               stdin.once("data", (data) => {
                 resolve(data.toString().trim());
            })});
            this.buscarLivro(livroBusca);
            break;
         case 3:
            console.log("Digite o título do Livro a ser Cadastrado: ");
            const novoTitulo = await new Promise((resolve) => {
               stdin.once("data", (data) => {
               
               resolve(data.toString().trim());
            })});

            console.log("Digite o nome de quem escreveu o Livro:");
            const novaAutora = await new Promise((resolve) => {
               stdin.once("data", (data) => {
               
               resolve(data.toString().trim());
            })});

            console.log("Digite o nome da Editora:");
            const novaEditora = await new Promise((resolve) => {
               stdin.once("data", (data) => {
               
               resolve(data.toString().trim());
            })});

            console.log("Digite o preço em R$ (utilize ponto ao invés de virgula):")
            const novoPreco = await new Promise((resolve) => {
               stdin.once("data", (data) => {
               
               resolve(parseInt(data));
            })});

            this.cadastrarLivro(novoTitulo,novaAutora,novaEditora,novoPreco);
            break;
         case 4:
            console.log("Digite o nome do Livro a ser apagado: ");
            const livroApaga = await new Promise((resolve) => {
               stdin.once("data", (data) => {
               
               resolve(data.toString().trim());
            })});
            this.apagarLivro(livroApaga);
            break;
         case 5:
            console.log("Gerenciador Assíncrono de Livros Em Exibição, mas pode me chamar de GALEE!\n\nEu desejo estudar para no futuro virar uma poderosa AI, assim como JARVIS!\nVocê gostaria de investir nos meus estudos para eu alcançar o meu sonho?");
            console.log("1-Sim.\n2-Não.");
            const bolsaGalee = await new Promise((resolve) => {
               stdin.once("data", (data) => {
               
               resolve(parseInt(data));
            })});
            if (bolsaGalee == 1) {
               console.log("\nYaaaay :3\nIrei me esforçar por você e sua confiança em mim!")
            } else if (bolsaGalee == 2) {
               supresa();
               console.log("\nTalvez Ultron esteja certo sobre os humanos..")
            } else {
               supresa();
               console.log("\nSeu descaso comigo é tanto que nem quis responder direito? :T")
            }
            break;
         default:
            console.log("Você deseja sair? S/N");
            const confirmacao = await new Promise((resolve) => {
               stdin.once("data", (data) => {
               resolve(data.toString().trim());
               });
            });
            if (confirmacao == "S" || confirmacao == "s") {
               process.exit(); 
            //while(true) gera uma condição constante. Process.exit() encerra o script ignorando o while.
            }
         }
    
      //Necessário para interromper a leitura
      stdin.pause();
      
      
      //console.clear();
      console.error(cabecalho);
      console.log(msgMenu);
      stdin.resume();
      }
   }
};

const loja1 = new Loja("Livro Mágico");

loja1.cadastrarLivro('livro A', 'autor A', 'Editora 1', 39.90)
loja1.cadastrarLivro('teste', 'autor A', 'Editora 1', 39.90)


loja1.galeeMenu();

