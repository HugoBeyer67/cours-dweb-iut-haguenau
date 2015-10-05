var fs = require('fs');
var texte=fs.readFileSync(process.argv[2]);
var lignes = texte.toString().split('\n').length - 1
console.log(lignes)
