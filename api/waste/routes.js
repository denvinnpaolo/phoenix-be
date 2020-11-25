const express = require('express');
const router = express.Router();

const {
    AddWaste,
    getAllAvailable, 
    getAllPickUps,
    MoveToPickUp,
    searchBy
} = require('./handlers.js');



router.get('/', getAllAvailable )
router.get('/pick-ups', getAllPickUps)

router.post('/add-waste', AddWaste)

router.post('/to-pick-up', MoveToPickUp)

router.get('/search-by/type', searchBy)

module.exports = router;