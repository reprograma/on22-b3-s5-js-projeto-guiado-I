class Doce {
    constructor(nome, preco, validade){
        this.nome = nome
        this.preco = preco
        this.validade = validade
    }
    adicionarIngrediente(ingrediente){
        this.ingrediente = ingrediente

    }

}

const bombaDeChocolate = new Doce("Bomba INSANA", 1.50,"10/2024")
console.log(bombaDeChocolate.nome)
bombaDeChocolate.adicionarIngrediente("chocolate")
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
}
const novaLoja = new Loja()
const novoDoce = new Doce("Brigadeiro Branco", 3, "Julho/2023")
novaLoja.adicionarDoce(novoDoce)

const outroDoce = new Doce("Cajuzinho", 2, "Julho/2023")
novaLoja.adicionarDoce(outroDoce)
console.table(novaLoja.doces)