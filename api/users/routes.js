const express = require('express');
const router = express.Router();

const {
    register,
    login,
    allUsers, 
} = require('./handlers.js');

router.get('/users', allUsers)
router.post('/login', login);
router.post('/register', register);



router.get('/', (req, res) => {
    res.status(200).send('Howdy')
});

module.exports = router;