const router = require('express').Router();
const contacts = require('./contacts');

router.use('/', require('./swagger'));

router.get('/', (req, res) => {
    //swagger.tags=['Hello World]
    res.send('Hello World');
})
router.use('/contacts', contacts);

module.exports = router;
