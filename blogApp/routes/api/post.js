const router = require('express').Router();

/**
 * CREATE NEW POST
 */
router.post("/new", async (req, res) => {
    const { newpost } = req.body;
    try {
        // const post = await createPost(newpost);
        // res.json(post);
        res.send('CREATE NEW POST');
    } catch (error) {
        res.json({ Error: error.message });
    }
});

/**
 * GET ALL POSTS
 */
router.get('/', async (req, res) => {
    try {
        // const arrPost = await getPostAll();
        // res.json(arrPost);
        res.send('GET ALL POSTS');
    } catch (error) {
        res.json({ Error: error.message });
    }
});

/**
 * GET ONE POST
 */
router.get('/post=:postId', async (req, res) => {
    // const { postId } = req.params;
    try {
        // const post = await getPostById(postId);
        // res.json(post);
        res.send('GET ONE POST');
    } catch (error) {
        res.json({ Error: error.message });
    }
});

/**
 * DELETE ONE POST
 */
router.delete('/delete/post=:postId', async (req, res) => {
    // const { postId } = req.params;
    try {
        // const post = await deletePostById(postId);
        // res.json(post);
        res.send('DELETE ONE POST');
    } catch (error) {
        res.json({ Error: error.message });
    }
});

/**
 * DELETE ALL POSTS
 */
router.delete('/delete/all', async (req, res) => {
    try {
        // const post = await deletePostAll();
        // res.json(post);
        res.send('DELETE ALL POSTS');
    } catch (error) {
        res.json({ Error: error.message });
    }
});

/**
 * UPDATE ONE POST
 */
router.put('/update/post=:postId', async (req, res) => {
    // const { postId } = req.params;
    try {
        // const post = await updatePostById(postId);
        // res.json(post);
        res.send('UPDATE ONE POST');
    } catch (error) {
        res.json({ Error: error.message });
    }
});

/**
 * GET ALL POSTS OF AN ESPECIFIC AUTHOR
 */
router.get("/author/author=:authorId", async (req, res) => {
    // const { authorId } = req.params;
    try {
        // const posts = await getPostByAuthor(authorId);
        // res.json(posts);
        res.send('GET ALL POSTS OF AN ESPECIFIC AUTHOR');
    } catch (error) {
        res.json({ Error: error.message });
    }
});

module.exports = router;