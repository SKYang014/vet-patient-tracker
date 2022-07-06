const { TechOwner } = require('../models');

const techOwnerData = [
    {
        tech_id: 1,
        owner_id: 10,
    },
    {
        tech_id: 1,
        owner_id: 9,
    },
    {
        tech_id: 2,
        owner_id: 8,
    },
    {
        tech_id: 2,
        owner_id: 7,
    },
    {
        tech_id: 3,
        owner_id: 6,
    },
    {
        tech_id: 3,
        owner_id: 5,
    },
    {
        tech_id: 4,
        owner_id: 4,
    },
    {
        tech_id: 4,
        owner_id: 3,
    },
    {
        tech_id: 5,
        owner_id: 2,
    },
    {
        tech_id: 5,
        owner_id: 1,
    },
    {
        tech_id: 4,
        owner_id: 1,
    },
    {
        tech_id: 5,
        owner_id: 3,
    },
];

const seedTechOwners = () => TechOwner.bulkCreate(techOwnerData);

module.exports = seedTechOwners;