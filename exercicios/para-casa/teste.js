class Doce{
    constructor(nome, preco, validade){ // -> objeto
        this.nome = nome
        this.preco = preco
        this.validade = validade
        this.gerarId()
    }
    adicionarIngrediente(ingredienteadc){
        this.ingrediente = ingredienteadc
    }
    gerarId(){
        this.id = Math.floor(Math.random () * 100)
    }
}
 
const bombaDeChocolate = new Doce('bomba de chocolate', 3.99, '05/2023')
console.log(bombaDeChocolate.nome) 
console.log(bombaDeChocolate.ingrediente)
bombaDeChocolate.adicionarIngrediente('mourango')
console.log(bombaDeChocolate.ingrediente)

class Loja {
    constructor(){
        this.doces = []
    }

    vitrine(){
        console.log(this.doces)
    }

    adicionarDoce(doce){
        this.doces.push(doce)
    }

    removerDoce(){
        
    }
}

const novaLoja = new Loja()
const novoDoce = new Doce('brigadeiro branco',4, '06/2023')
novaLoja.adicionarDoce(novoDoce)
console.log(novaLoja.doces)
const outroDoce = new Doce('mourango com chocolate branco', 6, '06/2023')
novaLoja.adicionarDoce(outroDoce)
const doceMourango = new Doce('doce de morango', 4.99, '07/2023')
novaLoja.adicionarDoce(doceMourango)
novaLoja.vitrine()