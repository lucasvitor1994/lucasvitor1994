const fs = require ("fs")

const csv2json = require ('/Users/lucas/Desktop/aula/insight/src/csv2json')

const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : '192.168.30.78',
  port     : 3306,
  user     : 'root',
  password : 'root01',
  database : 'storages',
  keepAlive: 240000
});


connection.connect(function(err, res, row){
  if(err) return console.log(err);
  console.log('conectado Puffin');
})

fs.readFile('public/documents/mapping-basicrecord.txt', 'utf-8', function (err, data){
    // console.log(data)
    const TXT2 = data.replace(/;/g, '') 
  
    const text = TXT2.split(/\r?\n/)
    const linhas =(text.length)
    console.log(linhas)
   
    
    var insert;
for (insert = 0; insert < 1000; insert++) {
    
    const ROWS = text[insert]
    console.log(linhas + "linhas" + insert)

    connection.query(`INSERT INTO primeiro(diretorio) VALUES ('${ROWS}')`, function (err, rows){
        console.log(err)
        console.log(rows)
   })

}


})
