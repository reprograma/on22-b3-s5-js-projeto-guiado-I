/**Crie um programa que armazene informações de alunos de uma 
 * escola em um array de objetos. Cada objeto deve ter as seguintes 
 * propriedades: nome, idade, notas (um array com as notas das provas
 *  do aluno).

- Utilize uma estrutura de repetição para percorrer o array de alunos
 e calcular a média de cada um deles.

- Utilize uma estrutura condicional para verificar se a média de 
cada aluno é maior ou igual a 7. Se for, adicione uma propriedade 
chamada "aprovado" com o valor "true" ao objeto do aluno. Caso 
contrário, adicione a propriedade "aprovado" com o valor "false".

- Crie uma classe chamada "Turma" que possua uma propriedade "alunos"
 que armazene o array de objetos de alunos criado anteriormente.

- Na classe "Turma", crie um método chamado "calcularMediaTurma" que
 percorra o array de alunos e calcule a média da turma.

- Na classe "Turma", crie um método chamado "verificarAprovacao" que
 percorra o array de alunos e verifique se todos foram aprovados ou
não. Se todos os alunos foram aprovados, retorne "Todos os alunos 
foram aprovados". Caso contrário, retorne "Alguns alunos foram 
reprovados".*/

let alunos = [
    {
        nome:"Joana",
        idade:17,
        notas: [5,9,7,6]
    },
    {
        nome:"Gabriel",
        idade:16,
        notas: [9.8,9,7,8]
    },
    {
        nome:"Clara",
        idade:16,
        notas: [4.2,2,0,2]
    },{
        nome:"Mike",
        idade:17,
        notas: [10,9,9.6,8.4]
    }
]



class Turma {
    constructor(alunos){
        this.alunos = alunos
    }
    calculaMediaTurma(){
        const arrayNotas = this.alunos.map(aluno => aluno.notas).flat()
        console.log(arrayNotas)
        
     
        const somaNotas = arrayNotas.reduce((acumulador,valorAtual) => acumulador + valorAtual)

        const media = (somaNotas/arrayNotas.length).toFixed(1)
        return console.log(media)
    }
    calculaMediaAluno(aluno){
        const mediaAluno = aluno.notas.reduce((acumulador,valorAtual)=> (acumulador + valorAtual)/aluno.notas.length).toFixed(1)
        console.log(mediaAluno)
    }
    filtraAprovacao(){
        const alunoAprovacao = this.alunos.map(aluno =>{
            const aprovaAluno = this.calculaMediaAluno(aluno)
            if(aprovaAluno<7){
                aluno.aprovado = false
                return aluno
            } aluno.aprovado = true; 
            return aluno
        })
        return console.log(alunoAprovacao)
    }
     verificaAprovacao(){
        const alunosReprovados = this.filtraAprovacao().find(aluno => aluno.aprovado == false)
        if(alunosReprovados){
            return console.log("Alguns alunos foram reprovados.")
        }
        return console.log("Todos os alunos foram aprovados")
    }
}


const turma = new Turma(alunos)

turma.calculaMediaTurma()
turma.calculaMediaAluno({
    nome:"Joana",
    idade:17,
    notas: [5,9,7,6]
},
{
    nome:"Gabriel",
    idade:16,
    notas: [9.8,9,7,8]
},
{
    nome:"Clara",
    idade:16,
    notas: [4.2,2,0,2]
},{
    nome:"Mike",
    idade:17,
    notas: [10,9,9.6,8.4]
})
turma.verificaAprovacao()

