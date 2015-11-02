var fs = require('fs');
var texte=fs.readFile(process.argv[2], function doneReading(err, data) {
  var lignes = data.toString().split('\n').length - 1
  console.log(lignes)
  });

console.log("hello");
