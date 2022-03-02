var express = require('express');
var app = express();
var path = require('path')
var expressHbs = require('express-handlebars');
var PORT = process.env.PORT || 4500;
var bodyParser = require('body-parser')

//Configuração do Handlebars
app.engine('hbs', expressHbs.engine({defaultLayout: "main", extname: 'hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')));

//MIDDLEWARES
app.use(bodyParser.json());
app.use(express.urlencoded({extended: false}))

//Encurtadores
var carrosRouter = require('./routes/carros');
var motosRouter = require('./routes/motos');
var indexRouter = require('./routes/index');
app.use('/carros', carrosRouter);
app.use('/motos', motosRouter);
app.use('/index', indexRouter);

app.listen(PORT, () => {
  console.log(`Server aberto na porta ${PORT}`)
})