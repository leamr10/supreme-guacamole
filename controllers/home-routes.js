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
          attributes: ['filename', 'description'],
        },
      ],
    });

    const menus = dbMenuData.map((Menu) =>
      menu.get({ plain: true })
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
            'title',
            'artist',
            'exhibition_date',
            'filename',
            'description',
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

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;