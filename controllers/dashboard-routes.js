const router = require("express").Router();
const { Post, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

// get all posts for dashboard
router.get('/', withAuth, (req, res) => {
    Post.findAll({
        where: {
            user_id: req.session.user_id,
        },
    }).then((dbPostData) => {
        const posts = dbPostData.map((post) => post.get({ plain: true }));
        res.render('dashboard', { 
            posts, 
            loggedIn: true,
            navTitle: "Your dashboard"
        });
    })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/addpost', (req, res) => {
    Post.findAll({
        where: {
            user_id: req.session.user_id,
        },
    }).then((dbPostData) => {
        const posts = dbPostData.map((post) => post.get({ plain: true }));
        res.render('addpost', {
            posts,
            loggedIn: true,
            navTitle: "Your dashboard"
        });
    })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });

})

router.get('/editpost/:id', (req, res) => {
    Post.findAll({
        where: {
            user_id: req.session.user_id,
        },
    }).then((dbPostData) => {
        const posts = dbPostData.map((post) => post.get({ plain: true }));
        res.render('editpost', {
            posts,
            loggedIn: true,
            navTitle: "Your dashboard"
        });
    })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });

})



module.exports = router;
