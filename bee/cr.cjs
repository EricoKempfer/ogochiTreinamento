const { log } = require('console');
var input = require('fs').readFileSync('bee/texto.txt', 'utf8');
var lines = input.split('\n');
const pegarValores = (a) => a.split(' ');
var teste = input.split(' ');

let a = lines.shift()
let v = []
let q = []
let div = a/2
a = 2

for (let i = 0; i < div; i++) {
    v[i] = a
    q[i] = a*a
    console.log(`${v[i]}^2 = ${q[i]}`);
    a = a + 2
}



