class Aluno {
    constructor(nome, idade, notas){
        this.nome = nome;
        this.idade = idade;
        this.notas = notas;
    }


calcularMedia() {
    const somaNotasAluno = this.notas.reduce(
      (acumulador, valorAtual) => acumulador + valorAtual
    );

    const mediaAlunoArredondada = (somaNotasAluno / this.notas.length).toFixed(
      1
    );

    return mediaAlunoArredondada;
  }

  exibirMedia() {
    console.log(this.calcularMedia());
  }
}

const alunos = [
    new Aluno('Luana', 20, [9, 10, 8.3, 9]),
    new Aluno('Pedro', 18, [2, 4, 2, 5]),
    new Aluno('Mariazinha', 21, [9, 9, 7, 9]),
    new Aluno('Dona Barata', 25, [1, 2, 10, 5]),
];

class Turma {
    constructor(alunos, nome){
        this.nome = nome;
        this.alunos = alunos;
    }
    
    exibirMediaTurma(){
    const arrayDeNotas = this.alunos.map((aluno) => aluno.notas).flat();

    const somaDasNotas = arrayDeNotas.reduce(
        (acumulador, valorAtual) => acumulador + valorAtual  
    );

    const media = (somaDasNotas / arrayDeNotas.length).toFixed(1);

    console.log(media);
    }

    adicionarStatusAprovacao(){
        const alunosPorAprovacao = this.aluno.map((aluno) =>{
            const mediaAluno = aluno.calcularMedia();

            aluno.aprovado = mediaAluno < 7 ? false : true;

            return aluno
        });

        return alunosPorAprovacao;
    }

    verificaAprovacao(){
        const alunoReprovado = this.adicionarStatusAprovacao().find(
            (aluno) => aluno.aprovado == false
        );

        if (alunoReprovado) {
            return console.log('Um ou mais alunos foram reprovados.');
        }

        return console.log('Todos os alunos foram aprovados.')
    }

    inserirAluno(aluno){
        this.alunos.push(aluno);
    }

    mudarNome(novoNome){
        return this.nome = novoNome
    }
}

const turma = new Turma(alunos,"Fundamental 3");
console.log(turma)

const novoAluno = new Aluno("Manuelly", 25, [8, 6, 4.5, 3]);
turma.inserirAluno(novoAluno);

console.log(turma.exibirMediaTurma())
turma.mudarNome("Médio 2")
console.log(turma)