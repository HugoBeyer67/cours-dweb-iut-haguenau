var fs = require('fs');
var path= require('path');
var texte=fs.readdir(process.argv[2],function callback (err, list) {
  list.forEach(function(file){
    if(path.extname(file)==="."+process.argv[3]){
      console.log(file);
    }

  })
 }
);
