// Funções

// Funções que não retorna nada
// Usar void - quando não temos um valor de retorno

function withoutReturn(): void {
  console.log('Esta função não retorna nada!')
}

withoutReturn()

// Callback como argumento
// Função de callback como argumento de função
// Define o tipo de argumento aceito pela callback e também o tipo de retorno da mesma

function greeting(name: string): string {
  return `Olá ${name}`
}

function preGreeting(f: (name: string) => string, userName: string) {
  console.log('Preparando a função...')
  const greet = f(userName)
  console.log(greet)
}

preGreeting(greeting, 'João')
preGreeting(greeting, 'Mario')

// Generic function
// Estratégia para quando o tipo de retorno é relacionado ao tipo do argumento
// Um item de um array pode ser string, number ou boolean
// Normalmente são utilizadas letras como <T> ou <U> para definir os generics, é uma convenção

function firstElement<T>(arr: T[]): T {
  return arr[0]
}

console.log(firstElement([1, 2, 3]))
console.log(firstElement(['a', 'b', 'c']))

function mergeObjects<U, T>(objA: U, objB: T) {
  return {
    ...objA,
    ...objB
  }
}

const newObject = mergeObjects({ name: 'João' }, { age: 30, job: 'Programador' })

console.log(newObject)

function mergeArrays<T>(arrA: T[], arrB: T[]) {
  return [...arrA, ...arrB]
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6]))

// Constraint em generic function
// Limita os tipos que podem ser utilizados no Generic fazendo com que o escopo seja menos abrangente

function biggestNumber<T extends number | string>(a: T, b: T): T {
  let biggest: T
  if (typeof a === 'string') {
    biggest = a
  } else if (typeof b === 'string') {
    biggest = b
  } else if (a > b) {
    biggest = a
  } else {
    biggest = b
  }
  return biggest
}

console.log(biggestNumber('a', 'b'))
console.log(biggestNumber(1, 2))

// Definindo tipo de parâmetros de funções
// Especificar tipo de argumento

function mergeArrays2<T>(arrA: T[], arrB: T[]) {
  return [...arrA, ...arrB]
}

console.log(mergeArrays2<number | string>([1, 2, 3], ["a", "b", "c"]))

// Parâmetros opcionais
// Se o parâmetro for opcional, deve ser deixado no fim da lista de parâmetros

function modernGreeting(name: string, greet?: string) {
  if (greet) {
    return `Olá ${greet} ${name}, tudo bem?`
  } else {
    return `Olá ${name}, tudo bem?`
  }
}

console.log(modernGreeting('João'))
console.log(modernGreeting('João', 'Dr.'))

// Parâmetros default
// Se não passamos para a função é utilizado o parâmetro default
// Precisa estar sempre por último na lista de parâmetros

function defaultGreeting(name: string = 'João') {
  return `Olá ${name}, como vai?`
}

console.log(defaultGreeting())
console.log(defaultGreeting('Maria'))

// Tipo unknown
// Semelhante ao tipo any, aceita qualquer tipo de dado
// A diferença é que ele não deixa algo ser executado se não houver validação de tipo

function doSomething(x: unknown) {
  if (Array.isArray(x)) {
    console.log(x[0])
  } else if (typeof x === 'number') {
    console.log('X e um número')
  }
}

doSomething([1, 2, 3])
doSomething(5)

// Tipo never
// Quando uma função não retorna nada
// Usar o never para tratar erros e parar o programa

function showErrorMessage(msg: string): never {
  throw new Error(msg)
}
// showErrorMessage("Algo deu errado")

// Rest operators
// Basta definir o tipo de dado com a sintaxe de Rest (...)

function sumAll(...n: number[]) {
  return n.reduce((previousValue, currentValue) => previousValue + currentValue)
}

console.log(sumAll(1, 2, 3, 4, 5))
console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

// Destructuring em parâmetros
// Precisa antes determinar o tipo de cada dado que será desestruturado

function showProductDetails({ name, price }: { name: string, price: number }): void {
  console.log(`O nome do item é ${name} e ele custa ${price}`)
}

const shirt = { name: 'Camisa', price: 49.99 }
showProductDetails(shirt)
