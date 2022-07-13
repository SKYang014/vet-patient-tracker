const { Vet } = require('../models');

const vetData = [
    {
        vet_name: 'Mary', email: 'mary@vet.com',
        //  password: '1234'
    },
    {
        vet_name: 'Rocco', email: 'rocco@vet.com',
        //  password: '1234'
    },
    {
        vet_name: 'Ciara', email: 'ciarra@vet.com',
        //  password: '1234'
    },
    {
        vet_name: 'Halima', email: 'halima@vet.com',
        //  password: '1234'
    },
    {
        vet_name: 'Kieren', email: 'Kieren@vet.com',
        //  password: '1234'
    },
];

const seedVets = () => Vet.bulkCreate(vetData);

module.exports = seedVets;
