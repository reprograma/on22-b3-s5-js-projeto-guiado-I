class Doce {
    constructor(nome,preco,validade){
        this.nome = nome
        this.preco = preco
        this.validade = validade
    }
    adicionarIngrediente(ingrediente){
        this.ingrediente = ingrediente
    }
}

const bombaDeChocolate = new Doce(
    "Bomba de chocolate",15,"05/2023")
console.log(bombaDeChocolate.nome)
bombaDeChocolate.adicionarIngrediente("Leite condensado")
console.log(bombaDeChocolate)
                          