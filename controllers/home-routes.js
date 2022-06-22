const router = require('express').Router();
// const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

router.get('/', (req, res, next) => {
    res.render('homepage', {
        // showTitle: true,
    });
});

module.exports = router;
