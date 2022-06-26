const { Comment } = require('../models');

const commentData = [
    {
        comment_content: 'flalmeida1',
        post_id: 1,
        user_id: 1
    },
    {
        comment_content: 'flalmeida1',
        post_id: 2,
        user_id: 1
    },
    {
        comment_content: 'flalmeida1',
        post_id: 3,
        user_id: 2
    },
    {
        comment_content: 'flalmeida1',
        post_id: 4,
        user_id: 2
    },
    {
        comment_content: 'flalmeida1',
        post_id: 3,
        user_id: 3
    },
];

const commentSeeds = () => Comment.bulkCreate(commentData);

module.exports = commentSeeds;