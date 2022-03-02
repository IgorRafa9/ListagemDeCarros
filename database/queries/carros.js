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

  },

  excluir: (id) => {
    return `DELETE FROM carro WHERE carro.id_carro = ${id}`
  },

  inserir: (data) => {
    return `INSERT INTO carro (id_carro, modelo, marca, cor, ano, placa, preco) VALUES (NULL,'${data.modelo}', '${data.marca}', '${data.cor}', ${data.ano}, '${data.placa}', ${data.preco})`
  }
};

module.exports = carros;
