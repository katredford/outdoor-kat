const router = require('express').Router();
const { User, Post, Pics, Comment } = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/', (req, res) => {
  Post.findAll({
    include: [Pics],
  })
    .then((posts) => res.json(posts))
    .catch((err) => res.status(500).json(err));
});

router.post('/', withAuth, async (req, res) => {
  const body = req.body;
  console.log("this is the body", body)
  try {
    const newPost = await Post.create(
      {
        ...body,
        userId: req.session.userId
        
      },
    );
    res.json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});



router.get('/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        User,
        {
          model: Comment,
          include: [User],
        },
        Pics
      ],
    });

    if (postData) {
      const post = postData.get({ plain: true });

     res.json(post)
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});



router.post('/:postId/pics', async (req, res) => {
  const postId = req.params.postId;

  try {
  
    const post = await Post.findByPk(postId);

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    // Create a new picture associated with the post
    const newPic = await Pics.create({
  
      postId: postId,
            url: req.body.url,
            caption: req.body.caption
    });

    await post.addPics(newPic);

 
    const updatedPost = await Post.findByPk(postId, {
      include: [Pics],
    });

    res.status(201).json(updatedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});







router.put('/:id', async (req, res) => {
  console.log("params params params",req.params.id)
  try {
    const updatedPost = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    // res.json(updatedPost)
    // if (affectedRows > 0) {
    //   res.status(200).json(a).end();
    // } else {
    //   res.status(404).end();
    // }
    res.json(updatedPost)
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id',  async (req, res) => {
  try {
    const [affectedRows] = Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;