// import models
const Vet = require('./Vet');
const Tech = require('./Tech');
const Owner = require('./Owner');
//const Pet = require('./Pet');
const TechOwner = require('./TechOwner');

// Techs belongsTo Vets
Tech.belongsTo(Vet, {
    foreignKey: 'vet_id',
});
// Vets have many Techs
Vet.hasMany(Tech, {
    foreignKey: 'vet_id'
});
// Techs belongToMany Owners (through TechOwner)
Tech.belongsToMany(Owner, {
    through: TechOwner,
    foreignKey: 'tech_id'
});
// Owners belongToMany Techs (through TechOwner)
Owner.belongsToMany(Tech, {
    through: TechOwner,
    foreignKey: 'owner_id'
});
// // pet belongsTo owner
// Pet.belongsTo(Owner, {
//     foreignKey: 'owner_id',
// });
// // Owner have many Pets
// Owner.hasMany(Pet, {
//     foreignKey: 'owner_id'
// });

// module.exports = (Vet, Tech, Owner, Pet)
module.exports = { Vet, Tech, Owner, TechOwner }