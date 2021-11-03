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

module.exports = router;