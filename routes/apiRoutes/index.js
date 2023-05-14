const router = require('express').Router();
const blogpostRoutes = require('./blogpostRoutes');
const commentRoutes = require('./commentRoutes');
const userRoutes = require('./userRoutes');
const editpostRoutes = require('./editpostRoutes');

router.use('/users', userRoutes);
router.use('/blogposts', blogpostRoutes);
router.use('/comment', commentRoutes);
router.use('/editpost', editpostRoutes);
module.exports = router;