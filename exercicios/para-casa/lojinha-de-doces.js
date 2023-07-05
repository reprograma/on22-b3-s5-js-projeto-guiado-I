class Doce {
    constructor(nome,preco,validade){
    this.nome = nome
    this.preco = preco
    this.validade = validade

    this.gerarId()
    }

    adicionarIngrediente(novoIngrediente){
        this.ingrediente = novoIngrediente
    }
    gerarId(){
        this.id = Math.floor(Math.random() * 100)
       
    }
        
    
}



// só aqui nesse momento é que eu tenho um doce
const bombaDeChocolate = new Doce("bomba de chocolate",15,"maio/2023") 
console.log(bombaDeChocolate.nome)
console.log(bombaDeChocolate.ingrediente)
bombaDeChocolate.adicionarIngrediente("chocolateGranulado")
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

let listaDeDoces = [{id:10, nome:"Meu doce"},{id:55, nome:"Meu outro doce"}]

function deletarDoce(id){
    listaDeDoces.forEach((doce, posicao) => {
        if(doce.id == id){
            listaDeDoces.splice(posicao,1)
        }
    })
}

deletarDoce(55)
console.log(listaDeDoces)

