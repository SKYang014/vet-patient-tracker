const router = require('express').Router();
const sequelize = require('../config/connection');
const { Pet } = require('../models');

router.get('/', (req, res) => {
    console.log(req.session);
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

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
      }
    
      res.render('login');
    });

module.exports = router;