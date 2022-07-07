const { Owner } = require('../models');

const ownerData = [
    {
        owner_name: 'Lyra', email: 'lyra@vet.com', phone_num: 8081239876, tech_id: 1,
    },
    {
        owner_name: 'Duke', email: 'duke@vet.com', phone_num: 8081239876, tech_id: 1,
    },
    {
        owner_name: 'Brandi', email: 'brandi@vet.com', phone_num: 8081239876, tech_id: 1,
    },
    {
        owner_name: 'Anastazja', email: 'anastazja@vet.com', phone_num: 8081239876, tech_id: 2,
    },
    {
        owner_name: 'Annika', email: 'Annika@vet.com', phone_num: 8081239876, tech_id: 2,
    },
    {
        owner_name: 'Mahdi', email: 'Mahdi@vet.com', phone_num: 8081239876, tech_id: 3,
    },
    {
        owner_name: 'Lila', email: 'Lila@vet.com', phone_num: 8081239876, tech_id: 3,
    },
    {
        owner_name: 'Ritchie', email: 'Ritchie@vet.com', phone_num: 8081239876, tech_id: 4,
    },
    {
        owner_name: 'Tomi', email: 'tomi@vet.com', phone_num: 8081239876, tech_id: 5, vet_id: 1
    },
    {
        owner_name: 'Lainey', email: 'Lainey@vet.com', phone_num: 8081239876, tech_id: 5, vet_id: 1
    },
];

const seedOwners = () => Owner.bulkCreate(ownerData);

module.exports = seedOwners;