// Arrays

const array1: number[] = [1, 2, 3] // Sintaxe mais utilizada
console.log(array1)

const array2: Array<number> = [1, 2, 3]
console.log(array2)

const array3: string[] = ['Mario', 'Lucas', 'Rodrigo'] // Sintaxe mais utilizada
console.log(array3)

const array4: Array<string> = ['Mario', 'Lucas', 'Rodrigo']
console.log(array4)

// Any

const arr1: any = [1, '2', false, [], {}]

// Tipo de parâmetro de funções

function soma(a: number, b: number): number {
  return a + b
}

const soma1 = soma(10, 20)
const soma2 = soma(8, 9)

console.log(soma1, soma2)

// Tipo de retorno de funções

function divisao(a: number, b: number): number {
  return a / b
}

const divisao1 = divisao(10, 2)
const divisao2 = divisao(8, 2)

console.log(divisao1, divisao2)

// Funções anônimas

const divisao3 = function (a: number, b: number): number {
  return a / b
}

const divisao4 = (a: number, b: number): number => a / b

console.log(divisao3(10, 2), divisao4(10, 2))

// Tipos de objetos

const pessoa: { nome: string; idade: number } = {
  nome: 'João',
  idade: 30
}

console.log(pessoa)

// Propriedades opcionais

const pessoa1: { nome: string; idade?: number } = {
  nome: 'João'
}

console.log(pessoa1)

// Validação de props opcionais

function advancedGreeting(name: string, lastName?: string): string {
  if (lastName !== undefined) {
    return `Olá ${name} ${lastName}, tudo bem?`
  } else {
    return `Olá ${name}, tudo bem?`
  }
}

console.log(advancedGreeting('João'))
console.log(advancedGreeting('João', 'Silva'))

// Union types

function printId(id: number | string | boolean) {
  console.log(`O ID passado foi: ${id}`)
}

printId(1)
printId('Maria')
printId(false)

// Condicionais em Union types

function printId2(id: number | string | boolean) {
  if (typeof id === 'string') {
    console.log(`O ID passado foi string: ${id}`)
  } else if (typeof id === 'number') {
    console.log(`O ID passado foi number: ${id}`)
  } else {
    console.log(`O ID passado foi boolean: ${id}`)
  }
}

printId2(1)
printId2('Maria')
printId2(false)

// Type alias: não pode ser alterada ao longo do código

type ID = number | string | boolean

function printId3(id: ID) {
  console.log(`O ID passado foi: ${id}`)
}

printId3(1)

// Interfaces: pode ser alterada ao longo do código

interface Person {
  name: string
  age: number
}

const person: Person = {
  name: 'João',
  age: 30
}

console.log(person)

// Type Alias x Interfaces
// Alias: não pode ser alterada ao longo do código
// Interfaces: pode ser alterada ao longo do código

interface Person2 {
  name: string
  age: number
}

interface Person2 {
  id: ID2
}

const person2: Person2 = {
  name: 'João',
  age: 30,
  id: 1
}

console.log(person2)

type ID2 = number | string
//type ID2 = number | string | boolean // Não dá pra modificar o type

const id2 = 1

console.log(id2)

// Literal types: colocar valores como tipos
// Muito utilizado com Union types

type Direction = 'Norte' | 'Sul' | 'Leste' | 'Oeste'

function move(direction: Direction) { 
  console.log(`Movendo para o ${direction}`)
}

move('Norte')

// Non null assertion operator (!)
// Às vezes o Typescript pode evidenciar um erro, baseado em um valor que no momento do código ainda não está disponível.
// Porém se sabemos que este valor será preenchido, podemos evitar o erro. Utilizando o !, podemos fazer isso.

//const p = document.getElementById('someparagraph') //as HTMLParagraphElement

//console.log(p!.innerText)

// Bigint: declarar valores muito altos
// Podemos utilizar notação literal, exemplo: 100n
// Necessário mudar a configuração mínima no tsconfig.json para "target": "es2020"

const n: bigint = 1234567890123456789012345678901234567890n

// Symbol: cria uma referência única para um valor
// Ou seja, mesmo que ele possua o mesmo valor de outra variável, teremos valores sendo considerados diferentes
// Necessário mudar a configuração mínima no tsconfig.json para "target": "es2020"

const symbolA:symbol = Symbol("A")
const symbolB = Symbol("A")

console.log(symbolA == symbolB) // false
console.log(symbolA === symbolB) // false
