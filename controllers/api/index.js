const router = require('express').Router();
const userRoutes = require('./userRoutes');
const clothesRoutes = require('./clothesRoutes');

router.use('/users', userRoutes);
router.use('/clothes', clothesRoutes);

module.exports = router;



// const express = require('express');
// const app = express();

// const clothes = require('../clothesRoutes');
// const users = require('../userRoutes');

// // app.use(clothes);
// // app.use(users);

// module.exports = app;