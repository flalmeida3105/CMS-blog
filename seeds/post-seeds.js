const { Post } = require('../models');

const postData = [
    {
        title: 'Computer Science explained',
        post_content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas eum recusandae quam et, illum doloremque dolor ratione consectetur temporibus nostrum?",
        user_id: '1'
    },
    {
        title: 'Introduction to JavaScript',
        post_content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas eum recusandae quam et, illum doloremque dolor ratione consectetur temporibus nostrum?",
        user_id: '2'
    },
    {
        title: 'Handlebars is a template engine',
        post_content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas eum recusandae quam et, illum doloremque dolor ratione consectetur temporibus nostrum?",
        user_id: '1'
    },
    {
        title: 'JQuery vs JavaScript',
        post_content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas eum recusandae quam et, illum doloremque dolor ratione consectetur temporibus nostrum?",
        user_id: '4'
    },
    {
        title: 'HTML from scratch',
        post_content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas eum recusandae quam et, illum doloremque dolor ratione consectetur temporibus nostrum?",
        user_id: '1'
    },
    {
        title: 'CSS mastering course',
        post_content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas eum recusandae quam et, illum doloremque dolor ratione consectetur temporibus nostrum?",
        user_id: '1'
    },
    {
        title: 'MySQL tutorial',
        post_content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas eum recusandae quam et, illum doloremque dolor ratione consectetur temporibus nostrum?",
        user_id: '3'
    },
    {
        title: 'NodeJs explained',
        post_content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas eum recusandae quam et, illum doloremque dolor ratione consectetur temporibus nostrum?",
        user_id: '2'
    },
    {
        title: 'Introduction to Networking',
        post_content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas eum recusandae quam et, illum doloremque dolor ratione consectetur temporibus nostrum?",
        user_id: '3'
    },
];

const postSeeds = () => Post.bulkCreate(postData, { individualHooks: true });

module.exports = postSeeds;