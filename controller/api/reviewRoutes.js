const router = require('express').Router();
const { Review, Book, BookUser } = require('../../models');

router.get('/:id', async(req, res) => {
    try {
        const reviewData = await Review.findByPk(req.params.id, {
            include: [{ model: Book }],
        });

        if (!reviewData) {
            res.status(404).json({ message: 'No review found with that id!' });
            return;
        }

        res.status(200).json(reviewData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async(req, res) => {
    try {
        const reviewData = await Review.create(req.body);
        res.status(200).json(reviewData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', async(req, res) => {
    try {
        const reviewData = await Review.destroy({
            where: {
                id: req.params.id
            }
        });
        if (!reviewData) {
            res.status(404).json({ message: 'No review found with this id!' });
            return;
        }

        res.status(200).json({ message: "Review deleted!" });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;