const carros = {
  listarCarros: 'SELECT * FROM carro',

  carros: (id) => {
    return `SELECT * FROM carro WHERE carro.id_carro = ${id}`
  },

  atualizar: (data) => {
    return `UPDATE carro SET marca = '${data.marca}',
    modelo = '${data.modelo}',
    cor = '${data.cor}',
    ano = ${data.ano},
    placa = '${data.placa}',
    preco = ${data.preco}
    WHERE carro.id_carro = ${data.id}`

  }
};

/*const moto = {
  listarMotos: 'SELECT * FROM moto'
};*/
module.exports = carros;
