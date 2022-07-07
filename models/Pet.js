// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// class Pet extends Model { }

// Pet.init(
//     {
//         id: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             primaryKey: true,
//             autoIncrement: true
//         },
//         pet_name: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//         species: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         breed: {
//             type: DataTypes.STRING,
//             allowNull: true,
//         },
//         rabies_vaccination: {
//             type: DataTypes.BOOLEAN,
//             allowNull: false
//         },
//         owner_id: {
//             type: DataTypes.INTEGER,
//             references: {
//                 model: 'owner',
//                 key: 'id'
//             }
//         },
//     },
//     {
//         sequelize,
//         timestamps: false,
//         freezeTableName: true,
//         underscored: true,
//         modelName: 'pet',
//     }
// );

// module.exports = Pet;