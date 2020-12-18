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
router.post('/register',  register);



router.get('/greetings', (req, res) => {
    res.status(200).send('Holla')
});

module.exports = router;