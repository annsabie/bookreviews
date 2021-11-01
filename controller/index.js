const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const bookRoutes = require('./bookRoutes')

router.use('/', homeRoutes);
router.use('/books', bookRoutes)
module.exports = router;