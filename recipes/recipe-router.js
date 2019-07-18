const express = require('express');

const Recipes = require('./recipe-model');

const router = express.Router();

const db = require('../dbConfig');


router.get('/', async (req, res) => {
  try {
    const recipes = await Recipes.find();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get recipes' });
  }
});


router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const recipe = await Recipes.findById(id);

    if (recipe) {
      res.json(recipe);
    } else {
      res.status(404).json({ message: 'Could not find recipe with given id.' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to get recipe' });
  }
});


router.post('/', async (req, res) => {
  const recipeData = req.body;

  try {
    const recipe = await Recipes.add(recipeData);
    res.status(201).json(recipe);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create new recipe' });
  }
});


module.exports = router;
