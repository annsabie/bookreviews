const router = require('express').Router();
const { User, Book, BookUser, Review } = require('../models');

router.get('/homepage', async(req, res) => {
    try {
        const mapData = await Book.findAll();
        const bookData = mapData.map(bookObj => bookObj.get({ plain: true }))

        console.log(bookData);
        res.render('homepage', { bookData });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };

});
router.get('/login', async(req, res) => {
    try {
        res.render('login');
    } catch (err) {
        res.status(500).json(err);
    }
})

// router.get('/login', (req, res) => {
//     if (req.session.loggedIn) {
//         res.redirect('/');
//         return;
//     }

//     res.render('login');
// });

module.exports = router;