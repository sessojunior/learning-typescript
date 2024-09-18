"use strict";
// Criação de tipos
// Usado para deixar a manutenção do projeto mais simples
// Generics
// Utilizamos quando uma função pode aceitar mais de um tipo
function showData(arg) {
    return `O dado é ${arg}`;
}
console.log(showData('João'));
const number = showData(123);
console.log(number);
// Constraint em Generics
// Limita os tipos aceitos em Generics
function showProductName(obj) {
    return `O nome do item é ${obj.name}`;
}
const myObj = { name: 'Porta', cor: 'Branca' };
const otherObj = { name: 'Computador', cor: 'Prata', preco: 5000 };
const anyObj = { name: 'Arma' };
console.log(showProductName(myObj));
console.log(showProductName(otherObj));
console.log(showProductName(anyObj));
const myCar = {
    name: 'Fusca',
    wheels: 4,
    engine: '1.0',
    color: 'Branca'
};
const myPen = {
    name: 'Caneta',
    wheels: false,
    engine: true
};
console.log(myCar);
console.log(myPen);
// Type Parameters
// Usado parâmetro de uma função, por exemplo, é a chave de um objeto, que também é parâmetro
// Liga um argumento de uma função a outro
function getSomeKey(obj, key) {
    return `O valor da chave ${key.toString()} está presente no objeto ${obj[key]}`;
}
const server = {
    hd: '2TB',
    ram: '32GB'
};
console.log(getSomeKey(server, 'ram'));
function showCharName(obj, name) {
    return `O nome do personagem é ${obj[name]}`;
}
const myChar = {
    name: 'João',
    age: 30,
    hasDriveLicence: true
};
console.log(showCharName(myChar, 'name'));
console.log(showCharName(myChar, 'age'));
// typeof Type Operator
// Com o typeof Type Operator podemos criar um novo tipo
// Este tipo é e será baseado no tipo de algum dado
// É interessante quando queremos criar uma variável com o mesmo tipo da outra, por exemplo
const userName = 'João';
const userName2 = 'Mario';
console.log(userName, typeof userName);
console.log(userName2, typeof userName2);
const userName3 = 'Marcos';
console.log(userName3, typeof userName3);
const newCar = {
    km: 10000,
    kg: 5000,
    description: 'Carro novo'
};
function showKm(km) {
    console.log(`O veículo tem ${km} km`);
}
showKm(newCar.km);
const someValue = 10;
console.log(someValue);
const testingA = "testando text";
console.log(testingA);
const a = "a";
const b = "b";
//const c: a3 = "d" // Erro
console.log(a, b);
//console.log(a, b, c)
