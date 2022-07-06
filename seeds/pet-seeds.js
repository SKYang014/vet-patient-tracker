const { Pet } = require('../models');

const petData = [
    {
        pet_name: 'Max', species: 'cat', breed: 'NULL'
    },
    {
        pet_name: 'Toby', species: 'dog', breed: 'husky'
    }
];

const seedPets = () => Pet.bulkCreate(petData);

module.exports = seedPets;
