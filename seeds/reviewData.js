const { Review } = require('../models');

const reviewData = [
  {
    reviews: "Transcendent Kingdom",
    book_id: "Yaa Gyasi's stunning follow-up to her acclaimed national bestseller Homegoing is a powerful, raw, intimate, deeply layered novel about a Ghanaian family in Alabama.",
    user_id: "Yaa Gyasi",
  },
  {
    reviews: "Transcendent Kingdom",
    book_id: "Yaa Gyasi's stunning follow-up to her acclaimed national bestseller Homegoing is a powerful, raw, intimate, deeply layered novel about a Ghanaian family in Alabama.",
    user_id: "Yaa Gyasi",
  },
  {
    reviews: "Transcendent Kingdom",
    book_id: "Yaa Gyasi's stunning follow-up to her acclaimed national bestseller Homegoing is a powerful, raw, intimate, deeply layered novel about a Ghanaian family in Alabama.",
    user_id: "Yaa Gyasi",
  },
  {
    reviews: "Transcendent Kingdom",
    book_id: "Yaa Gyasi's stunning follow-up to her acclaimed national bestseller Homegoing is a powerful, raw, intimate, deeply layered novel about a Ghanaian family in Alabama.",
    user_id: "Yaa Gyasi",
  },
  
];

const reviewBook = () => Review.bulkCreate(reviewData);

module.exports = reviewBook;