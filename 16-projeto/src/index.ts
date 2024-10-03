const subtrair = (num1: number, num2: number): number => num1 - num2
const multiplicar = (num1: number, num2: number): number => num1 * num2
const dividir = (num1: number, num2: number): number | string => {
	if (num2 === 0) return "Impossível dividir por zero"
	return num1 / num2
}
const somar = (num1: number, num2: number): number => num1 + num2

const btnSomar = document.getElementById("btnSomar") as HTMLButtonElement
const btnSubtrair = document.getElementById("btnSubtrair") as HTMLButtonElement
const btnMultiplicar = document.getElementById("btnMultiplicar") as HTMLButtonElement
const btnDividir = document.getElementById("btnDividir") as HTMLButtonElement

const inputNum1 = document.getElementById("inputNum1") as HTMLInputElement
const inputNum2 = document.getElementById("inputNum2") as HTMLInputElement

const spanNum1 = document.getElementById("spanNum1") as HTMLSpanElement
const spanNum2 = document.getElementById("spanNum2") as HTMLSpanElement
const spanOperacao = document.getElementById("spanOperacao") as HTMLSpanElement
const spanResultado = document.getElementById("spanResultado") as HTMLSpanElement

btnSomar.addEventListener("click", () => {
	spanOperacao.innerText = "soma"
	spanNum1.innerText = inputNum1.value
	spanNum2.innerText = inputNum2.value
	spanResultado.innerText = somar(Number(inputNum1.value), Number(inputNum2.value)).toString()
})
btnSubtrair.addEventListener("click", () => {
	spanOperacao.innerText = "subtração"
	spanNum1.innerText = inputNum1.value
	spanNum2.innerText = inputNum2.value
	spanResultado.innerText = subtrair(Number(inputNum1.value), Number(inputNum2.value)).toString()
})
btnMultiplicar.addEventListener("click", () => {
	spanOperacao.innerText = "multiplicação"
	spanNum1.innerText = inputNum1.value
	spanNum2.innerText = inputNum2.value
	spanResultado.innerText = multiplicar(Number(inputNum1.value), Number(inputNum2.value)).toString()
})
btnDividir.addEventListener("click", () => {
	spanOperacao.innerText = "divisão"
	spanNum1.innerText = inputNum1.value
	spanNum2.innerText = inputNum2.value
	spanResultado.innerText = dividir(Number(inputNum1.value), Number(inputNum2.value)).toString()
})
