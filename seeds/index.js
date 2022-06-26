const commentSeeds = require('./comment-seeds');
const userSeeds = require('./user-seeds');
const postSeeds = require('./post-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('DATABASED SYNCED');

    await userSeeds();
    console.log('User SEEDED');

    await postSeeds();
    console.log('Post SEEDED');

    await commentSeeds();
    console.log('Comment SEEDED');

    process.exit(0);
};

seedAll();