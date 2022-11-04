const router = require('express').Router();
const { createPost, getPostAll, getPostById, deletePostById, updatePostById, getPostByAuthor } = require('../models/post.model');
const { getAuthorAll, getAuthorById } = require('../models/author.model');

const dayjs = require('dayjs');


/* GET ALL THE POSTS FOR THE VIEW */
router.get('/', async (req, res) => {
    const posts = await getPostAll();
    for (const post of posts) {
        post.date_create = dayjs(post.date_create).format('YYYY-MM-DD');
        const { name } = await getAuthorById(post.authorid);
        post.authorid = name;
    }

    res.render('post/list', {
        posts
    });
});

/* ROUTE TO APPEAR THE FORM VIEW TO CREATE A NEW POST*/
router.get('/new', (req, res) => {
    res.render('post/form_new');
});

/* REQUEST TO CREATE THE POST FROM THE FORM */
router.post('/create', async (req, res) => {
    const result = await createPost(req.body);

    res.redirect('/posts');
});

/* ROUTE TO APPEAR THE FORM VIEW TO UPDATE A POST */
router.get('/edit/:postId', async (req, res) => {
    const { postId } = req.params;
    const post = await getPostById(postId);
    post.date_create = dayjs(post.date_create).format('YYYY-MM-DD');
    res.render('post/form_update', {
        post
    })
});

/* REQUEST TO UPDATE THE AUTHOR FROM THE FORM */
router.post('/update', async (req, res) => {
    const { postId } = req.body;
    const result = await updatePostById(postId, req.body);

    res.redirect('/posts');
});

/* DELETE THE SELECTED AUTHOR */
router.get('/delete/:postId', async (req, res) => {
    const { postId } = req.params;
    const result = await deletePostById(postId);

    res.redirect('/posts');
})

module.exports = router;