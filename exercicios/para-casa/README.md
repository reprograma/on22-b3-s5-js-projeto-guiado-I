# Exercício de Casa 🏠 

## Nome do Exercicio: Minha loja de livros

**Você precisa criar um programa para gerenciar uma loja de livros. O programa deve permitir:**

1. Cadastrar novos livros: id, título, autor, editora e preço.
2. Listar todos os livros cadastrados.
3. Pesquisar um livro pelo título e exibir suas informações.
4. Apagar um livro da lista de livros

### Requisitos
- Crie uma classe Livro com as propriedades titulo, autor, editora e preco. O id deve ser preechido com um número aleatório entre 0 e 100
- Crie uma classe Loja com uma propriedade livros, que deverá ser um array de objetos da classe Livro.
- Na classe Loja, crie um método cadastrarLivro que recebe como parâmetros as informações do livro e cria um objeto da classe Livro para adicioná-lo ao array livros.
- Na classe Loja, crie um método listarLivros que percorre o array livros e exibe as informações de cada livro.
- Na classe Loja, crie um método buscarLivro que recebe como parâmetro o título do livro a ser pesquisado. Esse método deve percorrer o array livros, buscar o livro pelo título e exibir suas informações.
- Na classe Loja, crie um método apagarLivro que recebe o id do livro e apaga ele do array de livros daquela loja. Esse método deve percorrer o array de livros da loja , encontrar o objeto no array que tem o id igual ao que foi enviado, se ele existir deve apaga-lo usando o index dele no array original, caso não, informar que o livro com aquele ID não existe
---

Terminou o exercício? Dá uma olhada nessa checklist e confere se tá tudo certinho, combinado?!

- [ok] Fiz o fork do repositório.
- [ok] Clonei o fork na minha máquina (`git clone url-do-meu-fork`).
- [ ] Resolvi o exercício.
- [ok] Adicionei as mudanças. (`git add .` para adicionar todos os arquivos, ou `git add nome_do_arquivo` para adicionar um arquivo específico)
- [ok] Commitei a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
- [ok] Pushei os commits na minha branch (`git push origin nome-da-branch`)
- [ok] Criei um Pull Request seguindo as orientaçoes que estao nesse [documento](https://github.com/mflilian/repo-example/blob/main/exercicios/para-casa/instrucoes-pull-request.md).
