const router = require('express').Router();
const blogpostRoutes = require('./blogpostRoutes');
const commentRoutes = require('./commentRoutes');
const userRoutes = require('./userRoutes');


router.use('/users', userRoutes);
router.use('/blogposts', blogpostRoutes);
router.use('/comments', commentRoutes);

module.exports = router;