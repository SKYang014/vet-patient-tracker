const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

// const bcrypt = require('bcrypt');


class Vet extends Model {
    // checkPassword(loginPw) {
    //     return bcrypt.compareSync(loginPw, this.password);
    // }
}


Vet.init(
    {
        // define an id column
        id: {
            // use the special Sequelize DataTypes object provide what type of data it is
            type: DataTypes.INTEGER,
            // this is the equivalent of SQL's `NOT NULL` option
            allowNull: false,
            // instruct that this is the Primary Key
            primaryKey: true,
            // turn on auto increment
            autoIncrement: true
        },
        // define a Vet name column
        vet_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // define an email column
        // email: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        //     // there cannot be any duplicate email values in this table
        //     unique: true,
        //     // if allowNull is set to false, we can run our data through validators before creating the table data
        //     validate: {
        //         isEmail: true
        //     }
        // },
    },
    //     // define a password column
    //     password: {
    //         type: DataTypes.STRING,
    //         allowNull: false,
    //         validate: {
    //             // this means the password must be at least four characters long
    //             len: [4]
    //         }
    //     }
    // },
    {
        //     hooks: {
        //         async beforeCreate(newVetData) {
        //             newVetData.password = await bcrypt.hash(newVetData.password, 10);
        //             return newVetData;
        //         },
        //         // set up beforeUpdate lifecycle "hook" functionality
        //         async beforeUpdate(updatedVetData) {
        //             updatedVetData.password = await bcrypt.hash(updatedVetData.password, 10);
        //             return updatedVetData;
        //         }
        //     },

        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'vet',

    }
);

module.exports = Vet;