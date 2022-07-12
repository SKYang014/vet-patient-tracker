//The comment table will hold the text of the comment, the id of the 
//user who created it, and the id of the post it belongs to. However, 
//these fields will need to be defined on the Sequelize model.
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model { }

Comment.init(
    {
        // columns will go here
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        comment_text: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                // this means the password must be at least one characters long
                len: [1]
            }
        }
        ,
        tech_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'tech',
                key: 'id'
            }
        },
        pet_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'pet',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment'
    }
);

module.exports = Comment;