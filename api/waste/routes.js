const express = require('express');
const router = express.Router();

const {
    addWaste,
    getAllAvailable, 
    getAllPickUps,
    moveToComplete,
    moveToPickUp,
    searchByPickUp,
    searchByCompleted,
    searchByCanceled
} = require('./handlers.js');



router.get('/', getAllAvailable);
router.get('/pick-ups', getAllPickUps);

router.post('/add-waste', addWaste);
router.post('/to-pick-up', moveToPickUp);
router.post('/to-complete', moveToComplete);

router.get('/search-by/pick-up', searchByPickUp);
router.get('/search-by/completed', searchByCompleted);
router.get('/search-by/canceled', searchByCanceled);



module.exports = router;