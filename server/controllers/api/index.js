const router = require('express').Router();
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const picsRoutes = require('./pic-routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/pics', picsRoutes);

module.exports = router;