const { Meal } = require('../models');

const mealdata = [
  {
    id: 1,
    name: 'The Classic',
    price: 7.50,
    menu_id: 1,
    filename: 'the=classic.jpg',
    description: 'Two eggs of your preferred style, a choice of bacon or sausage, as well as a choice of four pancakes or waffles.',
  },
  {
    id: 2,
    name: 'Country Fried Breakfast',
    price: 9,
    menu_id: 1,
    filename: 'chicken-fried-steak.jpg',
    description: 'A country fried steak with two eggs of your preferred style with either diced potatoes or hash browns.',
  },
  {
    id: 3,
    name: 'The Nick Foles',
    price: 8,
    menu_id: 1,
    filename: 'nick-foles.jpg',
    description: 'Rocky Balboa would be proud. A philly cheesesteak omelet with your choice of cheese and peppers, served with toast or a biscuit.',
  },
  {
    id: 4,
    name: 'Simply Cheesy Burger',
    price: 9.50,
    menu_id: 2,
    filename: 'simply-cheesy-burger.jpg',
    description: 'Just a well made burger with cheese, 100% USDA approved beef, pickles, tomatoes, lettuce and a side of fries.',
  },
  {
    id: 5,
    name: 'Plato Wings',
    price: 12.50,
    menu_id: 2,
    filename: 'platos-wings.jpg',
    description: 'We will never know if the Greek philosopher liked wings, but six dry and six saucy wings were meant to be shared much like the teachings of Plato himself!',
  },
  {
    id: 6,
    name: 'BLT Macaroni Salad',
    price: 8.50,
    menu_id: 2,
    filename: 'blt-macaroni-salad.jpg',
    description: "It's a macaroni salad, it's a BLT, it's a combination BLT macaroni salad!",
  },
];

const seedMeals = () => Meal.bulkCreate(mealdata);

module.exports = seedMeals;