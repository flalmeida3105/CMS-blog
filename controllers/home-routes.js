const router = require('express').Router();
const { Post, User, Comment } = require('../models');

// Populate the homepage with all posts
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

// Presents the login page to the user to log in
router.get("/login", (req, res) => {
    if (req.session.loggedIn) {
        res.redirect("/");
        return;
    }
    res.render('login', {
        navTitle: "The Tech Blog",
    });
});

// Presents the signup page to the user to create a new account
router.get('/signup', (req, res) => {
    res.render('signup');
});

module.exports = router;
