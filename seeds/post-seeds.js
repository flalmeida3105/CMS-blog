const { Post } = require('../models');

const postData = [
    {
        title: 'flalmeida1',
        post_content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas eum recusandae quam et, illum doloremque dolor ratione consectetur temporibus nostrum?",
        user_id: '1'
    },
    {
        title: 'flalmeida2',
        post_content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas eum recusandae quam et, illum doloremque dolor ratione consectetur temporibus nostrum?",
        user_id: '2'
    },
    {
        title: 'flalmeida3',
        post_content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas eum recusandae quam et, illum doloremque dolor ratione consectetur temporibus nostrum?",
        user_id: '1'
    },
    {
        title: 'flalmeida4',
        post_content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas eum recusandae quam et, illum doloremque dolor ratione consectetur temporibus nostrum?",
        user_id: '4'
    },
    {
        title: 'flalmeida5',
        post_content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas eum recusandae quam et, illum doloremque dolor ratione consectetur temporibus nostrum?",
        user_id: '1'
    },
    {
        title: 'flalmeida6',
        post_content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas eum recusandae quam et, illum doloremque dolor ratione consectetur temporibus nostrum?",
        user_id: '1'
    },
    {
        title: 'flalmeida3',
        post_content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas eum recusandae quam et, illum doloremque dolor ratione consectetur temporibus nostrum?",
        user_id: '3'
    },
    {
        title: 'flalmeida666',
        post_content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas eum recusandae quam et, illum doloremque dolor ratione consectetur temporibus nostrum?",
        user_id: '2'
    },
    {
        title: 'flalmeida533',
        post_content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas eum recusandae quam et, illum doloremque dolor ratione consectetur temporibus nostrum?",
        user_id: '3'
    },
];

const postSeeds = () => Post.bulkCreate(postData, { individualHooks: true });

module.exports = postSeeds;