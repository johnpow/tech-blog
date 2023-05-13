const router = require('express').Router();
const blogpostRoutes = require('./blogpostRoutes');
const commentRoutes = require('./commentRoutes');
const userRoutes = require('./userRoutes');


router.use('/users', userRoutes);
router.use('/blogposts', blogpostRoutes);
router.use('/comment', commentRoutes);

module.exports = router;