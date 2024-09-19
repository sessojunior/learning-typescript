"use strict";
// Importação de arquivos
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const greet_1 = __importDefault(require("./greet"));
(0, greet_1.default)(); // Olá, esta função foi exportada
// Importação de variáveis
const variable_1 = require("./variable"); // Variável de importação
console.log(variable_1.x);
// Múltiplas importações
const multiple_1 = require("./multiple");
console.log(multiple_1.a, multiple_1.b, multiple_1.c); // 1 Olá pessoal false
// Alias (as)
// Ou seja, mudar o nome do que foi importado
const alias_1 = require("./alias");
console.log(alias_1.someName); // Esta variável mudou de nome
// Importar tudo (*)
// Importar tudo que está em um arquivo com apenas o símbolo *
// Os dados virão em um objeto
// É necessário criar um alias (as)
const myNumbers = __importStar(require("./numbers"));
console.log(myNumbers); // { n1: 1, n2: 2, n3: 3, n4: 4, n5: 5 }
function showHumanDetails({ name, age }) {
    console.log(name, age);
}
showHumanDetails({ name: "João", age: 30 }); // João 30
