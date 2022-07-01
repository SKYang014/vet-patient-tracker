const seedVets = require('./vet-seeds');
const seedTechs = require('./tech-seeds');
const seedOwners = require('./owner-seeds');
const seedPets = require('./pet-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedVets();
    console.log('\n----- VETS SEEDED -----\n');

    // await seedTechs();
    // console.log('\n----- TECHS SEEDED -----\n');

    // await seedOwners();
    // console.log('\n----- OWNERS SEEDED -----\n');

    // await seedPets();
    // console.log('\n----- PETS SEEDED -----\n');

    process.exit(0);
};

seedAll();