const router = require('express').Router();
const sequelize = require('../config/connection');
const { Pet } = require('../models');

router.get('/', (req, res) => {
    Pet.findAll({
        attributes: [
            'id',
            'pet_name',
            'species',
            'breed'
        ]
    })
  .then((dbPetData) => {
    const pets = dbPetData.map(pet => pet.get({ plain: true }));
    res.render('homepage', {pets});
})
  .catch(err => {res.status(500).json(err);
});
});

module.exports = router;