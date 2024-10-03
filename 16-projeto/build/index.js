"use strict";
const subtrair = (num1, num2) => num1 - num2;
const multiplicar = (num1, num2) => num1 * num2;
const dividir = (num1, num2) => {
    if (num2 === 0)
        return "Impossível dividir por zero";
    return num1 / num2;
};
const somar = (num1, num2) => num1 + num2;
const btnSomar = document.getElementById("btnSomar");
const btnSubtrair = document.getElementById("btnSubtrair");
const btnMultiplicar = document.getElementById("btnMultiplicar");
const btnDividir = document.getElementById("btnDividir");
const inputNum1 = document.getElementById("inputNum1");
const inputNum2 = document.getElementById("inputNum2");
const spanNum1 = document.getElementById("spanNum1");
const spanNum2 = document.getElementById("spanNum2");
const spanOperacao = document.getElementById("spanOperacao");
const spanResultado = document.getElementById("spanResultado");
btnSomar.addEventListener("click", () => {
    spanOperacao.innerText = "soma";
    spanNum1.innerText = inputNum1.value;
    spanNum2.innerText = inputNum2.value;
    spanResultado.innerText = somar(Number(inputNum1.value), Number(inputNum2.value)).toString();
});
btnSubtrair.addEventListener("click", () => {
    spanOperacao.innerText = "subtração";
    spanNum1.innerText = inputNum1.value;
    spanNum2.innerText = inputNum2.value;
    spanResultado.innerText = subtrair(Number(inputNum1.value), Number(inputNum2.value)).toString();
});
btnMultiplicar.addEventListener("click", () => {
    spanOperacao.innerText = "multiplicação";
    spanNum1.innerText = inputNum1.value;
    spanNum2.innerText = inputNum2.value;
    spanResultado.innerText = multiplicar(Number(inputNum1.value), Number(inputNum2.value)).toString();
});
btnDividir.addEventListener("click", () => {
    spanOperacao.innerText = "divisão";
    spanNum1.innerText = inputNum1.value;
    spanNum2.innerText = inputNum2.value;
    spanResultado.innerText = dividir(Number(inputNum1.value), Number(inputNum2.value)).toString();
});
