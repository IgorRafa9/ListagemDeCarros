var router = require('express').Router();
var connection = require('../database/connection')
var queries = require('../database/queries/motos')

router.get('/lista', (req, res) =>{
  connection.query(queries.listarMotos, (err, result)=>{
    if(err){
      console.log(err);
    }else{
     res.render('./templates/motos', {motos: result})
    }
  })
})

module.exports = router;