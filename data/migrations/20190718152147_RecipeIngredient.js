exports.up = function(knex) {
  return knex.schema
    .createTable('recipeIngredient', table => {
      table.increments();
      table.integer('amount');
      table
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipe')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table
        .integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredient')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table
        .integer('measure_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('measure')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('recipeIngredient');
};
