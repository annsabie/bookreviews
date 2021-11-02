const sequelize = require('../config/connection');
const bookuserSeed = require('./bookuserData');
const userSeed = require('./userData');
const reviewSeed = require('./reviewData');
const bookSeed = require('./bookData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await userSeed();
  await bookSeed();
  await reviewSeed();
  await bookuserSeed();

  process.exit(0);
};

seedAll();