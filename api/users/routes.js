const express = require('express');
const router = express.Router();

const {
    register,
    login,
    allUsers, 
} = require('./handlers.js');

const { validateIsEmailTaken } = require('./validators.js')


router.get('/users', allUsers)
router.post('/login', login);
router.post('/register', validateIsEmailTaken,  register);



router.get('/', (req, res) => {
    res.status(200).send('Howdy')
});

module.exports = router;