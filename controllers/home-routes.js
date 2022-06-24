const router = require('express').Router();
// const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

router.get('/', (req, res, next) => {
    if (!req.session.loggedIn) {
        res.render('homepage', {
        });
    }
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('login');
        return;
    }
    res.render('signup');
});


module.exports = router;
