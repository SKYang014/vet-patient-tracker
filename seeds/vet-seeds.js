const { Vet } = require('../models');

const vetData = [
    {
        vet_name: 'Bob', email: 'bob@vet.com',
        //  password: '1234'
    },
    {
        vet_name: 'Kim', email: 'kim@vet.com',
        //  password: '1234'
    },
    {
        vet_name: 'Joe', email: 'joe@vet.com',
        //  password: '1234'
    },
    {
        vet_name: 'Alice', email: 'alice@vet.com',
        //  password: '1234'
    },
    {
        vet_name: 'Justine', email: 'justine@vet.com',
        //  password: '1234'
    },
];

const seedVets = () => Vet.bulkCreate(vetData);

module.exports = seedVets;
