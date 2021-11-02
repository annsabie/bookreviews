const { Review } = require('../models');

const reviewData = [
  {
    reviews: "Awesome",
    book_id: 2,
    user_id: 4,
  },
  {
    reviews: "Horrible",
    book_id: 4,
    user_id: 1,
  },
  {
    reviews: "Good",
    book_id: 3,
    user_id: 2,
  },
  {
    reviews: "Stupendous",
    book_id: 1,
    user_id: 3,
  },
  
];

const reviewSeed = () => Review.bulkCreate(reviewData);

module.exports = reviewSeed;