// Importação de arquivos

import importGreet from "./greet";

importGreet() // Olá, esta função foi exportada

// Importação de variáveis

import { x } from "./variable"; // Variável de importação

console.log(x)

// Múltiplas importações

import { a, b, c } from "./multiple";

console.log(a, b, c) // 1 Olá pessoal false

// Alias (as)
// Ou seja, mudar o nome do que foi importado

import { someName as name } from "./alias";

console.log(name) // Esta variável mudou de nome

// Importar tudo (*)
// Importar tudo que está em um arquivo com apenas o símbolo *
// Os dados virão em um objeto
// É necessário criar um alias (as)

import * as myNumbers from "./numbers";

console.log(myNumbers) // { n1: 1, n2: 2, n3: 3, n4: 4, n5: 5 }

// Importando tipos ou interfaces
// Exporta como se fossem variáveis
// E no arquivo que os recebe, utilizamos destructuring

import { Human } from "./myType";

function showHumanDetails({ name, age }: Human) {
  console.log(name, age);
}

showHumanDetails({ name: "João", age: 30 }); // João 30
