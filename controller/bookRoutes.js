const router = require('express').Router();
const { User, Book, BookUser, Review } = require('../models');

router.get('/all', async(req, res) => {
    try {
        const mapData = await Book.findAll();
        const bookData = mapData.map(bookObj => bookObj.get({ plain: true }))

        console.log(bookData);
        res.render('all', { bookData });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };

});


module.exports = router;