"use strict";
// Number
const n1 = 10;
console.log(n1);
console.log(typeof n1);
// String
const nome = 'João';
console.log(nome);
console.log(typeof nome);
// Boolean
const verdadeiro = true;
console.log(verdadeiro);
console.log(typeof verdadeiro);
// Type annotation (declara o tipo)
const annotation1 = 10;
console.log(annotation1);
console.log(typeof annotation1);
// Type inference (não declara o tipo)
const inference1 = 12;
console.log(inference1);
console.log(typeof inference1);
// Teste de TS automático usando watch mode
console.log("Usando o tsc -w");
// Exercício
// 1. Criar uma variável que recebe um número
// 2. Converter este número para string em uma nova variável
// 3. Esta variável de conversão deve estar tipada por inferência
// 4. Imprimir este número em uma string maior, utilizando o recurso de template strings ou concatenação.
const numero = 1000;
const texto = numero.toString(); // const texto = String(numero)
console.log(`O número ${numero} agora é a string ${texto}.`);
