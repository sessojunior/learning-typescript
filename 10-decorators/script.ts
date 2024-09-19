// Decorators com TypeScript
// Decorators podem adicionar funcionalidades extras a classes e funções
// Basicamente criamos novas funções, que são aidicionadas a parte de um @nome
// Esta função será chamada assim que o item que foi definido o decorator for executado
// Para habilitar precisamos adicionar uma configuração no tsconfig.json:
// Descomentar e deixar como true no tsconfig.json: "experimentalDecorators": true,

// Decorator para uma function
// Pode trabalhar com argumentos especiais, que são: target, propertyKey e descriptor
// Os decorators nos dão informação do local em que ele foi executado

function myDecorator() {
  console.log("Iniciando o decorator")

  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("Executando o decorator")
    console.log("target", target)
    console.log("propertyKey", propertyKey)
    console.log("descriptor", descriptor)
  }
}

class myClass {

  @myDecorator()
  testing() {
    console.log("Terminando a execução do método")
  }

}

const myObj = new myClass()

myObj.testing() // Executando o decorator

// Múltiplos decorators
// Podemos adicionar mais de um decorator a uma classe ou função
// O primeiro a ser executado é o que está mais abaixo do código primeiro
// Desta forma é possível criar operações mais complexas

function a() {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("Executando a")
    console.log("target", target)
    console.log("propertyKey", propertyKey)
    console.log("descriptor", descriptor)
  }
}

function b() {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("Executando b")
    console.log("target", target)
    console.log("propertyKey", propertyKey)
    console.log("descriptor", descriptor)
  }
}

function c() {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("Executando c")
    console.log("target", target)
    console.log("propertyKey", propertyKey)
    console.log("descriptor", descriptor)
  }
}

class MultipleDecorators {

  @a() // Executa a por último
  @b() // Executa b depois
  @c() // Executa c primeiro (mais próximo da função é executado primeiro)
  testing2() {
    console.log("Terminando a execução do método")
  }

}

const myObj2 = new MultipleDecorators()

// Decorator de classe
// Está ligado ao constructor da classe
// Ou seja, sempre que este for executado, teremos a execução do decorator
// Isso nos permite acrescentar algo à criação de classes

function classDecorator(constructor: Function) {
  console.log(constructor)
  if (constructor.name === "User") {
    console.log("Criando uma nova classe")
  }
}

@classDecorator
class User {
  name

  constructor(name: string) {
    this.name = name
  }
}

const mario = new User("Mario")

console.log(mario)

// Decorator de método
// Permite modificar a execução de métodos
// Precisamos inserir o decorator antes da declaração do método
// Ele é executado antes do método

function enumerable(value: boolean) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.enumerable = value
  }
}

class Machine {
  name

  constructor(name: string) {
    this.name = name
  }

  @enumerable(true)
  showName() {
    console.log(this)
    return `O nome da máquina é ${this.name}`

  }
}

const trator = new Machine('Trator')

console.log(trator.showName())

// Accessor decorator
// Semelhante ao decorator de método
// Porém, este serve apenas para os getters e setters
// Podemos alterar a execução antes de um set ou get

class Monster {
  name?
  age

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  @enumerable(true)
  get showName() {
    return `O nome é ${this.name}`
  }

  @enumerable(true)
  get showAge() {
    return `A idade é ${this.age}`
  }
}

const goblin = new Monster('Goblin', 30)
console.log(goblin)
console.log(goblin.showName)
console.log(goblin.showAge)

// Property decorator
// Permite alterar a execução de uma propriedade da classe
// Na hora da definição da classe podemos ativar uma função
// Isso nos ajuda a modificar ou validar algum valor

function formatNumber() {
  return function (target: any, propertyKey: string) {
    let value: string
    const getter = function () {
      return value
    }
    const setter = function (newValue: string) {
      value = newValue.padStart(5, '0')
    }
    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter
    })
  }
}

class Id {
  @formatNumber()
  id

  constructor(id: string) {
    this.id = id
  }
}

const newItem = new Id('1')

console.log(newItem.id) // 00001

// Exemplo com Class decorator
// Com ele podemos influenciar o constructor
// No exemplo abaixo criamos uma função para inserir data de criação dos objetos

function createdDate(created: Function) {
  created.prototype.createdAt  = new Date()
}

@createdDate
class Book {
  createdAt?: Date
  id

  constructor(id: number) {
    this.id = id
  }
}

@createdDate
class Pen {
  createdAt?: Date
  id

  constructor(id: number) {
    this.id = id
  }
}

const newBook = new Book(22)
const newPen = new Pen(33)

console.log(newBook)
console.log(newPen)

//Exemplo com Method decorator
// Com ele podemos alterar a execução dos métodos
// No exemplo abaixo vamos verificar se um usuário pode ou não fazer uma alteração no sistema
// A alteração seria o método a ser executado

function checkedIfUserPosted() {
  return function (target: Object, propertyKey: string | Symbol, descriptor: PropertyDescriptor) {
    const childFunction = descriptor.value
    console.log(childFunction)

    descriptor.value = function (...args: any[]) {
      if (args[1] === true) {
        console.log("Usuário já postou")
        return null
      } else {
        // Chama a função novamente e volta seu ciclo se o usuário ainda não tiver postado
        return childFunction.apply(this, args)
      }
    }
  }
}


class Post {
  alreadyPosted = false

  @checkedIfUserPosted()
  post(content: string, alreadyPosted: boolean) {
    this.alreadyPosted = true
    console.log(`Post: ${content}`)
  }
}

const newPost = new Post()

newPost.post('Primeiro post', newPost.alreadyPosted) // Post: Primeiro post
newPost.post("Segundo post", newPost.alreadyPosted) // Usuário já postou
newPost.post("Terceiro post", newPost.alreadyPosted) // Usuário já postou

// Exemplo com Property Decorator
// Com ele podemos verificar uma propriedade de um objeto
// No exemplo abaixo vamos criar uma validação de número máximo de caracteres com decorators

function maxLength(limit: number) {
  return function (target: Object, propertyKey: string) {
    let value: string

    const getter = function () {
      return value
    }

    const setter = function (newVal: string) {
      if (newVal.length > limit) {
        console.log(`O valor deve ter no máximo ${limit} caracteres`)
        return
      } else {
        value = newVal
      }
    }

    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter
    })
  }
}

class Admin {
  @maxLength(8)
  username

  constructor(username: string) {
    this.username = username
  }

  get user() {
    return this.username
  }
}

const lucas = new Admin('lucasrafael')
const maria = new Admin('maria')

console.log(lucas) // O valor deve ter no máximo 8 caracteres
console.log(maria.user) // maria
