const { log } = require('console');
var input = require('fs').readFileSync('bee/texto.txt', 'utf8');
var lines = input.split('\n');
const pegarValores = (a) => a.split(' ');
var teste = input.split(' ');

let a = parseInt(lines.shift())

for (let i = 1; i < 11; i++) {
    console.log(`${i} x 140 = ${i*a}`);
}



