// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Tech model (table) by extending off Sequelize's Model class
class Tech extends Model { }

// set up fields and rules for Tech model
Tech.init(
    {
        // define columns
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        tech_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // define an email column
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            // there cannot be any duplicate email values in this table
            unique: true,
            // if allowNull is set to false, we can run our data through validators before creating the table data
            validate: {
                isEmail: true
            }
        },
        // define a password column
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                // this means the password must be at least four characters long
                len: [4]
            }
        },
        vet_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'vet',
                key: 'id'
            }
        }
    },
    {
        hooks: {
            async beforeCreate(newTechData) {
                newTechData.password = await bcrypt.hash(newTechData.password, 10);
                return newTechData;
            },
            // set up beforeUpdate lifecycle "hook" functionality
            async beforeUpdate(updatedTechData) {
                updatedTechData.password = await bcrypt.hash(updatedTechData.password, 10);
                return updatedTechData;
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'tech',
    }
);

module.exports = Tech;
