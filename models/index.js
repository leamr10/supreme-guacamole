const User = require('./User');
const Menu = require('./Menu');
const Meal = require('./Meal');

Menu.hasMany(Meal, {
  foreignKey: 'menu_id',
});

Meal.belongsTo(Menu, {
  foreignKey: 'menu_id',
});

module.exports = { User, Menu, Meal };