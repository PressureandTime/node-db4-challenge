
exports.up = function(knex) {
  return knex.schema
   .createTable('ingredient', table => {
      table.increments()
      table
        .text('name', 256)
        .notNullable();
    })
  }

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('ingredient')

}
