var express = require('express');
var app = express();
var path = require('path')
var expressHbs = require('express-handlebars');
var PORT = process.env.PORT || 4500;

//Configuração do Handlebars
app.engine('hbs', expressHbs.engine({defaultLayout: "main", extname: 'hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'))

app.listen(PORT, () => {
  console.log(`Server aberto na porta ${PORT}`)
})