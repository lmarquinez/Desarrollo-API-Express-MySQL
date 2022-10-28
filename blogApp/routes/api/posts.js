const router = require('express').Router();

router.get('/:postId', (req, res) => {
    try {
        res.send('ok');
    } catch (error) {
        res.json({ Error: error.message });
    }
});

router.post("/new", (req, res) => {
    try {
        res.send('ok');
    } catch (error) {
        res.json({ Error: error.message });
    }
});

router.post("/:postId/author/:authorId", (req, res) => {
    try {
        res.send('ok');
    } catch (error) {
        res.json({ Error: error.message });
    }
});

module.exports = router;