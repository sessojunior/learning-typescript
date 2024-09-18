// Criação de tipos
// Usado para deixar a manutenção do projeto mais simples

// Generics
// Utilizamos quando uma função pode aceitar mais de um tipo

function showData<T>(arg: T): string {
  return `O dado é ${arg}`
}

console.log(showData('João'))

const number = showData(123)

console.log(number)

// Constraint em Generics
// Limita os tipos aceitos em Generics

function showProductName<T extends { name: string }>(obj: T) { // Torna obrigatório ter a propriedade name
  return `O nome do item é ${obj.name}`
}

const myObj = { name: 'Porta', cor: 'Branca' }
const otherObj = { name: 'Computador', cor: 'Prata', preco: 5000 }
const anyObj = { name: 'Arma' }

console.log(showProductName(myObj))
console.log(showProductName(otherObj))
console.log(showProductName(anyObj))

// Interfaces com Generics
// Com Interfaces podemos criar tipos complexos para objetos

interface MyObject<T, U, Q> {
  name: string
  wheels: T
  engine: U
  color?: Q
}

type Car = MyObject<number, string, string>
type Pen = MyObject<boolean, boolean, string>

const myCar: Car = {
  name: 'Fusca',
  wheels: 4,
  engine: '1.0',
  color: 'Branca'
}

const myPen: Pen = {
  name: 'Caneta',
  wheels: false,
  engine: true
}

console.log(myCar)
console.log(myPen)

// Type Parameters
// Usado parâmetro de uma função, por exemplo, é a chave de um objeto, que também é parâmetro
// Liga um argumento de uma função a outro

function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
  return `O valor da chave ${key.toString()} está presente no objeto ${obj[key]}`
}

const server = {
  hd: '2TB',
  ram: '32GB'
}

console.log(getSomeKey(server, 'ram'))

// keyof Type Operator
// Com o keyof Type Operator podemos criar um novo tipo

type Character = { name: string, age: number, hasDriveLicence: boolean }

type C = keyof Character

function showCharName(obj: Character, name: C): string {
  return `O nome do personagem é ${obj[name]}`
}

const myChar: Character = {
  name: 'João',
  age: 30,
  hasDriveLicence: true
}

console.log(showCharName(myChar, 'name'))
console.log(showCharName(myChar, 'age'))

// typeof Type Operator
// Com o typeof Type Operator podemos criar um novo tipo
// Este tipo é e será baseado no tipo de algum dado
// É interessante quando queremos criar uma variável com o mesmo tipo da outra, por exemplo

const userName: string = 'João'
const userName2: typeof userName = 'Mario'

console.log(userName, typeof userName)
console.log(userName2, typeof userName2)

type x = typeof userName

const userName3: x = 'Marcos'

console.log(userName3, typeof userName3)

// Indexed access types
// Permite criar um tipo baseado em uma chave de objeto
// Consegue reaproveitar o tipo da chave para outros locais, como funções

type Truck = { km: number, kg: number, description: string }

type Km = Truck['km']

const newCar: Truck = {
  km: 10000,
  kg: 5000,
  description: 'Carro novo'
}

function showKm(km: Km) {
  console.log(`O veículo tem ${km} km`)
}

showKm(newCar.km)

// Conditional Expressions Type
// Tipo por condição, permite criar um novo tipo com base em um if/else
// Mas não são aceitas expressões tão amplas
// Utilizamos a sintaxe de if ternário

interface A { }

interface B extends A { }

type myType = B extends A ? number : string

const someValue: myType = 10

console.log(someValue)

// Template literals type
// Customiza tipos de maneiras infinitas

type testA = "text"

type customType = `testando ${testA}`

const testingA: customType = "testando text"

console.log(testingA)

type a1 = "a"
type a2 = "a" | "b"
type a3 = "a" | "b" | "c"

const a: a1 = "a"
const b: a2 = "b"
//const c: a3 = "d" // Erro

console.log(a, b)
//console.log(a, b, c)