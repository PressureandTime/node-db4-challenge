exports.up = function(knex) {
  return knex.schema.createTable('recipe', table => {
    table.increments();
    table.text('name', 128).notNullable();
    table.text('description', 128).notNullable();
    table.text('instructions', 128).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('recipe');
};
