const router = require('express').Router();

const postRoutes = require('./postRoutes.js');
const userRoutes = require('./userRoutes.js');




//http://localhost:3001/api/users
router.use('/users', userRoutes);

//http://localhost:3001/api/posts
router.use('/posts', postRoutes);

module.exports = router;
