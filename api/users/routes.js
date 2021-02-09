const express = require('express');
const router = express.Router();

const {
    register,
    login,
    allUsers,
    updateUser, 
} = require('./handlers.js');

const { 
    validateIsEmailTaken,
    validateLogin,
    validateID 
} = require('./validators.js')


// router to get all users + user info
router.get('/users', allUsers)

router.post('/login', validateLogin, login);
router.post('/register',validateIsEmailTaken,  register);
router.put('/update', updateUser)



router.get('/greetings', (req, res) => {
    res.status(200).send('Holla')
});

module.exports = router;