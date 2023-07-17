const router = require('express').Router();
const { Menu, Meal } = require('../models');
const withAuth = require('../utils/auth');

// GET all menus for homepage
router.get('/', async (req, res) => {
  try {
    const dbMenuData = await Menu.findAll({
      include: [
        {
          model: Meal,
          attributes: ['name', 'filename', 'price', 'description'],
        },
      ],
    });

    const menus = dbMenuData.map((Menu) =>
      Menu.get({ plain: true })
    );

    res.render('homepage', {
      menus,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one menu
// Use the custom middleware before allowing the user to access the menu
router.get('/menu/:id', withAuth, async (req, res) => {
  try {
    const dbMenuData = await Menu.findByPk(req.params.id, {
      include: [
        {
          model: Meal,
          attributes: [
            'id',
            'name',
            'filename',
            'edescription',
            'price',
          ],
        },
      ],
    });

    const menu = dbMenuData.get({ plain: true });
    res.render('menu', { menu, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one meal
// Use the custom middleware before allowing the user to access the meal
router.get('/menu/:id', withAuth, async (req, res) => {
  try {
    const dbMealData = await Meal.findByPk(req.params.id);

    const meal = dbMealData.get({ plain: true });

    res.render('meal', { meal, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// CREATE a meal
router.post('/seed', (req, res) => {
   Meal.create({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
  })
    .then((newMeal) => {
      res.json(newMeal);
    })
    .catch((err) => {
      res.json(err);
    });
});

// Updates meal based on its name
router.put('/:name', (req, res) => {
  // Calls the update method on the Book model
  Meal.update(
    {
      // All the fields you can update and the data attached to the request body.
      name: req.body.name,
      filename: req.body.filename,
      description: req.body.description,
      price: req.body.price,
    },
    {
      // Gets the meal based on the name given in the request parameters
      where: {
        name: req.params.name,
      },
    }
  )
    .then((updatedMeal) => {
      // Sends the updated meal as a json response
      res.json(updatedMeal);
    })
    .catch((err) => res.json(err));
});

router.delete('/:name', (req, res) => {
  // Looks for the books based on isbn given in the request parameters and deletes the instance from the database
  Meal.destroy({
    where: {
      name: req.params.name,
    },
  })
    .then((deletedMeal) => {
      res.json(deletedMeal);
    })
    .catch((err) => res.json(err));
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;