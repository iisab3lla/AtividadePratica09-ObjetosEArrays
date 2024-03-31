// Crie um objeto para colocar nome e duas notas. Atribua nome e
// duas notas para o primeiro objeto, que será nosso primeiro aluno.
// Agora crie mais um objeto para colocar informações do nosso
// segundo aluno. Mostre as informações de cada aluno no console.
// Mostre também a média do primeiro aluno e a média do segundo
// aluno. Por fim mostre a média desta turma de 2 alunos.

let primeiroAluno ={
    Nome: "Isabella",
    Nota1: 9,
    Nota2: 7,
};

let segundoAluno = {
    Nome: "Djonathan",
    Nota1: 8,
    Nota2: 9,
};

console.log(`Primeiro aluno:
Nome do aluno: ${primeiroAluno.Nome} 
Nota 1: ${primeiroAluno.Nota1} 
Nota 2: ${primeiroAluno.Nota2}`);

console.log(`Segundo Aluno:
Nome do aluno: ${segundoAluno.Nome} 
Nota 1: ${segundoAluno.Nota1} 
Nota 2: ${segundoAluno.Nota2}`);

let mediaPrimeiroAluno = (primeiroAluno.Nota1 + primeiroAluno.Nota2) / 2;

console.log(`A média do primeiro aluno é igual a: ${mediaPrimeiroAluno}`);

let mediaSegundoAluno = (segundoAluno.Nota1 + segundoAluno.Nota2) / 2;

console.log(`A média do segundo aluno é igual a: ${mediaSegundoAluno}`);

let mediaTurma = (mediaPrimeiroAluno + mediaSegundoAluno) / 2;

console.log(`A média da turma é igual a: ${mediaTurma}`);
