const router = require('express').Router();
const { createAuthor, getAuthorAll, getAuthorById, deleteAuthorById, updateAuthorById } = require('../models/author.model');

/* GET ALL THE AUTHORS FOR THE VIEW */
router.get('/', async (req, res) => {
    const authors = await getAuthorAll();

    res.render('author/list', {
        authors
    });
});

/* ROUTE TO APPEAR THE FORM VIEW TO CREATE A NEW AUTHOR*/
router.get('/new', (req, res) => {
    res.render('author/form_new');
});

/* REQUEST TO CREATE THE AUTHOR FROM THE FORM */
router.post('/create', async (req, res) => {
    const result = await createAuthor(req.body);

    res.redirect('/authors');
});

/* ROUTE TO APPEAR THE FORM VIEW TO UPDATE AN AUTHOR */
router.get('/edit/:authorId', async (req, res) => {
    const { authorId } = req.params;
    const author = await getAuthorById(authorId);

    res.render('author/form_update', {
        author
    })
});

/* REQUEST TO UPDATE THE AUTHOR FROM THE FORM */
router.post('/update', async (req, res) => {
    const { authorId } = req.body;
    const result = await updateAuthorById(authorId, req.body);

    res.redirect('/authors');
});

/* DELETE THE SELECTED AUTHOR */
router.get('/delete/:authorId', async (req, res) => {
    const { authorId } = req.params;
    const result = await deleteAuthorById(authorId);

    res.redirect('/authors');
})

module.exports = router;