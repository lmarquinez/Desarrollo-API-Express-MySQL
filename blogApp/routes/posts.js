const router = require('express').Router();
const { createPost, getPostAll, getPostById, deletePostById, updatePostById, getPostByAuthor, getPostByAuthorName } = require('../models/post.model');
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
router.get('/new', async (req, res) => {
    const authors = await getAuthorAll();

    res.render('post/form_new', {
        authors
    });
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
    const authors = await getAuthorAll();
    res.render('post/form_update', {
        post, authors
    })
});

/* REQUEST TO UPDATE THE POST FROM THE FORM */
router.post('/update', async (req, res) => {
    const { postId } = req.body;
    const result = await updatePostById(postId, req.body);

    res.redirect('/posts');
});

/* DELETE THE SELECTED POST */
router.get('/delete/:postId', async (req, res) => {
    const { postId } = req.params;
    const result = await deletePostById(postId);

    res.redirect('/posts');
})

/* GET ALL POSTS BY AUTHOR NAME */
router.get('/author', async (req, res) => {
    // const { authorid } = req.query;
    const { authorName } = req.query;
    console.log(authorName);
    // const posts = await getPostByAuthor(authorid);
    const posts = await getPostByAuthorName(authorName);
    console.log(posts);

    for (const post of posts) {
        post.date_create = dayjs(post.date_create).format('YYYY-MM-DD');
        const { name } = await getAuthorById(post.authorid);
        post.authorid = name;
    }

    res.render('post/list', {
        posts
    });
})

module.exports = router;