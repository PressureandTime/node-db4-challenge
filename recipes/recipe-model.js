const db = require('../dbConfig');


function find() {
  return db('recipe');
}

function findById(id) {
  return db('recipe').where({ id });
}


function add({ name }) {
  return db('recipe').insert({ name });
}





module.exports = {
  find,
  findById,
  add,
};
