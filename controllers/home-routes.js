const router = require('express').Router();
// const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

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

// allows the user to login
router.get("/login", (req, res) => {
    if (req.session.loggedIn) {
        res.redirect("/");
        return;
    }
    res.render('login', {
        navTitle: "The Tech Blog",
    });
});

router.get('/signup', (req, res) => {
    res.render('signup');
});


// router.get('/comment', (req, res) => {
//     Post.findAll({
//         where: {
//             user_id: req.session.user_id,
//         },
//     }).then((dbPostData) => {
//         const posts = dbPostData.map((post) => post.get({ plain: true }));
//         res.render('addpost', {
//             posts,
//             loggedIn: true,
//             navTitle: "Your dashboard"
//         });
//     })
//         .catch((err) => {
//             console.log(err);
//             res.status(500).json(err);
//         });

// })


module.exports = router;
