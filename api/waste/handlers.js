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
        address: req.body.address,
        description: req.body.description,
        time_available: req.body.time_available,
        date_posted: req.body.date_posted,
        exp: req.body.exp
    }
    Helper.addWaste(waste)
        .then(([waste]) => {
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
        producer_id: req.body.producer_id,
        address: req.body.address,
        description: req.body.description,
        time_available: req.body.time_available,
        date_posted: req.body.date_posted,
        exp: req.body.exp
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

const moveToComplete = (req, res) => {
    const { id } = req.body;
    const waste = {
        type: req.body.type,
        producer_id: req.body.producer_id,
        address: req.body.address,
        description: req.body.description,
        time_available: req.body.time_available,
        date_posted: req.body.date_posted,
        exp: req.body.exp
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

    Helper.searchWaste(req.body)
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
};

const getAvailandComp = (req, res) => {
    const { id } = req.body;
    let posts = {
        available: [],
        complete: []
    }
    Helper.searchAvailable({id})
        .then(avails => {
            posts.available = avails;
            Helper.searchCompleted({id})
                .then(comps => {
                    posts.complete = comps
                    
                    res.status(200).json({
                        posts: posts
                    })
                })
                .catch(err => {
                    message: err
                })
        })
        .catch(err => {
            message: err
        })
};


module.exports = {
    getAllAvailable,
    getAllPickUps,
    getAvailandComp,
    addWaste,
    moveToPickUp,
    moveToComplete,
    searchBy
}