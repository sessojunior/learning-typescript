// Classes com Typescript

// Campos em classes
// Em typescript pode adicionar novos campos a uma classes
// Que serão as propriedades dos objetos instanciados
// Estes campos podem ser tipados também
// Um campo sem valor inicial deve ser declarado com !

class User {
  name!: string;
  age!: number;
}

const user = new User();
user.name = 'João';
user.age = 30;

console.log(user)

// Constructor
// Dá a possibilidade de iniciar um objeto com valores nos seus campos
// Isso faz com que não precisemos mais da !
// Provavelmente todos os campos serão preenchidos na hora de instanciar um objeto

class NewUser {
  name
  age

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

const marcos = new NewUser('Marcos', 22)
const pedro = new NewUser('Pedro', 34)

console.log(marcos)
console.log(pedro)

// Campos readonly
// Podemos iniciar o campo com valor e torná-lo readonly
// Ou seja, será um valor só para consulta
// Não podemos alterar este valor ao longo do programa

class Car {
  name
  readonly wheels = 4

  constructor(name: string) {
    this.name = name
  }
}

const fusca = new Car('Fusca')

console.log(fusca)

fusca.name = 'Celta'

console.log(fusca)

// Herança e super
// Para gerar uma herança utilizamos a palavra reservada extends
// Depois passamos as propriedades da classe pai para ela quando instanciamos um objeto
// Isso será feito com a função super

class Machine {
  name

  constructor(name: string) {
    this.name = name
  }
}

const trator = new Machine('Trator')

console.log(trator)

class KillerMachine extends Machine {
  guns
  constructor(name: string, guns: number) {
    super(name)
    this.guns = guns
  }
}

const destroyer = new KillerMachine('Destroyer', 4)

console.log(destroyer)

// Métodos de classe
// São como funções de classe
// Podemos criá-los junto das classes e os objetos podem utilizá-los
// É uma maneira de adicionar funcionalidades às classes

class Dwarf {
  name

  constructor(name: string) {
    this.name = name
  }

  greeting() {
    console.log(`Olá, meu nome é ${this.name}`)
  }
}

const frodo = new Dwarf('Frodo')

frodo.greeting()

// this
// Serva para nos referirmos ao objeto em si
// Ou seja, conseguimos acessar as suas propriedades

class Truck {
  km
  kg
  description

  constructor(km: number, kg: number, description: string) {
    this.km = km
    this.kg = kg
    this.description = description
  }

  showKm() {
    console.log(`Este caminhão ${this.description} tem ${this.km} km e ${this.kg} kg`)
  }
}

const volvo = new Truck(10000, 5000, 'Volvo')
const scania = new Truck(20000, 10000, 'Scania')

volvo.showKm()
scania.showKm()

// Getters (get)
// São uma forma de retornar propriedades do objeto
// Podemos modificá-las neste retorno, ou seja, é um método para ler as propriedades

class Planeta {
  name
  km
  kg
  description

  constructor(name: string, km: number, kg: number, description: string) {
    this.name = name
    this.km = km
    this.kg = kg
    this.description = description
  }

  get showKm() {
    return `O planeta ${this.description} tem ${this.km} km e ${this.kg} kg`
  }
}

const jupiter = new Planeta('Jupiter', 1000000, 500000, 'Jupiter')
const marte = new Planeta('Marte', 200000, 100000, 'Marte')

console.log(jupiter.showKm)
console.log(marte.showKm)

// Setters (set)
// são uma forma de modificar propriedades do objeto
// Podemos modificar as propriedades do objeto com o método setter

class Carro {
  name
  km
  description

  constructor(name: string, km: number, description: string) {
    this.name = name
    this.km = km
    this.description = description
  }

  get showKm() {
    return `O carro ${this.description} tem ${this.km} km`
  }

  set changeKm(km: number) {
    this.km = km
  }
}

const onix = new Carro('Onix', 10000, 'Onix')
const fox = new Carro('Fox', 20000, 'Fox')

console.log(onix.showKm)
console.log(fox.showKm)

fox.changeKm = 30000
console.log(fox.showKm)

// Herança de interfaces (implements)
// Podemos herdar de interfaces também com a instruçao implements
// É parecido com extends
// Esta forma é a mais utilizada para criar os métodos que várias classes terão em comum

interface showTitle {
  title: string
}

class BlogPost implements showTitle {
  title

  constructor(title: string) {
    this.title = title
  }

  showTitle() {
    return this.title
  }
}

const myPost = new BlogPost('Meu primeiro post')

console.log(myPost.title)

class TestingInterface implements showTitle {
  title
  constructor(title: string) {
    this.title = title
  }
}

const myPost2 = new TestingInterface('Meu segundo post')

console.log(myPost2.title)

// Override de métodos
// Técnica utilizada para substituir um método de uma classe que herdamos algo
// Basta criar o método com o mesmo nome na classe filha

class Base {
  algumMetodo() {
    console.log('Alguma coisa')
  }
}

class Child extends Base {
  algumMetodo() {
    console.log('Alguma coisa nova')
  }
}

const myObject = new Child()

myObject.algumMetodo()

// Sobre a visibilidade de propriedades e métodos
// Conceito de expor nossos métodos de classes:
// public - visibilidade default, pode ser acessado em qualquer lugar
// protected - acessível apenas à subclasses da classe do método, para acessar uma propriedade precisamos de um método
// private - apenas a classe que declarou o método pode utilizar

// public
// Modo de visibilidade padrão
// Já está implícito, não precisamos declarar
// Basicamente qualquer método ou propriedade de classe pai estará acessível na classe filha

class C {
  public x = 10
}

class D extends C {}

const cInstance = new C()

console.log(cInstance.x)

const dInstance = new D()

console.log(dInstance.x)

// protected
// Pode ser utilizado apenas em subclasses
// Uma propriedade só pode ser acessada por um método

class E {
  protected x = 20
}

class F extends E {
  showX() {
    return this.x
  }
}

const fInstance = new F()

console.log(fInstance.showX())

// private
// Os itens private, propriedades e métodos, só podem ser acessados na classe que os definiu
// E a inda precisam de métodos para serem acessados
// Esta é a maior proteção para propriedades e métodos

class PrivateClass {
  private name = "Private"

  showName() {
    return this.name
  }

  private privateMethod() {
    console.log('Private Method')
  }

  showPrivateMethod() {
    return this.privateMethod()
  }
}

const pObj = new PrivateClass()

//console.log(pObj.name) // Não pode acessar

console.log(pObj.showName())

//console.log(pObj.privateMethod) // Não pode acessar

pObj.showPrivateMethod()

// Static members
// Permite criar propriedades e métodos estáticos em classes
// Isso faz com que o acesso ou a utilização não dependam de objetos
// Podemos utilizá-los a partir da própria classe

class StaticMembers {
  static prop = "Teste static"

  static staticMethod() {
    console.log('Este é um método estático')
  }
}

console.log(StaticMembers.prop)

StaticMembers.staticMethod()

// Generic class
// Para criar classes com tipos genéricos
// As propriedades dos argumentos podem ter os tipos definidos na hora da criação da instância
// Permite maior flexibilidade em um classe

class Item<T, U> {
  first
  second

  constructor(first: T, second: U) {
    this.first = first
    this.second = second
  }

  get showFirst() {
    return this.first
  }
}

const newItem = new Item(1, 'Elefante')

console.log(newItem)
console.log(newItem.showFirst)
console.log(newItem.second)
console.log(typeof newItem.first)
console.log(typeof newItem.second)

// Parameters properties
// Recurso para definir a privacidade, nome e tipo das propriedades no constructor
// É uma forma de resumir a sintaxe das novas classes

class ParametersProperties {
  constructor(
    public name: string,
    private qty: number,
    private price: number
  ) {
    this.name = name
    this.qty = qty
    this.price = price
  }

  get showQty() {
    return this.qty
  }

  get showPrice() {
    return `R$ ${this.price}`
  }
}

const newShirt = new ParametersProperties('Camisa', 5, 19.99)

console.log(newShirt)
console.log(newShirt.name)
//console.log(newShirt.qty) // Não pode ser acessado, pois é private
console.log(newShirt.showQty)
console.log(newShirt.showPrice)

// Class expressions
// É uma forma de criar uma classe anônima
// Podemos também utilizar generics junto deste recurso
// Vamos encapsular a classe em uma variável

const myClass = class <T> {
  constructor(public name: T) { }

  showName() {
    return this.name
  }
}

const myNewPost = new myClass('João da Silva')

console.log(myNewPost.showName())

// Abstract class
// É um recurso para servir como molde de outra classe
// Os métodos, todos os métodos dela, devem ser implementados nas classes que a herdam
// Também não podemos instanciar objetos a partir destas classes

abstract class AbstractClass {
  abstract showName(): string
}

class AbstractChild extends AbstractClass {
  showName(): string {
    return 'Nome da pessoa'
  }
}

//const abstract = new AbstractClass() // Não pode criar uma instância de uma classe abstrata
const newAbstract = new AbstractChild()

console.log(newAbstract.showName())

// Relação entre classes
// Podemos criar um objeto com classe em outra classe
// Quando as classes são idênticas, o Typescript não reclama sobre esta ação
// Porém, precisamos que as duas sejam exatamente iguais

class Dog {
  name!: string
}

class Cat {
  name!: string
}

const smallDog: Dog = new Cat()

smallDog.name = 'Cachorro'

console.log(smallDog) // Cachorro ficou como uma instância de Cat, mas foi tipado como Dog
