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

module.exports = router;