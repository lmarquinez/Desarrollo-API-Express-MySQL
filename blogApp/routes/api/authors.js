const router = require('express').Router();

router.post('/new', (req, res) => {
    try {
        res.send('ok');
    } catch (error) {
        res.json({ Error: error.message });
    }
});

module.exports = router;