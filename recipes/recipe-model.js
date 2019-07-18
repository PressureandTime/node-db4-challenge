const db = require('../dbConfig');


function find() {
  return db('recipe');
}

function findById(id) {
  return db('recipe').where({ id });
}


function add({ name, description, instructions }) {
  return db('recipe').insert({ name, description, instructions });
}


function update(id, changes) {
  return db('recipe')
    .where({ id })
    .update(changes, '*');
}



module.exports = {
  find,
  findById,
  add,
  update,
};
