const { log } = require('console');
var input = require('fs').readFileSync('bee/texto.txt', 'utf8');
var lines = input.split('\n');
const pegarValores = (a) => a.split(' ');
var teste = input.split(' ');

v = []
let par = 0
let impar = 0
let pos = 0
let neg = 0
for (let i = 0; i < 5; i++) {
    v[i]= parseInt(lines.shift())
    if(v[i]%2==0){
        par = par + 1
    } else {
        impar = impar + 1
       }
    if(v[i]>0){
        pos = pos + 1
    } 
    if(v[i]<0){
        neg = neg + 1
    }
}
console.log(`${par} valor(es) par(es)`);
console.log(`${impar} valor(es) impar(es)`);
console.log(`${pos} valor(es) positivo(s)`);
console.log(`${neg} valor(es) negativo(s)`);




