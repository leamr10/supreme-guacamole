const { Menu } = require('../models');

const menudata = [
  {
    name: 'Breakfast',
    time_offered: '6:00 AM to 10:30 AM'
  },
  {
    name: 'Lunch',
    time_offered: '11:00 AM to 3:30 PM'
  },
  {
    name: 'Dinner',
    time_offered: '4:00 PM to 10:00 PM'
  },
  {
    name: 'Drinks',
    time_offered: 'All day'
  },
  {
    name: 'Dessert',
    time_offered: '11:00 AM to 10:00 PM'
  },
];

const seedMenu = () => Menu.bulkCreate(menudata);

module.exports = seedMenu;