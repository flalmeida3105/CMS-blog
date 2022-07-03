const { User } = require('../models');

const userData = [
    {
        username: 'Fernando',
        password: 'password123'
    },
    {
        username: 'Flalmeida1',
        password: 'password123'
    },
    {
        username: 'Almeida',
        password: 'password123'
    },
    {
        username: 'Palmeiras',
        password: 'password123'
    },
    {
        username: 'Hacker',
        password: 'password123'
    },
    {
        username: 'Priest',
        password: 'password123'
    },
    {
        username: 'Christ',
        password: 'password123'
    },
    {
        username: 'Jesus',
        password: 'password123'
    },
];

const userSeeds = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = userSeeds;