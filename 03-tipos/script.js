"use strict";
// Arrays
const array1 = [1, 2, 3]; // Sintaxe mais utilizada
console.log(array1);
const array2 = [1, 2, 3];
console.log(array2);
const array3 = ['Mario', 'Lucas', 'Rodrigo']; // Sintaxe mais utilizada
console.log(array3);
const array4 = ['Mario', 'Lucas', 'Rodrigo'];
console.log(array4);
// Any
const arr1 = [1, '2', false, [], {}];
// Tipo de parâmetro de funções
function soma(a, b) {
    return a + b;
}
const soma1 = soma(10, 20);
const soma2 = soma(8, 9);
console.log(soma1, soma2);
// Tipo de retorno de funções
function divisao(a, b) {
    return a / b;
}
const divisao1 = divisao(10, 2);
const divisao2 = divisao(8, 2);
console.log(divisao1, divisao2);
// Funções anônimas
const divisao3 = function (a, b) {
    return a / b;
};
const divisao4 = (a, b) => a / b;
console.log(divisao3(10, 2), divisao4(10, 2));
// Tipos de objetos
const pessoa = {
    nome: 'João',
    idade: 30
};
console.log(pessoa);
// Propriedades opcionais
const pessoa1 = {
    nome: 'João'
};
console.log(pessoa1);
// Validação de props opcionais
function advancedGreeting(name, lastName) {
    if (lastName !== undefined) {
        return `Olá ${name} ${lastName}, tudo bem?`;
    }
    else {
        return `Olá ${name}, tudo bem?`;
    }
}
console.log(advancedGreeting('João'));
console.log(advancedGreeting('João', 'Silva'));
// Union types
function printId(id) {
    console.log(`O ID passado foi: ${id}`);
}
printId(1);
printId('Maria');
printId(false);
// Condicionais em Union types
function printId2(id) {
    if (typeof id === 'string') {
        console.log(`O ID passado foi string: ${id}`);
    }
    else if (typeof id === 'number') {
        console.log(`O ID passado foi number: ${id}`);
    }
    else {
        console.log(`O ID passado foi boolean: ${id}`);
    }
}
printId2(1);
printId2('Maria');
printId2(false);
function printId3(id) {
    console.log(`O ID passado foi: ${id}`);
}
printId3(1);
const person = {
    name: 'João',
    age: 30
};
console.log(person);
const person2 = {
    name: 'João',
    age: 30,
    id: 1
};
console.log(person2);
//type ID2 = number | string | boolean // Não dá pra modificar o type
const id2 = 1;
console.log(id2);
function move(direction) {
    console.log(`Movendo para o ${direction}`);
}
move('Norte');
// Non null assertion operator (!)
// Às vezes o Typescript pode evidenciar um erro, baseado em um valor que no momento do código ainda não está disponível.
// Porém se sabemos que este valor será preenchido, podemos evitar o erro. Utilizando o !, podemos fazer isso.
//const p = document.getElementById('someparagraph') //as HTMLParagraphElement
//console.log(p!.innerText)
// Bigint: declarar valores muito altos
// Podemos utilizar notação literal, exemplo: 100n
// Necessário mudar a configuração mínima no tsconfig.json para "target": "es2020"
const n = 1234567890123456789012345678901234567890n;
// Symbol: cria uma referência única para um valor
// Ou seja, mesmo que ele possua o mesmo valor de outra variável, teremos valores sendo considerados diferentes
// Necessário mudar a configuração mínima no tsconfig.json para "target": "es2020"
const symbolA = Symbol("A");
const symbolB = Symbol("A");
console.log(symbolA == symbolB); // false
console.log(symbolA === symbolB); // false
