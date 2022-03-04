var router = require('express').Router();
var connection = require('../database/connection')
var queries = require('../database/queries/carros')

router.get('/lista', (req, res) =>{
  connection.query(queries.listarCarros, (err, result)=>{
    if(err){
      console.log(err);
    }else{
     res.render('./templates/carros', {carros: result})
    }
  })
})

router.get('/editar/:id', (req, res) => {
  connection.query(queries.carros(req.params.id), (err, result)=>{
    if(err){
      console.log(err);
    }else{
      res.render('./templates/editar', {carros: result});
    }
  })
})

router.post('/editar/:id', (req, res)=>{
  var data = {
    id: req.params.id,
    modelo: req.body.modelo,
    marca: req.body.marca,
    cor: req.body.cor,
    ano: req.body.ano,
    placa: req.body.placa,
    preco: req.body.preco
  }

  connection.query(queries.atualizar(data), (err, result)=>{
    if(err){
      console.log(err);
    }else{
      res.redirect('/carros/lista')
    }
  })
})

router.get('/excluir/:id', (req, res)=>{
  connection.query(queries.excluir(req.params.id), (err, result)=>{
    if(err){
      console.log(err);
    }else{
      res.redirect('/carros/lista');
    }
  })
})

router.get('/inserir', (req, res)=>{
  res.render('templates/inserir')
})

router.post('/inserir', (req, res)=>{
  var data = {
    modelo: req.body.modelo,
    marca: req.body.marca,
    cor: req.body.cor,
    ano: req.body.ano,
    placa: req.body.placa,
    preco: req.body.preco
  }
  connection.query(queries.inserir(data), (err, result)=>{
    if(err){
      console.log(err);
    }else{
      res.redirect('/carros/lista')
    }
  })
})

module.exports = router;