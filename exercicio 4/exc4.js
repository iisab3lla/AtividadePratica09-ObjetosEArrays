// Crie um cadastro de pessoas onde o usuário informe o nome, idade
// e se está trabalhando ou não, se a pessoa estiver trabalhando

// pergunte para ele o salário que está ganhando. Para cada pessoa
// cadastrada, pergunte ao usuário se ele deseja continuar
// cadastrando ou não. No final, mostre as pessoas que estão
// desempregadas, as pessoas que estão empregadas separadas
// pelas que ganham mais que 2500 e menos que 2500.

// Exemplo de resultado:
// Pessoas desempregadas:
// Nome: Alessandro, Idade: 28
// Nome: Alessandro, Idade: 28

// Pessoas empregadas com salários menores que 2500:
// Nome: Alessandro, Idade: 28, Salário: 1500
// Nome: Alessandro, Idade: 28, Salário: 2400

// Pessoas empregadas com salários maiores que 2500:
// Nome: Alessandro, Idade: 28, Salário: 2700
// Nome: Alessandro, Idade: 28, Salário: 3000

let usuarios = [];
let desempregados = [];
let salarioMenor2500 = [];
let salarioMaior2500 = [];

let cadastro = true;

while (cadastro){
    let nome = String(prompt("Digite o seu nome!"));
    let idade = parseInt(prompt("Informe a sua idade!"));
    let trabalho = String(prompt("Você está trabalhando?"));
    let salario = 0;

    if(trabalho === `sim`){
        salario = parseFloat(prompt("Quanto você ganha atualmente?"));
    }

    let pessoas = {
        nome: nome,
        idade: idade,
        trabalho: trabalho,
        salario: salario,
    };

    usuarios.push(pessoas);

    cadastro = confirm("Deseja realizar o cadastro de outra pessoa? ");
};

    usuarios.forEach(pessoas => {
        if(`sim` != pessoas.trabalho){
            desempregados.push(pessoas);
        }
        else if(pessoas.salario < 2500){
            salarioMenor2500.push(pessoas);
        } else{
            salarioMaior2500.push(pessoas);
        }
    });

    document.write(`Pessoas Desempregadas: <br>`)
                    desempregados.forEach(pessoas => {
        document.write(`Nome: ${pessoas.nome} &#166; Idade: ${pessoas.idade} <br> <br>`)});

    document.write(`Pessoas empregadas com salário menor que 2500: <br>`)
                        salarioMenor2500.forEach(pessoas => {
        document.write(`Nome: ${pessoas.nome} &#166; Idade: ${pessoas.idade} &#166; Salário: ${pessoas.salario} <br> <br>`)});

document.write(`Pessoas empregadas com salário maior que 2500: <br>`)
                salarioMaior2500.forEach(pessoas =>{
        document.write(`Nome: ${pessoas.nome} &#166; Idade: ${pessoas.idade} &#166; Salário: ${pessoas.salario}`)});