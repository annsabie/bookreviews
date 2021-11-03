const router = require('express').Router();
const { User, Book, BookUser, Review } = require('../models');

router.get('/', async(req, res) => {
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

router.get('/find-books', async(req, res) => {
    try {
        const mapData = await Book.findAll();
        const bookData = mapData.map(bookObj => bookObj.get({ plain: true }))

        console.log(bookData);
        res.render('find-books', { bookData });
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

router.get('/logout', async(req, res) => {
    try {
        res.render('logout');
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/signup', async(req, res) => {
        try {
            res.render('signup');
        } catch (err) {
            res.status(500).json(err);
        }
    })
    // router.get('/your-reviews', async(req, res) => {
    //     try {
    //         const reviewData = await Review.findAll({
    //             include: [{ model: Book }],
    //         })
    //         const newReviewData = reviewData.map(reviewObj => reviewObj.get({ plain: true }))
    //         res.status(200).json(reviewData);
    //         res.render('your-reviews', { reviewData });
    //     } catch (err) {
    //         res.status(500).json(err);
    //     }
    // });
router.get('/your-reviews', async(req, res) => {
    try {
        res.render('your-reviews');
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/your-books', async(req, res) => {
    try {
        const userId = 1;
        const bookData = await Book.findAll();
        const newBookData = bookData.map(bookObj => bookObj.get({ plain: true }))
        const mapData = await User.findAll();
        let userData = mapData.map(userObj => userObj.get({ plain: true }));

        userData = userData.map(bookObj => {
            const usersBooks = newBookData.filter(user => {
                return user.book_id === bookObj.id
            })
            return {...bookObj, usersBooks }
        })

        console.log('postData :>> ', userData);
        console.log('commentData :>> ', newBookData);
        res.render('your-books', { userData, newBookData });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };

});
module.exports = router;