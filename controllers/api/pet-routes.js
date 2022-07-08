const router = require('express').Router();
const { Pet, Vet, Tech, Owner, TechOwner } = require('../../models');

// The `/api/pets` endpoint

// get all pets
router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Pet.findAll({
    // attributes: { exclude: ['password'] },
    include: [
      {
        model: Owner,
        attributes: ['id', 'owner_name'],
        include: {
          model: Tech,
          attributes: ['tech_name'],
          // include: {
          //   model: Tech,
          //   attributes: ['tech_name']
          // },
          include: {
            model: Vet,
            attributes: ['vet_name']
          }
        }
      }
    ]
  })
    .then(dbPetData => res.json(dbPetData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get one pet
router.get('/:id', (req, res) => {

  Pet.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Owner,
        attributes: ['id', 'owner_name'],
        include: {
          model: Tech,
          attributes: ['tech_name'],
          // include: {
          //   model: Tech,
          //   attributes: ['tech_name']
          // },
          include: {
            model: Vet,
            attributes: ['vet_name']
          }
        }
      }
    ]
  })
    .then(dbPetData => res.json(dbPetData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  // create a new category
  Pet.create({
    pet_name: req.body.pet_name,
    species: req.body.email,
    breed: req.body.password,
    rabies_vacciantion: req.body.rabies_vacciantion,
    owner_id: req.body.owner_id
  })
    .then(dbVetData => res.json(dbVetData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Pet.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(dbPetData => {
      if (!dbPetData[0]) {
        res.status(404).json({ message: 'No Pet found with this id' });
        return;
      }
      res.json(dbPetData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Pet.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbPetData => {
      if (!dbPetData) {
        res.status(404).json({ message: 'No Pet found with this id' });
        return;
      }
      res.json(dbPetData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
module.exports = router;