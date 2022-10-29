const router = require('express').Router();


/**
 * CREATE NEW AUTHOR
 */
router.post("/new", async (req, res) => {
    const { newAuthor } = req.body;
    try {
        // const author = await createAuthor(newAuthor);
        // res.json(author);
        res.send('CREATE NEW AUTHOR');
    } catch (error) {
        res.json({ Error: error.message });
    }
});

/**
 * GET ALL AUTHORS
 */
router.get('/', async (req, res) => {
    try {
        // const arrAuthor = await getAuthortAll();
        // res.json(arrAuthor);
        res.send('GET ALL AUTHORS');
    } catch (error) {
        res.json({ Error: error.message });
    }
});

/**
 * GET ONE AUTHOR
 */
router.get('/author=:authorId', async (req, res) => {
    // const { authorId } = req.params;
    try {
        // const author = await getAuthorById(authorId);
        // res.json(author);
        res.send('GET ONE AUTHOR');
    } catch (error) {
        res.json({ Error: error.message });
    }
});

/**
 * DELETE ONE POST
 */
router.delete('/delete/author=:authorId', async (req, res) => {
    // const { authorId } = req.params;
    try {
        // const author = await deletePostById(authorId);
        // res.json(author);
        res.send('DELETE ONE AUTHOR');
    } catch (error) {
        res.json({ Error: error.message });
    }
});

/**
 * DELETE ALL AUTHORS
 */
router.delete('/delete/all', async (req, res) => {
    try {
        // const post = await deletePostAll();
        // res.json(post);
        res.send('DELETE ALL AUTHORS');
    } catch (error) {
        res.json({ Error: error.message });
    }
});

/**
 * UPDATE ONE POST
 */
router.put('/update/author=:authorId', async (req, res) => {
    // const { authorId } = req.params;
    try {
        // const author = await updatePostById(authorId);
        // res.json(author);
        res.send('UPDATE ONE AUTHOR');
    } catch (error) {
        res.json({ Error: error.message });
    }
});


module.exports = router;