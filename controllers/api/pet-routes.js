const router = require('express').Router();
const { Pet } = require('../../models');

// The `/api/pets` endpoint

// get all pets
router.get('/', (req, res) => {

  Pet.findAll({

  })
  .then((response) => res.json(response))
  .catch((err) => res.status(500).json(err))
});

// get one pet
router.get('/:id', (req, res) => {

  Pet.findByPk(req.params.id, {

  }).then((response) => res.json(response))
  .catch((err) => res.status(500).json(err))
});

module.exports = router;