const { User } = require('../models');

const userData = [
    {
        username: 'a',
        password: 'a'
    },
    {
        username: 'flalmeida1',
        password: 'password123'
    },
    {
        username: 'flalmeida2',
        password: 'password123'
    },
    {
        username: 'flalmeida3',
        password: 'password123'
    },
    {
        username: 'flalmeida4',
        password: 'password123'
    },
    {
        username: 'flalmeida5',
        password: 'password123'
    },
    {
        username: 'leondro',
        password: 'password123'
    },
    {
        username: 'luiz',
        password: 'password123'
    },
];

const userSeeds = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = userSeeds;