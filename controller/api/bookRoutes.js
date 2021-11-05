const router = require('express').Router();
const { User, Book, BookUser, Review } = require('../../models');

router.get('/', async(req, res) => {
    try {
        const bookData = await Book.findAll({
            include: [{ model: Review }],
        })
        res.status(200).json(bookData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async(req, res) => {
    try {
        const bookData = await Book.findByPk(req.params.id, {
            include: [{ model: Review }],
        });

        if (!bookData) {
            res.status(404).json({ message: 'No book found with that id!' });
            return;
        }

        res.status(200).json(bookData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async(req, res) => {
    try {
        const bookData = await Book.create(req.body);
        res.status(200).json(bookData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/add-your-book', async(req, res) => {
    // bookId,
    // bookName,
    // authorName,
    // bookDescription
    // try {
        // console.log('object :>> ', req.session);
        const addBookUser = await BookUser.create({
            user_id: req.session.user_id,
            book_id: req.body.bookId,
        });
        console.log(req.body)

        /*
        const bookUserData = bookUserRaw.map(bookUserObj => bookUserObj.get({ plain: true }))

        const bookDataRaw = await Book.findByPk(req.params.id);
        const bookData = bookDataRaw.map(bookObj => bookObj.get({ plain: true }))
        */

        // const userBookData = bookData.filter(bookObj => {
        //     return bookUserData.some(bookUserObj => {
        //         if (bookUserObj.book_id === bookObj.id) {
        //             return true;
        //         } else {
        //             return false;
        //         }
        //     })
        // })
        // console.log(addBookUser);
        res.status(200).json("success");

        //res.render('your-books', { userBookData });
    // } catch (err) {
    //     console.log(err);
    //     res.status(500).json(err);
    // };

})

router.delete('/:id', async(req, res) => {
    try {
        const bookData = await Book.destroy({
            where: {
                id: req.params.id
            }
        });
        if (!bookData) {
            res.status(404).json({ message: 'No book found with this id!' });
            return;
        }

        res.status(200).json({ message: "Book deleted!" });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/addUserBook', async(req, res) => {
    const newUserBook = await BookUser.create({ book_id: req.body.book_id, user_id: req.body.user_id })
    res.status(200).json(newUserBook);
})

module.exports = router;