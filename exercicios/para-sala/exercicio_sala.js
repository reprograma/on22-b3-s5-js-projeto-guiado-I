const alunos = [
 {
    nome:"Morgana",
    idade:5,
    notas:[8,8,7,9]
},
{
    nome:"Yelena",
    idade:6,
    notas:[9,9,10,9]    
},
{
    nome:"Agatha",
    idade:5,
    notas:[7,8,7,9]
},
{
    nome:"Aaron",
    idade:6,
    notas:[8,9,7,9]
},
{
    nome:"Nerfertiti",
    idade:5,
    notas:[6,8,6,7]
},
{
    nome:"Sophia",
    idade:6,
    notas:[7,6,10,9]
},
{
    nome:"Minerva",
    idade:4,
    notas:[6,10,7,7]
},
]
class turma {
    contrutor(alunos){
        this.alunos = alunos
    }
    //concat()
    //flat()
    calcularMediaTurma(){
        const arrayDeNotas = this.alunos.map(aluno => aluno.notas).flat()
        console.log(arrayDeNotas)
       const somaDasNotas = arrayDeNotas.reduce((acumulador, valorAtual)=> acumulador + valorAtual)
        const media = (somaDasNotas / arrayDeNotas.length).toFixed(1)
       console.log(media)
    }
}


//const turma = new turma(alunos)
turma.calcularMediaTurma()