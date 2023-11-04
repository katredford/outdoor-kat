const router = require('express').Router();
const { User, Post, Pics, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
  Pics.findAll({
    // include: [User],
  })
    .then((pics) => res.json(pics))
    .catch((err) => res.status(500).json(err));
});

router.post('/', withAuth, async (req, res) => {
  const body = req.body;

  try {
    const newPic = await Pics.create({ ...body, userId: req.session.userId });
    res.json(newPic);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;