// Object Types
// São dados que tem como tipo o objeto, por exemplo: object literals e arrays.
// Diversos recursos para explorar estes tipos: Interfaces, readonly, tupla etc.

// De tipo para Interface
// Simplifica os parâmetros do objeto
// Em vez de passar parâmetros de um objeto longo para n funções, passamos apenas a Interface

interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: 'João',
  age: 30
}

console.log(person)

// Interface como parâmetro

interface Product {
  name: string;
  price: number;
  isAvailable: boolean;
}

function showProductDetails(product: Product) {
  console.log(`O nome do item é ${product.name}, ele custa R$ ${product.price} e está disponível? ${product.isAvailable ? 'Sim' : 'Não'}`)
}

showProductDetails({ name: 'Camisa', price: 49.99, isAvailable: true })

// Interface como parâmetro opcional
// Basta adicionar a interrogação no nome da propriedade. Exemplo: nome?:string

interface Product2 {
  name: string;
  price: number;
  isAvailable?: boolean;
}

function showProductDetails2(product: Product2) {
  console.log(`O item é ${product.name}, ele custa R$ ${product.price}.`)

  if (product.isAvailable !== undefined) {
    if (product.isAvailable) {
      console.log(`O item ${product.name} esta disponível`)
    } else {
      console.log(`O item ${product.name} não está disponível`)
    }
  }
}

showProductDetails2({ name: 'Relógio', price: 87.99 })
showProductDetails2({ name: 'Relógio', price: 87.99, isAvailable: true })

// Propriedades readonly
// Podem ser alteradas apenas uma vez, na criação do novo dado.
// É uma forma de criar um valor constante em um objeto
// Podemos adicionar às interfaces

interface Car {
  brand: string;
  readonly wheels: number;
}

const fusca: Car = {
  brand: 'VW',
  wheels: 4
}

// fusca.wheels = 5 // Não permite alterar a propriedade wheels, pois é readonly
console.log(fusca.wheels)

// Index Signature
// Utiliza quando não sabemos o nome das chaves, mas já sabemos quais os tipos de um objeto ou array
// Restringe a tipos que não devem ser utilizados

interface CoordObject {
  [index: string]: number
}

let coords: CoordObject = {
  x: 10,
  y: 20
}

console.log(coords)

coords = {
  z: 30
}

console.log(coords)

// Extending Types
// Utilizamos Extending Types como uma herança para criar tipos mais complexos por meio de uma interface
// Uma interface pode herdar as propriedades e tipos já definidos de outra
// Isso acontece por meio da instrução extends

interface Human {
  name: string,
  age: number
}

interface SuperMan extends Human {
  superpower: string
}

const batman: SuperMan = {
  name: 'Bruce Waine',
  age: 30,
  superpower: 'Combat'
}

console.log(batman)

// Intersection Types
// Serve para unir duas interfaces em um tipo mais complexo
// Podemos concatenar os tipos com &

interface Character {
  name: string
}

interface Gun {
  type: string,
  caliber: number
}

type HumanWithGun = Character & Gun

const arnold: HumanWithGun = {
  name: 'Arnold Schwarzenegger',
  type: 'Shotgun',
  caliber: 12
}

console.log(arnold)
console.log(arnold.type)

// ReadonlyArray
// É um tipo para arrays, que deixa os itens como readonly
// Podemos aplicar um tipo para os itens do array, além desta propriedade especial
// A modificação de itens pode ser feita através de método, mas não podemos aumentar o array, por exemplo

let myArray: ReadonlyArray<string> = ["Maçã", "Laranja", "Abacaxi"]

//myArray[3] = "Mamão" // Não permite adicionar um item, pois é ReadonlyArray

console.log(myArray)

myArray.forEach((item) => console.log(item))

// Tuplas
// É um tipo de array, porém definimos a quantidade e o tipo de elementos
// Basicamente criamos um novo type, e nele inserimos um array com os tipos necessários
// Cada tipo conta também com um elemento

type StringAndNumber = [string, number, boolean, number]

const myStringAndNumber: StringAndNumber = ['Carro', 15, true, 35]

console.log(myStringAndNumber)

type nameAndAge = [string, number]

const myNameAndAge: nameAndAge = ['Maria', 25]

console.log(myNameAndAge)

// Tuplas com Readonly
// Limita quantos itens teremos, qual o tipo de cada um e também não são modificáveis
// Só pode consultar a tupla, não pode modificar

const myNameAndAge2: Readonly<nameAndAge> = ['Joana', 47]

console.log(myNameAndAge2)

function showNumbers(numbers: readonly [number, number]): void {
  //number[0] = 10 // Não permite modificar o valor, pois é readonly
  console.log(numbers[0])
  console.log(numbers[1])
}

showNumbers([2, 3])

