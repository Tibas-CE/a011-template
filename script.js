// AULA OBJETOS

// criação do objeto estudante
const estudante = {
    nome: "Tibério",
    sobrenome: "Ferreira",
    matricula: 201402,
    notasSemestre: [7, 8, 9.5]
};

console.log("Objeto estudante", estudante);

// adicionando propriedades ao objeto estudante
estudante.modulo = "HTML Semântico";

console.log("Objeto estudante com módulo", estudante);

// imprimindo informações do objeto estudante
console.log("Nome da pessoa estudante:", estudante.nome);
console.log("Segunda nota do semestre:", estudante.notasSemestre[1]);
console.log("Módulo atual:", estudante.modulo);

// fazendo copia do objeto estudante

const copiaEstudante = {...estudante};
console.log("Cópia do objeto estudante", copiaEstudante);

// alterando o valor da propriedade nome
copiaEstudante.nome = "Astrodev";
console.log("Cópia com nome alterado", copiaEstudante);

// adicionando a nota 9 às notas do semestre
//copiaEstudante.notasSemestre.push(9, 10);
copiaEstudante.notasSemestre = [...copiaEstudante.notasSemestre, 9]
console.log("Cópia com nova nota adicionada", copiaEstudante);

// alterando o valor da propriedade módulo
copiaEstudante.modulo = "Flexbox e Grid";
console.log("Cópia com módulo alterado", copiaEstudante);

// criação do array estudantesLabenu
const estudantesLabenu = [];
estudantesLabenu.push(estudante);
estudantesLabenu.push(copiaEstudante);

console.log("Array de estudantes labenu", estudantesLabenu);

// EXERCICIO DE FIXAÇÃO

//parte 1
const carrinho = {
    nome: "Tibério Ferreira",
    pagamento: "debito",
    endereco: "Rua da lamentação, 149",
};

console.log(carrinho);

//parte 2
carrinho.compras = [
    {nome: "Arroz", preco: 4.5, quantidade: 2},
    {nome: "Feijão", preco: 6, quantidade: 1},
    {nome: "Carne", preco: 10, quantidade: 1}
];

//parte 3
console.log("Quantidade de compras no carrinho:", carrinho.compras.length);

const carrinhoPresente = {...carrinho};

carrinhoPresente.nome = "Davi";
carrinhoPresente.pagamento = "Cartão presente";

console.log("Presente para:", carrinhoPresente.nome, carrinhoPresente);

//como somar so uma propriedade de objetos dentro de um array
console.log(carrinho.compras[0].quantidade+carrinho.compras[1].quantidade+carrinho.compras[2].quantidade);