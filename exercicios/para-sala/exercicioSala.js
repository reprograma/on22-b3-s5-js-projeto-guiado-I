const alunos = [
    { 
        nome:"Paula",
        idade: 23,
        notas:[8, 7, 6.6, 9]
    },
    {
        nome:"Andrade",
        idade: 21,
        notas:[10, 10, 10, 10]
    },
    {
        nome:"C",
        idade: 22,
        notas:[4, 6, 5, 7]
    }
]

class Turma {
    constructor(alunos){
        this.alunos = alunos
    }
    
    calcularMediaTurma() {
        const arrayDeNotas = this.alunos.map(aluno => aluno.notas).flat()
           
        const somaDasNotas = arrayDeNotas.reduce((acumulador, valorAtual)=> acumulador + valorAtual)

        const media = (somaDasNotas / arrayDeNotas.lenght).toFixed(1)

    }

    calcularMediaAluno(aluno){
        const somaNotasAluno = aluno.notas.reduce((acumulador, valorAtual) => acumulador +valorAtual)

        const mediaAlunoArredondada = (somaNotasAluno / aluno.notas.lenght).toFixed(1)

        return 
    }

    filtraAlunosAprovados() {

    }

    verificarAprovacao() {
        const alunosPorAprovacao = this.alunos.map(aluno => {
            const mediaALuno = this.calcularMediaAluno(aluno)

            if(mediaAluno < 7){
                aluno.aprovado = false
                return aluno
            }
            aluno.aprovado = true
            return aluno
        })

    }
}

const turma = new Turma(alunos)

turma.calcularMediaTurma()
turma.verificarAprovacao()

const resultado = turma.verificarAprovacao
