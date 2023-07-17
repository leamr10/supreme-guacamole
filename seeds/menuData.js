const { Menu } = require('../models');

const menudata = [
  {
    id: 1,
    name: 'Breakfast',
    time_offered: '6:00 AM to 10:30 AM'
  },
  {
    id: 2,
    name: 'Lunch',
    time_offered: '11:00 AM to 3:30 PM'
  },
  {
    id: 3,
    name: 'Dinner',
    time_offered: '4:00 PM to 10:00 PM'
  },
  {
    id: 4,
    name: 'Drinks',
    time_offered: 'All day'
  },
  {
    id: 5,
    name: 'Dessert',
    time_offered: '11:00 AM to 10:00 PM'
  },
];

const seedMenu = () => Menu.bulkCreate(menudata);

module.exports = seedMenu;