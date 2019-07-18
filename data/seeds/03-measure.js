exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('measure')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('measure').insert([
        { name: 'kilograms' },
        { name: 'tablespoon' },
        { name: 'cup' },
      ]);
    });
};
