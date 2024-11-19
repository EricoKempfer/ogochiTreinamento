const { log } = require('console');
var input = require('fs').readFileSync('bee/texto.txt', 'utf8');
var lines = input.split('\n');
const pegarValores = (a) => a.split(' ');
var teste = input.split(' ');

let somaIdades = 0;
let contador = 0;

while (true) {
    let idade = parseInt(lines.shift());

    // Se a idade for negativa, encerra o loop
    if (idade < 0) {
        break;
    }

    // Soma a idade válida e incrementa o contador
    somaIdades += idade;
    contador++;
}

// Calcula a média, se houver pelo menos uma idade válida
if (contador > 0) {
    let media = somaIdades / contador;
    // Imprime a média com 2 casas decimais
    console.log(media.toFixed(2));
}






