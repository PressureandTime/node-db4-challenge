
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe').insert([
        {
          name: 'Peach Cobbler',
          description: 'totally awesome and delicious',
          instructions: 'shake not stir',
        },
        {
          name: 'Salad with Pickles',
          description: 'no, this is much more awesome',
          instructions: 'shake and bake',
        },
        {
          name: 'Heathers Fried Chicken',
          description: 'you are dreaming',
          instructions: 'shake and shake',
        },
        {
          name: 'Watermelon Avocado Salsa',
          description: 'most delicious thing',
          instructions: 'bake and bake',
        },
      ]);
    });
};
