import './App.css'

// Importando componentes
import FirstComponent from './components/FirstComponent'
import SecondComponent from './components/SecondComponent'
import ThirdComponent from './components/ThirdComponent'
import FourthComponent from './components/FourthComponent'
import State from './components/State'

// Precisa importar o Category para poder acessar o enum
import Enum, { Category } from './components/Enum'

// Importando componentes
import Types from './components/Types'
import ContextApi from './components/ContextApi'

export default function App() {
  
  // Variáveis em componentes

  const name: string = "João"
  const age: number = 30
  const isWorking: boolean = true

  // Funções em componentes

  const sayHello = (name: string): string => {
    return `Olá ${name}`
  }

  function calcSum(x: number, y: number): number {
    return x + y
  }

  // Destructuring de objetos
  const user1 = {
    name: "João"
  }

  const user2 = {
    name: "Maria",
    age: 15
  }

  return (
    <>
      <h1>React com Typescript</h1>

      <h2>Variáveis em components</h2>
      <p>Nome: {name}</p>
      <p>Idade: {age}</p>
      {isWorking && <p>Está trabalhando</p>}

      <h2>Funções em components</h2>
      {sayHello("João")}
      <p>Calcular 10 + 20 = {calcSum(10, 20)}</p>

      <h2>Criação e importação de componentes</h2>
      <p>Utilização do code snippets <em>tsrfc</em> para criar um componente utilizando a extensão <em>Typescript React code snippets</em>.</p>
      <FirstComponent />

      <h2>Destructuring nas props</h2>
      <p>Permite separar um array ou objeto em várias variáveis.</p>
      <p>Essa técnica é utilizada nas props para não precisar ficar repetindo o nome do objeto.</p>
      <SecondComponent name="João" />
      <ThirdComponent user={user1} />
      <ThirdComponent user={user2} />
      <FourthComponent id={1} title="title" description="description" tags={["tag1", "tag2"]} />

      <h2>Hook useState</h2>
      <p>O useState é um hook para consultar e alterar o estado de algum dado.</p>
      <p>Atrelamos uma função set a um evento, como mudança de dado em input e alteramos o valor da variável base.</p>
      <State />

      <h2>Enum</h2>
      <p>É uma forma de formatar um objeto com chaves e valores.</p>
      <p>Podemos utilizar como props.</p>
      <p>Passando a chave pela prop, imprimimos o valor dela no componente.</p>
      <Enum category={Category.HTML} />
      <Enum category={Category.TS} />

      <h2>Types</h2>
      <p>Além das interfaces, podemos criar estruturas de tipos com o type.</p>
      <p>Isso nos permite criar dados com tipos de dados fixos.</p>
      <p>Ou até customizados, como quando utilizamos o operador |</p>
      <Types />

      <h2>Context API</h2>
      <p>É uma forma de transmitir dados entre componentes no React.</p>
      <p>Com ele podemos determinar quais componentes recebem estes dados</p>
      <ContextApi />
    </>
  )
}
