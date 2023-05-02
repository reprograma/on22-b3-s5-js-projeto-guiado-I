
class Doce {
    constructor(nome,preco,validade){
        this.nome = nome
        this.preco = preco
        this.validade = validade
        this.gerarID()

    }
    adicionarIngrediente(ingredienteAdicional){
        this.ingrediente = ingredienteAdicional 
    }
    gerarID(){
        this.id = Math.floor(Math.random() * 100) 
        
    }
    
}
const bombaDeChocolate = new Doce("bomba de chocolate",15,"maio/2023")
console.log(bombaDeChocolate.nome)
console.log(bombaDeChocolate.ingrediente)
bombaDeChocolate.adicionarIngrediente("chocolate gradulado")
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
const novoDoce = new Doce("brigadeiro branco",4,"junho/2023")
novaLoja.adicionarDoce(novoDoce)

const outroDoce = new Doce("cajuzinho",1,"julho/2023")
novaLoja.adicionarDoce(outroDoce)
novaLoja.vitrine()


//for(let i = 0; i === this.gerarIDLiv.includes(this.id); i++ )

//console.log(livro2)  console.log(livro1)





