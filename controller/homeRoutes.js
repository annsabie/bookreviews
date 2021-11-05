const router = require('express').Router();
const { User, Book, BookUser, Review } = require('../models');

router.get('/', async(req, res) => {
    try {
        const mapData = await Book.findAll();
        const bookData = mapData.map(bookObj => bookObj.get({ plain: true }))

        console.log(bookData);
        res.render('homepage', { bookData, loggedIn: req.session.logged_in });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };

});

router.get('/find-books', async(req, res) => {
    try {
        const mapData = await Book.findAll();
        const bookData = mapData.map(bookObj => bookObj.get({ plain: true }))

        // console.log(bookData);
        res.render('find-books', { bookData, loggedIn: req.session.logged_in });
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
});

router.get('/logout', async(req, res) => {
    try {
        res.render('logout', { loggedIn: req.session.logged_in });
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/signup', async(req, res) => {
        try {
            res.render('signup', { loggedIn: req.session.logged_in });
        } catch (err) {
            res.status(500).json(err);
        }
    })
    //add the book id and book title and book author
router.get('/your-reviews', async(req, res) => {
    try {
        const reviewDataRaw = await Review.findAll({
            where: {
                user_id: req.session.user_id
            },
            include: [{ model: Book }]
        });
        //const bookDataRaw = await Book.findAll();
        //const bookData = bookDataRaw.map(reviewObj => reviewObj.get({ plain: true }))
        const reviewData = reviewDataRaw.map(reviewObj => reviewObj.get({ plain: true }))
        console.log(reviewData);

        res.render('your-reviews', { reviewData, loggedIn: req.session.logged_in });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/addBook', async(req, res) => {
    try {
        res.render('addBook', { loggedIn: req.session.logged_in });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/your-books', async(req, res) => {
    try {
        console.log('object :>> ', req.session);
        const bookUserRaw = await BookUser.findAll({
            where: {
                user_id: req.session.user_id
            }
        });
        const bookUserData = bookUserRaw.map(bookUserObj => bookUserObj.get({ plain: true }))
        const bookDataRaw = await Book.findAll();
        const bookData = bookDataRaw.map(bookObj => bookObj.get({ plain: true }))

        const userBookData = bookData.filter(bookObj => {
            return bookUserData.some(bookUserObj => {
                if (bookUserObj.book_id === bookObj.id) {
                    return true;
                } else {
                    return false;
                }
            })
        })
        res.render('your-books', { userBookData, loggedIn: req.session.logged_in });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };

});

router.get('/nyt', async(req, res) => {
    try {
        res.render('nyt', { loggedIn: req.session.logged_in });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/your-reviews', async(req, res) => {
    try {
        const reviewDataRaw = await Review.findAll({
            where: {
                user_id: req.session.user_id
            }
        });
        const reviewData = reviewDataRaw.map(reviewObj => reviewObj.get({ plain: true }))
        res.render('your-reviews', { reviewData, loggedIn: req.session.logged_in });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };

});
module.exports = router;