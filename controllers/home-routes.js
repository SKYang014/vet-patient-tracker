const router = require('express').Router();
const sequelize = require('../config/connection');
const { Pet, Owner, Comment } = require('../models');
const moment = require('moment')

const formattedTime = inputTime => {
  return moment(inputTime).format("[Today is] dddd");
}

router.get('/pets', (req, res) => {
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
      res.render('homepage', { pets, loggedIn: req.session.loggedIn });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get('/', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/pets');
    return;
  }

  res.render('login');
});

router.get('/pet/:id', (req, res) => {
  Pet.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'pet_name',
      'species',
      'breed',
      'rabies_vaccination'],
    include: [
      {
        model: Owner,
        attributes: ['id', 'owner_name', 'email', 'phone_num'],
      }
      ,
      {
        model: Comment,
        attributes: ['comment_text', 'created_at']
      }
    ]
  })
    .then(dbPetData => {
      if (!dbPetData) {
        res.status(404).json({ message: 'No pet found with this id' });
        return;
      }

      // serialize the data
      const pet = dbPetData.get({ plain: true });
      pet.comments = pet.comments.map(comment => {
        const updatedComment = { ...comment, created_at: formattedTime(comment.created_at) }
        return updatedComment
      })

      // pass data to template
      res.render('single-pet', { pet, loggedIn: req.session.loggedIn });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;