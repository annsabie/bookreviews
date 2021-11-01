const User = require('./User');
const Book = require('./Book');
const Review = require('./Review');
const BookUser = require('./BookUser');

User.hasMany(Review, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Review.belongsTo(Book, {
  foreignKey: 'book_id',
  onDelete: 'CASCADE'
});

Review.belongsTo(User, {
  foreignKey: 'user_id'
});

Book.hasMany(Review, {
  foreignKey: 'book_id',
  onDelete: 'CASCADE'
});

Book.belongsToMany(User, {
  through: {
    model: BookUser,
    unique: false
  },
  foreignKey: 'book_id',
  onDelete: 'CASCADE',
});

User.belongsToMany(Book, {
  through: {
    model: BookUser,
    unique: false
  },
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
  }
);
//Review.belongsTo(user)//
//Review.belongsTo(book)//
//Book.belongsToMany(User)//
//Book.hasMany(Reveiw)//
//User.hasMany(Review)//
//User.hasMany(Book)//


module.exports = { User, Book, Review, BookUser };