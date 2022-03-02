var mysql = require('mysql2');
var cnx = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Igj(8899)',
  database: 'conection_motors',
  multipleStatements: true
});

cnx.connect(err => {
  if(!err){
    console.log("Conexão com o Database estabelecida com sucesso!")
  }else{
    console.log("Erro ao se conectar! "+err)
  }
});

module.exports = cnx;
//Obs.: Sempure usar o mysql2