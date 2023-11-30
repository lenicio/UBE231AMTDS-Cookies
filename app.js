let nomes = ["Ana", "Maria", "José", "Pedro", "Elisa"];

// length retorna o tamanho do array
console.log(nomes.length);

// adiciona um elemento no final do array
nomes.push("João");

// adiciona um elemento na primeira posição do array
nomes.unshift("Carlos");

// remove o último elemento do array, e retorna ele.
let nomeRemovidoPop = nomes.pop();
console.log("Nome removido: " + nomeRemovidoPop);

// remove o primeiro elemento do array, e retorna ele.
nomeRemovidoShift = nomes.shift();
console.log("Nome removido: " + nomeRemovidoShift);

// adiciona elemento em uma posição específica
nomes.splice(2, 0, "Marcos");
