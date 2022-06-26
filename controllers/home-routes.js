const router = require('express').Router();
// const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

router.get("/", (req, res) => {
    Post.findAll({
        attributes: ["id", "post_content", "title", "created_at"],
        include: [
            {
                model: Comment,
                attributes: ["id", "comment_content", "post_id", "user_id", "created_at"],
                include: {
                    model: User,
                    attributes: ["username"],
                },
            },
            {
                model: User,
                attributes: ["username"],
            },
        ],
    })
        .then((dbPostData) => {
            const posts = dbPostData.map((post) => post.get({ plain: true }));
            res.render("homepage", {
                posts: posts,
                loggedIn: req.session.loggedIn,
                navTitle: "The Tech Blog"
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.render('dashboard', { 
            loggedIn: req.session.loggedIn, 
            navTitle: "Your Dashboard", 
        });
        return
    }
    res.render('login', {
        navTitle: "The Tech Blog"
    });
});

router.get('/signup', (req, res) => {
    res.render('signup');
});



module.exports = router;
