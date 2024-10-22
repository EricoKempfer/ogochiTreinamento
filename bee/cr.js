const { log } = require('console');
var input = require('fs').readFileSync('bee/texto.txt', 'utf8');
var lines = input.split('\n');
const pegarValores = (a) => a.split(' ');

let carro = [
  {
    nome: "Telles",
    cabelo: "castanho",
  },
  {
    nome: "Érico",
    cabelo: "preto",
  },
];

for (const pessoa of carro) {
  console.log(`Cor do cabelo do ${pessoa.nome}: ${pessoa.cabelo}`);
  console.log(`Pessoa mais bonita: ${carro[1].nome}`);
  console.log("");

}


