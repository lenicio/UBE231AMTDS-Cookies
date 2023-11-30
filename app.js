let nomes = ["Ana", "Maria", "José", "Pedro", "Elisa"];

// length retorna o tamanho do array
// console.log(nomes.length);

// adiciona um elemento no final do array
nomes.push("João");

// adiciona um elemento na primeira posição do array
nomes.unshift("Carlos");

// remove o último elemento do array, e retorna ele.
let nomeRemovidoPop = nomes.pop();
// console.log("Nome removido: " + nomeRemovidoPop);

// remove o primeiro elemento do array, e retorna ele.
nomeRemovidoShift = nomes.shift();
// console.log("Nome removido: " + nomeRemovidoShift);

// adiciona elemento em uma posição específica
nomes.splice(2, 0, "Marcos");

let cadastro = [
  { nome: "Ana", idade: 23, cidade: "São Paulo" },
  { nome: "Maria", idade: 28, cidade: "Rio de Janeiro" },
  { nome: "José", idade: 31, cidade: "Belo Horizonte" },
  { nome: "Pedro", idade: 25, cidade: "Curitiba" },
  { nome: "Elisa", idade: 27, cidade: "Porto Alegre" },
  { nome: "Lucas", idade: 30, cidade: "Brasília" },
  { nome: "Carla", idade: 29, cidade: "Salvador" },
  { nome: "Fernando", idade: 33, cidade: "Recife" },
  { nome: "Mariana", idade: 26, cidade: "Fortaleza" },
  { nome: "Rafael", idade: 22, cidade: "Manaus" },
  { nome: "Aline", idade: 24, cidade: "Porto Velho" },
  { nome: "Gustavo", idade: 32, cidade: "Cuiabá" },
  { nome: "Juliana", idade: 30, cidade: "Goiânia" },
  { nome: "Diego", idade: 27, cidade: "Natal" },
  { nome: "Patrícia", idade: 29, cidade: "João Pessoa" },
  { nome: "Marcelo", idade: 35, cidade: "Florianópolis" },
  { nome: "Camila", idade: 28, cidade: "Porto Alegre" },
  { nome: "Thiago", idade: 26, cidade: "Curitiba" },
  { nome: "Isabela", idade: 24, cidade: "Belo Horizonte" },
  { nome: "Rodrigo", idade: 30, cidade: "São Paulo" },
];
