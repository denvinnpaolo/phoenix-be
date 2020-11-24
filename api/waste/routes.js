const express = require('express');
const router = express.Router();

const {
    AddWaste,
    getAllAvailable
} = require('./handlers.js')



router.get('/', getAllAvailable )

router.post('/add-waste', AddWaste)

module.exports = router;