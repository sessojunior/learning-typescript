"use strict";
// Object Types
// São dados que tem como tipo o objeto, por exemplo: object literals e arrays.
// Diversos recursos para explorar estes tipos: Interfaces, readonly, tupla etc.
const person = {
    name: 'João',
    age: 30
};
console.log(person);
function showProductDetails(product) {
    console.log(`O nome do item é ${product.name}, ele custa R$ ${product.price} e está disponível? ${product.isAvailable ? 'Sim' : 'Não'}`);
}
showProductDetails({ name: 'Camisa', price: 49.99, isAvailable: true });
function showProductDetails2(product) {
    console.log(`O item é ${product.name}, ele custa R$ ${product.price}.`);
    if (product.isAvailable !== undefined) {
        if (product.isAvailable) {
            console.log(`O item ${product.name} esta disponível`);
        }
        else {
            console.log(`O item ${product.name} não está disponível`);
        }
    }
}
showProductDetails2({ name: 'Relógio', price: 87.99 });
showProductDetails2({ name: 'Relógio', price: 87.99, isAvailable: true });
const fusca = {
    brand: 'VW',
    wheels: 4
};
// fusca.wheels = 5 // Não permite alterar a propriedade wheels, pois é readonly
console.log(fusca.wheels);
let coords = {
    x: 10,
    y: 20
};
console.log(coords);
coords = {
    z: 30
};
console.log(coords);
const batman = {
    name: 'Bruce Waine',
    age: 30,
    superpower: 'Combat'
};
console.log(batman);
const arnold = {
    name: 'Arnold Schwarzenegger',
    type: 'Shotgun',
    caliber: 12
};
console.log(arnold);
console.log(arnold.type);
// ReadonlyArray
// É um tipo para arrays, que deixa os itens como readonly
// Podemos aplicar um tipo para os itens do array, além desta propriedade especial
// A modificação de itens pode ser feita através de método, mas não podemos aumentar o array, por exemplo
let myArray = ["Maçã", "Laranja", "Abacaxi"];
//myArray[3] = "Mamão" // Não permite adicionar um item, pois é ReadonlyArray
console.log(myArray);
myArray.forEach((item) => console.log(item));
const myStringAndNumber = ['Carro', 15, true, 35];
console.log(myStringAndNumber);
const myNameAndAge = ['Maria', 25];
console.log(myNameAndAge);
// Tuplas com Readonly
// Limita quantos itens teremos, qual o tipo de cada um e também não são modificáveis
// Só pode consultar a tupla, não pode modificar
const myNameAndAge2 = ['Joana', 47];
console.log(myNameAndAge2);
function showNumbers(numbers) {
    //number[0] = 10 // Não permite modificar o valor, pois é readonly
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([2, 3]);
