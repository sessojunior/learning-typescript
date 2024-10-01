"use strict";
// Interfaces
const BurgerKing = {
    nome: "Burger King",
    endereco: "Av. Paulista, 1000",
    status: true,
};
console.log(BurgerKing);
function novaLoja({ nome, endereco, status }) {
    console.log(`Nome: ${nome}`);
    console.log(`Endereço: ${endereco}`);
    console.log(`Status: ${status}`);
}
novaLoja({ nome: "Mac Donalds", endereco: "Av. Brasil, 500", status: false });
novaLoja({ nome: "Subway", endereco: "Av. Internacional, 10", status: true });
const novoUsuario = {
    email: "novousuario@gmail.com",
    status: true,
};
console.log(novoUsuario);
function newUser({ nome, email, status }) {
    console.log(`Nome: ${nome ? nome : "(Não informado)"}`);
    console.log(`Email: ${email}`);
    console.log(`Status: ${status}`);
}
newUser({ nome: "Joaquim", email: "joaquim@gmail", status: false });
newUser({ email: "marcio@gmail", status: true });
function mostraPromocao(preco) {
    return `Promoção: R$ ${preco}`;
}
const novoCurso = { id: "1", nome: "Typescript", preco: 500, promocao: mostraPromocao };
console.log(novoCurso);
console.log(novoCurso.promocao(350));
const soma = (valor1, valor2) => {
    return valor1 + valor2;
};
console.log(`Soma: ${soma(10, 20)}`);
let produto1 = {
    id: "1",
    nome: "Mouse",
    descricao: "Mouse gamer",
    valor: 100,
};
console.log(produto1);
produto1.nome = "Teclado"; // Pode alterar qualquer propriedade, menos a id, porque ela é de somente leitura
console.log(produto1);
//produto1.id = 200 // Não é possível modificar essa propriedade, porque ela é de somente leitura
//console.log(produto1)
console.log(produto1.id);
const tecnologias = [
    { id: "1", nome: "React" },
    { id: "2", nome: "Node.js", slug: ["node", "js"] },
    { id: "3", nome: "JavaScript", slug: ["js"] },
    { id: "4", nome: "Python" },
];
console.log(tecnologias);
let frontend = {
    tecnologia: [
        { id: "1", nome: "React", descricao: "Framework React" },
        { id: "2", nome: "Python" },
        { id: "3", nome: "JavaScript", descricao: "Linguagem de programação" },
    ],
};
console.log(frontend);
console.log(frontend.tecnologia);
let jogoOriginal = {
    id: "1",
    nome: "Super Mario Odyssey",
    descricao: "Jogo de ação e aventura",
    plataforma: ["Nintendo", "PS4", "Xbox"],
};
console.log(jogoOriginal);
const jogoExtendido = {
    id: "2",
    nome: "Super Mario - War",
    descricao: "Jogo de ação e aventura extendido",
    plataforma: ["Nintendo", "PS5", "PS4", "Xbox"],
    novoConteudo: ["Novos mapas", "Novo layout", "Novos personagens", "Novas traduções", "Mais 5 horas de jogo"],
};
console.log(jogoExtendido);
