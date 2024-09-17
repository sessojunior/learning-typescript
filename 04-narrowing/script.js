"use strict";
// Narrowing
// Usado para identificar tipos de dados, dando assim uma direção diferente à execução do programa, baseada no tipo que foi identificado.
// typeof Type Guard
// É baicamente uma validação do tipo usando o typeof
function sum(a, b) {
    if (typeof a === 'string' && typeof b === 'string') {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === 'number' && typeof b === 'number') {
        console.log(a + b);
    }
    else {
        console.log("Impossível realizar a soma");
    }
}
sum(1, 2);
sum('1', '2');
sum(1, '2');
// Checando se valor existe
function operations(arr, operation) {
    if (operation) {
        if (operation === 'sum') {
            const sum = arr.reduce((i, total) => total + i);
            console.log(sum);
        }
        else if (operation === 'multiply') {
            const multiply = arr.reduce((i, total) => total * i);
            console.log(multiply);
        }
        else if (operation === 'divide') {
            const divide = arr.reduce((i, total) => total / i);
            console.log(divide);
        }
    }
    else {
        console.log("Nenhuma operação definida");
    }
}
operations([1, 2, 3]);
operations([1, 2, 3], 'sum');
operations([1, 2, 3], 'multiply');
operations([1, 2, 3], 'divide');
// Operador instanceof
// Checa se um dado pertence a uma determinada classe
class User {
    constructor(name) {
        this.name = name;
    }
}
class SuperUser extends User {
    constructor(name) {
        super(name);
    }
}
const jhon = new User('Jhon');
const paul = new SuperUser('Paul');
console.log(jhon);
console.log(paul);
function userGreeting(user) {
    if (user instanceof SuperUser) {
        console.log(`Olá ${user.name}, deseja ver os dados do sistema?`);
    }
    else if (user instanceof User) {
        console.log(`Olá ${user.name}!`);
    }
    else {
        console.log("Erro");
    }
}
userGreeting(jhon);
userGreeting(paul);
// Operador in
// Utilizado para checar se existe uma propriedade no objeto, pois propriedades também podem ser opcionais
class Dog {
    constructor(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
}
const turca = new Dog('Turca');
const bob = new Dog('Bob', 'Pastor Alemão');
function showDogDetails(dog) {
    if ('breed' in dog) {
        console.log(`O cachorro é um ${dog.breed}`);
    }
    else {
        console.log(`O cachorro é um cachorro sem raça definida`);
    }
}
showDogDetails(turca);
showDogDetails(bob);
// Exercício:
// Criar uma função que recebe review dos usuários, precisamos utilizar o narrowing para receber o dados
// As possibilidades são boolean e number
// Serão enviados números de 1 a 5 (estrelas), para prever uma mensagem para cada uma destas notas
// Ou false, que é quando o usuário não deixa uma review, prever um retorno para este caso também.
function getReview(review) {
    if (typeof review === 'number') {
        console.log(`Avaliação: ${review}`);
    }
    else if (typeof review === 'boolean') {
        if (review) {
            console.log('Obrigado pela avaliação');
        }
        else {
            console.log('Nenhuma avaliação');
        }
    }
}
getReview(5);
getReview(0);
getReview(false);
