const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Menu extends Model {}

Menu.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        time_offered: {
            type: DataTypes.STRING,
            allowNull: false,    
        }
        },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'menu',
    }
);
module.exports = Menu;