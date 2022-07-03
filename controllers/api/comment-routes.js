const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

// getting all comments
router.get("/", (req, res) => {
    Comment.findAll()
        .then((dbCommentData) => res.json(dbCommentData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// posting a new comment
router.post("/", withAuth, (req, res) => {
    if (req.session) {
        Comment.create({
            comment_content: req.body.comment_content,
            user_id: req.session.user_id,
            post_id: req.body.post_id,
        })
            .then((dbCommentData) => res.json(dbCommentData))
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            });
    }
});


module.exports = router;
