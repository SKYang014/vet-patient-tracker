const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class TechOwner extends Model { }

TechOwner.init(
    {
        // define columns
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        //  we added a user_id field that would hold the primary key 
        //value of a user and post
        tech_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'tech',
                key: 'id'
            }
        },
        owner_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'owner',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'tech_owner',
    }
);

module.exports = TechOwner;
