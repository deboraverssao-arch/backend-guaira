//Lista ordenada de valores

const frutas = ["Maçã", "Banana", "Uva", "Manga"];
//indica:         0        1        2       3

//console.log(frutas);
console.log(frutas[0]);

frutas[0] = "Abacaxi";
console.log(frutas);

frutas[2] = "Morango";
frutas[3] = "Melancia";
console.log(frutas);
console.log(frutas.length) //Quantidade de elementos
frutas.push("Figo") //Adiciona um elemento sempre no final

const removido = frutas.pop(); //Remove o último elemento
console.log(frutas);
console.log(removido);
frutas.shift();// remove o primeiro elemento
console.log(frutas);

console.log(frutas.indexOf("Morango")); //Essa fruta está no meu array
console.log(frutas.indexOf('Pêra')); //Essa fruta está no meu array