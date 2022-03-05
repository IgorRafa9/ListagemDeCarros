<h1>ListagemDeCarros</h1>

<p>Terminado o mini projeto de listagem de carros. Usando NodeJS, express, handlebars, Mysql e Bootstrap.

  
1º -> Criando a conexão com o banco de dados (MySQL) sem o sequelize, criando assim o banco de dados dentro do próprio MySQL e puxando ele para o sistema. Após isso foram criados as queries mostrando o CRUD (Create Read Update Delete). Depois foi apenas testar a conexão.

  
2º -> Criando as rotas. Primeiro a rota index que guardará a pagina inicial (index.hbs), fazendo a requisição da rota através do get '/' e depois a exportando para o app.js. Segundo criando a rota carros.js, fazendo a requisição das rotas de CRUD e inserindo as queries as respectivas requisições e as exportando para o app.js.
  

3º -> Após isso criado as views separando-as em templates (carros.hbs, editar.hbs, index.hbs, inserir.hbs), partials (header.hbs), error.hbs e o layout main.hbs.
  

4º -> App.js criado, inserido o express, path, express-handlebars, body-parser e a inserção da PORT 4500
      Configuração do Handlebars: definindo o engine mostrando que será o handlebars e definindo o layout padrão main e extname hbs (handlebars)
      Middlewares: permitindo as rotas (routes)
      URL's: definindo as url's para serem pesquisadas juntamente com as rotas criadas
  E por último desfindindo e testando as portas de ligação


</p>
