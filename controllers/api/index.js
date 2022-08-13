const router = require('express').Router();
const clothesRoutes = require('./clothesRoutes');
const userRoutes = require('./userRoutes');

router.use('./users', userRoutes);
router.use('/clothes', clothesRoutes);

module.exports = router;