const express = require('express');
const router = express.Router();

const {
    addWaste,
    getAllAvailable, 
    getAllPickUps,
    moveToComplete,
    moveToCancel,
    moveToPickUp,
    moveToPickUpMulti,
    updatePost,
    searchByPickUp,
    searchByCompleted,
    searchByCanceled,
    searchById,
    searchMultiAvail
} = require('./handlers.js');




router.get('/', getAllAvailable);
router.get('/pick-ups', getAllPickUps);
router.get('/available')
router.post('/available/multi', searchMultiAvail)

router.post('/add-waste', addWaste);
router.post('/to-cancel', moveToCancel);
router.post('/to-complete', moveToComplete);
router.post('/to-pick-up', moveToPickUp);
router.post('/to-pick-up/multi', moveToPickUpMulti)


router.post('/search-by/available', searchMultiAvail)
router.post('/search-by/pick-up', searchByPickUp);
router.post('/search-by/completed', searchByCompleted);
router.post('/search-by/canceled', searchByCanceled);
router.post('/search-by/id', searchById)
router.put('/post/edit', updatePost)



module.exports = router;