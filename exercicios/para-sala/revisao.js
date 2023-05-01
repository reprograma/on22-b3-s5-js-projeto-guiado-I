//fabrica de carros

class Fabrica {
    construirCarros(){
        this.carros = []
        for(let i=0;i<=4; i++){
            //push adiciona valor ao array, então toda hora adiciona o objeto carro novo
            //array de 10 elemento onde cada um é um carro
            this.carros.push(new Carro(`Id-${i}`, `NomeCarro-${i}`, `Marca-${i}`, `Ano${i}`, `Cor${i}`))
        }
    console.log(this.carros)
    }
}


class Carro {
    constructor(id,nome,marca,ano,cor){
        this.id = id,
        this.nome = nome,
        this.marca = marca,
        this.ano = ano,
        this.cor = cor
        //cria propriedade da laca e coloca o numero nela
        this.gerarNumeroPlaca()
    }
    //metodo
    gerarNumeroPlaca(){
        //math.floor arrenda, tira casas decimais
        const placa = Math.floor((Math.random() * 1000)) + 9999
        return this.placa = placa
    }
}

const carro1 = new Carro(01,"Carro1","Honda",2021,"Branco")
const carro2 = new Carro(02,"Carro2","Chevrolet", 2020, "Cinza")


//se não definiu método constructor, não disse o q quer receber
//essa fábrica faz exibir os objetos do array de carros
//enchendo o array com carros novos
const fabricaCarros = new Fabrica()

fabricaCarros.construirCarros()

//dizendo pro método pra fabricar um novo carro

const novoCarroFabrica = fabricaCarros.construirCarros(09, "Carro9", "Ford", 1990, "Azul")
fabricaCarros.construirCarros()

