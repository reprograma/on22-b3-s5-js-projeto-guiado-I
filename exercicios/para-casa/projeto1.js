let idUsados = [];

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

class Loja {
    constructor(nome,colecao) {
        this.nome = nome,
        this.colecao = colecao        
    }

    cadastrarLivro(newTitulo, newAutor, newEditora, newPrice) {
        this.colecao.push(new Livro(newTitulo, newAutor, newEditora, newPrice))
        }

    listarLivros(){
        for (let item of this.colecao) {
            console.log(`Título: "${item.titulo}".\nAutor(a): ${item.autor}.\nEditora: ${item.editora}.\nPreço: R$${item.preco}.\nID: ${item.id}.`)
        }
    }

    buscarLivro(nomeLivro){
        console.log(`Buscando por livro: ${nomeLivro}`)
        
        const buscado = this.colecao.find((capa) => capa.titulo === nomeLivro);

        if (buscado) {
            return console.log(`Título: "${buscado.titulo}".\nAutor(a): ${buscado.autor}.\nEditora: ${buscado.editora}.\nPreço: R$${buscado.preco}.\nID: ${buscado.id}.`);
        }
        return console.log(`Título não encontrado! titulo digitado: ${nomeLivro}.`);
    }

    apagarLivro(nomeLivro){
        const indexBuscado = this.colecao.findIndex((capa) => capa.titulo === nomeLivro);
        const novaColecao = this.colecao.filter((item) => item != this.colecao[indexBuscado]);
        
        if (indexBuscado != -1) {
            const itemRemovido = this.colecao[indexBuscado].id;
            const novoIdsUsados = idUsados.filter((item) => item != itemRemovido);
            console.log("Removendo..\n");

            idUsados = novoIdsUsados;        
        
        return (this.colecao = novaColecao);
        }
        if ((novaColecao.length === this.colecao.length)) {
            return console.log("Item não encontrado, nada será removido!\n");
        }
        
    }
};

let colecaoLivros = [
    new Livro ('livro A', 'autor A', 'Editora 1', 39.90),
    new Livro ('livro B', 'autor B', 'Editora 1', 29.90),
    new Livro ('livro C', 'autor C', 'Editora 2', 59.90),
    new Livro ('livro D', 'autor D', 'Editora 2', 119.90),
];

let loja1 = new Loja ('Livraria Omega 36', colecaoLivros);

//console.log(colecaoLivros);
//console.log(loja1);
//console.log(loja1.colecao)

//loja1.listarLivros();
console.log(idUsados);
loja1.cadastrarLivro('AB', 'Escritor', 'Imprensa', 89.90);

loja1.listarLivros();

loja1.buscarLivro('livro C');
console.log(idUsados);
loja1.apagarLivro('livro C');

loja1.listarLivros();


console.log(idUsados);

