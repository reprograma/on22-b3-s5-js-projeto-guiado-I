/**
 * [OK]Crie um programa que armazene informações de alunos de uma escola em um array de objetos. Cada objeto deve ter as seguintes propriedades: nome, idade, notas (um array com as notas das provas do aluno).

[OK] Utilize uma estrutura de repetição para percorrer o array de alunos e calcular a média de cada um deles.

[OK] Utilize uma estrutura condicional para verificar se a média de cada aluno é maior ou igual a 7. Se for, adicione uma propriedade chamada "aprovado" com o valor "true" ao objeto do aluno. Caso contrário, adicione a propriedade "aprovado" com o valor "false".

[OK] Crie uma classe chamada "Turma" que possua uma propriedade "alunos" que armazene o array de objetos de alunos criado anteriormente.

[OK] Na classe "Turma", crie um método chamado "calcularMediaTurma" que percorra o array de alunos e calcule a média da turma.

[OK] Na classe "Turma", crie um método chamado "verificarAprovacao" que percorra o array de alunos e verifique se todos foram aprovados ou não. Se todos os alunos foram aprovados, retorne "Todos os alunos foram aprovados". Caso contrário, retorne "Alguns alunos foram reprovados".
 */
class Aluno {
  constructor(nome, idade, notas) {
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
  
  exibirMediaAluno() {
    console.log(this.calcularMedia());
  }
}

const alunos = [
  new Aluno('Luana', 20, [8, 7, 5.4, 10]),
  new Aluno('Joaozinho', 22, [6, 4, 8.4, 8]),
  new Aluno('Mariazinha', 19, [9, 10, 8.4, 9]),
  new Aluno('Dona Barata', 20, [7, 4, 9, 7.7]),
];

class Turma {
  constructor(alunos) {
    this.alunos = alunos;
  }

  exibirMediaTurma() {
    // Alternativa para não usar o reduce:
    /**
     * let soma = 0
     * for(nota of arrayDeNotas){
     *    soma += nota
     * }
     */
    const arrayDeNotas = this.alunos.map((aluno) => aluno.notas).flat();

    const somaDasNotas = arrayDeNotas.reduce(
      (acumulador, valorAtual) => acumulador + valorAtual
    );

    const media = (somaDasNotas / arrayDeNotas.length).toFixed(1);

    console.log(media);
  }

  adicionarStatusAprovacao() {
    const alunosPorAprovacao = this.alunos.map((aluno) => {
      const mediaAluno = aluno.calcularMedia();

      aluno.aprovado = mediaAluno < 7 ? false : true;

      return aluno;
    });

    return alunosPorAprovacao;
  }

  verificaAprovacao() {
    const alunoReprovado = this.adicionarStatusAprovacao().find(
      (aluno) => aluno.aprovado == false
    );

    if (alunoReprovado) {
      return console.log('Um ou mais alunos foram reprovados');
    }

    return console.log('Todos os alunos foram aprovados');
  }

  inserirAluno(aluno) {
    this.alunos.push(aluno);
  }
}

class Escola {
  constructor(nome) {
    this.nome = nome;
  }

  adicionarTurma(turma) {
    this.turma = turma;
  }
}

const escola = new Escola('Escola Reprograma');

escola.adicionarTurma(
    new Turma([
        new Aluno('Nome Aluno1', 19, [8, 7, 5, 3])]
    )
);
console.log(escola.turma)
const novoAluno = new Aluno('Manuelly', 25, [8, 6, 4.5, 3]);

console.log(novoAluno.calcularMedia());

const turma = new Turma(alunos);

turma.inserirAluno(novoAluno);
console.log(turma.exibirMediaTurma());
console.log(turma.adicionarStatusAprovacao());
console.log(novoAluno.exibirMediaAluno());
