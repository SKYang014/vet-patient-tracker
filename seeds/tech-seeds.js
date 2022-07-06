const { Tech } = require('../models');

const techData = [
    {
        tech_name: 'Bob', email: 'bob@vet.com', password: '1234', vet_id: 5,
    },
    {
        tech_name: 'Kim', email: 'kim@vet.com', password: '1234', vet_id: 4,
    },
    {
        tech_name: 'Joe', email: 'joe@vet.com', password: '1234', vet_id: 3,
    },
    {
        tech_name: 'Alice', email: 'alice@vet.com', password: '1234', vet_id: 2,
    },
    {
        tech_name: 'Justine', email: 'justine@vet.com', password: '1234', vet_id: 1,
    },
];


const seedTechs = async() => {
    for (let i = 0; i<techData.length; i++){
        await Tech.create(techData[i]);
    }
}


module.exports = seedTechs;