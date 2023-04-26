class FabricaDeCarros {
    construirCarros(){
          for(let i = 0;i<=10; i++){
            this.carros.push(new Carro(`NomeCarro-${i}`, `modelo-${i}`, `201${i}`, `vermelho-${i}`))
          }
          console.log(this.carros)
    }
    }


class Carro {
    constructor (marca, modelo, ano, cor){
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
        this.cor = cor
        this.gerarNumeroPlaca()
    }
    gerarNumeroPlaca(){
        const numeroaleatorio = Math.floor(Math.random() * 1000 ) + 9999
        return this.placa = numeroaleatorio
    }

}
const carro = new Carro("Fiat", "Pálio", "2015","Vermelho")
const carro2 = new Carro("Chevrolet", "Ônix" , "2022", "Preto")
console.log(carro)
console.log(carro2)

