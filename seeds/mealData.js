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
    description: 'Rocky Balboa would be proud. A Philly cheesesteak omelet with your choice of cheese and peppers, served with toast or a biscuit.',
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
    filename: 'platos-wings.jpeg',
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
  {
    id: 7,
    name: 'The Steak and Potatoes',
    price: 23,
    menu_id: 3,
    filename: 'steak-and=potatoes.jpeg',
    description: "A beef steak served with a loaded baked potato and your choice of side salad or soup.",
  },
  {
    id: 8,
    name: 'Pizza All Around!',
    price: 18.50,
    menu_id: 3,
    filename: 'pizza-all-around.jpg',
    description: "Pizza for everyone! A 16 inch New York style pepperoni pizza for everyone to enjoy!",
  },
  {
    id: 9,
    name: "Mama's Lasagna",
    price: 14.50,
    menu_id: 3,
    filename: 'mamas-lasagna.jpg',
    description: "Lasagna so good it'll make you feel young again! Served with a side salad.",
  },
  {
    id: 10,
    name: 'Water',
    price: 0,
    menu_id: 4,
    filename: 'water.jpg',
  },
  {
    id: 11,
    name: 'Coca-Cola',
    price: 2,
    menu_id: 4,
    filename:'coca-cola.jpg',
  },
  {
    id: 12,
    name: 'Sprite',
    price: 2,
    menu_id: 4,
    filename: 'sprite.jpg',
  },
  {
    id: 13,
    name: 'Coffee',
    price: 4.50,
    menu_id: 4,
    filename: 'coffee.jpg',
  },
  {
    id: 14,
    name: 'Sweet Tea',
    price: 3.50,
    menu_id: 4,
    filename: 'sweet-tea.jpg',
  },
  {
    id: 15,
    name: 'Hot Fudge Cookie Sundae',
    price: 7.50,
    menu_id: 5,
    filename: 'hot-fudge-cookie-sundae.jpg',
    description: 'Vanilla ice cream with hot fudge drizzled atop pecans, a chocolate chip cookie and topped off with a cherry!', 
  },
  {
    id: 16,
    name: 'Apple Pie',
    price: 7,
    menu_id: 5,
    filename: 'apple-pie.jpg',
    description: 'A warm slice of apple pie with a scoop of vanilla ice cream to finish off your meal!'
  }

];

const seedMeals = () => Meal.bulkCreate(mealdata);

module.exports = seedMeals;