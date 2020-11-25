const Helper = require('./Helpers.js');


const getAllAvailable = (req, res) => {
    Helper.getAllAvailable()
        .then((wastes) => {
            res.status(200).json({
                available: wastes
            })
        })
        .catch(err => {
            res.status(500).json({
                message: err
            })
        })
}

const getAllPickUps = (req, res) => {
    Helper.getAllPickUps()
        .then(wastes => {
            res.status(200).json({
                pick_ups: wastes
            })
        })
        .catch(err => {
            res.status(500).json({
                message: err
            })
        })
}

const addWaste = (req, res) => {
    const waste = {
        type: req.body.type,
        producer_id: req.body.producer_id,
        date_posted: req.body.date_posted,
        exp: req.body.exp
    }
    Helper.addWaste(waste)
        .then(waste => {
            res.status(201).json({
                available: waste
            })
        })
        .catch(err => {
            res.status(500).json({
                message: err
            })
        })
}

const moveToPickUp = (req, res) => {
    const { id } = req.body;
    const waste = {
        type: req.body.type,
        description: req.body.description,
        producer_id: req.body.producer_id,
        producer_emp: req.body.producer_emp,
        transformer_id: req.body.transformer_id,
        transformer_emp: req.body.transformer_emp,
        date_posted: req.body.date_posted,
        exp: req.body.exp,
        pick_up_date: req.body.pick_up_date
    };

    Helper.availToPickUp(waste)
        .then(waste => {
            console.log(waste)
            Helper.deleteAvail({id})
                .then(moved => {
                    console.log(moved)
                    res.status(201).json({
                        pick_up: waste
                    })
                })
                .catch(err => {
                    res.status(500).json({
                        message: err
                    })
                })
        })
        .catch(err => {
            res.status(500).json({
                message: err
            })
        })
};

const movetToComplete = (req, res) => {
    const { id } = req.body;
    const waste = {
        type: req.body.type,
        description: req.body.description,
        producer_id: req.body.producer_id,
        producer_emp: req.body.producer_emp,
        transformer_id: req.body.transformer_id,
        transformer_emp: req.body.transformer_emp,
        date_posted: req.body.date_posted,
        exp: req.body.exp,
        pick_up_date: req.body.pick_up_date
    };

    Helper.pickUpToComplete(waste)
        .then(waste => {
            console.log(waste)
            Helper.deletePickUp({id})
                .then(moved => {
                    console.log(moved)
                    res.status(201).json({
                        completed: waste
                    })
                })
                .catch(err => {
                    res.status(500).json({
                        message: err
                    })
                })
        })
        .catch(err => {
            res.status(500).json({
                message: err
            })
        })
};

const searchBy = (req, res) => {
    const { type } = req.body;

    Helper.searchWaste({type})
        .then(wasteList => {
            res.status(200).json({
                available: wasteList
            })
        })
        .catch(err => {
            res.status(500).json({
                message: err
            })
        })
}


module.exports = {
    getAllAvailable,
    getAllPickUps,
    addWaste,
    moveToPickUp,
    movetToComplete,
    searchBy
}