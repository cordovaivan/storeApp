const router = require('express').Router();
const userRoutes = require('./userRoutes');
const clothesRoutes = require('./clothesRoutes');
const cartRoute = require('./cartRoute');

router.use('/users', userRoutes);
router.use('/clothes', clothesRoutes);

router.use('/cart', cartRoute);

module.exports = router;



// const express = require('express');
// const app = express();

// const clothes = require('../clothesRoutes');
// const users = require('../userRoutes');

// // app.use(clothes);
// // app.use(users);

// module.exports = app;