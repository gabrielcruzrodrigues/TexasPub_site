const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    res.render('home');
});

router.get('/pizzas', async (req, res) => {
    res.render('pizzas');
});

router.get('/massas', async (req, res) => {
    res.render('massas');
})

router.get('/hamburgers', async (req, res) => {
    res.render('hamburgers');
});

router.get('/sushi', async (req, res) => {
    res.render('sushi');
})


module.exports = router;