const express = require('express');
const router = express.Router();

const {
    addWaste,
    getAllAvailable, 
    getAllPickUps,
    moveToComplete,
    moveToPickUp,
    searchByAvailable,
    searchByPickUp,
    searchByCompleted,
    searchByCanceled,
    searchMultiAvail
} = require('./handlers.js');



router.get('/', getAllAvailable);
router.get('/pick-ups', getAllPickUps);
router.get('/available')
router.get('/available/multi', searchMultiAvail)

router.post('/add-waste', addWaste);
router.post('/to-pick-up', moveToPickUp);
router.post('/to-complete', moveToComplete);

router.get('/search-by/available', searchByAvailable)
router.get('/search-by/pick-up', searchByPickUp);
router.get('/search-by/completed', searchByCompleted);
router.get('/search-by/canceled', searchByCanceled);



module.exports = router;