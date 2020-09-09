let faker = require('faker');
let cpf = require('cpf');
let states = require('./states.js');


module.exports = () => {
  const data = {
    clients: [],
    states,
  }

  for (let i = 0; i < 100; i++) {
    const randomUF = Math.floor(Math.random() * states.length);
    const randomNumber = Math.floor(Math.random() * 100000);

    data.clients.push({
      id: i + 1,
      nome: faker.name.findName(),
      cpf: cpf.generate(),
      cep: faker.address.zipCode("#####-###"),
      logradouro: faker.address.city(0) + ', ' + randomNumber,
      bairro: faker.address.streetSuffix(),
      localidade: faker.address.city(),
      uf: states[ randomUF ].sigla,
    });
  }

  return data;
}
