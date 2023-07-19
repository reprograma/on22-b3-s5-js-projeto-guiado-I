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
  
    exibirMedia() {
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
    constructor(alunos, nome) {
      this.nome = nome
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
  
    mudarNome(novoNome){
      return this.nome = novoNome
    }
  }
  
  
  // Trabalhando com a classe TURMA
  const turma = new Turma(alunos,"Fundamental 3");
  console.log(turma)
  // Criando novo Aluno
  const novoAluno = new Aluno('Manuelly', 25, [8, 6, 4.5, 3]);
  // Adicionando o novo aluno para a turma
  turma.inserirAluno(novoAluno);
  
  // Os métodos das classes que podem ser utilizados:
  console.log(turma.exibirMediaTurma())
  turma.mudarNome("Médio 2")
  console.log(turma)
  