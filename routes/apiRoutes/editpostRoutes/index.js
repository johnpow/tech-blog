const router = require('express').Router();
const { BlogPost } = require('../../../models');
const withAuth = require('../../../utils/auth');


router.put('/:id', withAuth, async (req, res) => {
  try {
    const blogpostData = await BlogPost.update(req.body,{
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!blogpostData) {
      res.status(404).json({ message: 'No blogpost found with this id!' });
      return;
    }

    res.status(200).json(blogpostData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
