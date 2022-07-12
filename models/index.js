// import models
const Vet = require('./Vet');
const Tech = require('./Tech');
const Owner = require('./Owner');
const Pet = require('./Pet');
const TechOwner = require('./TechOwner');
const Comment = require('./Comment');

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
    // as: 'through',
    foreignKey: 'tech_id'
});
// Owners belongToMany Techs (through TechOwner)
Owner.belongsToMany(Tech, {
    through: TechOwner,
    // as: 'through_again',
    foreignKey: 'owner_id'
});
// pet belongsTo owner
Pet.belongsTo(Owner, {
    foreignKey: 'owner_id',
});
// Owner have many Pets
Owner.hasMany(Pet, {
    foreignKey: 'owner_id'
});

Tech.hasMany(Comment, {
    foreignKey: 'tech_id'
});

Pet.hasMany(Comment, {
    foreignKey: 'pet_id'
});

module.exports = { Vet, Tech, Owner, TechOwner, Pet, Comment } //Comment