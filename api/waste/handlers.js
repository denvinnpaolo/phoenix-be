const Helper = require('./Helpers.js');


const getAllAvailable = (req, res) => {
    Helper.getAllAvailable()
        .then((wastes) => {
            res.status(200).json({
                data: wastes
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
};

const moveToPickUp = (req, res) => {
    const { id } = req.body;
    const waste = {
        date_posted: req.body.date_posted,
        exp: req.body.exp,
        pick_up_date: req.body.pick_up_date,
        time_available: req.body.time_available,
        type: req.body.type,
        address: req.body.address,
        description: req.body.description,
        producer_id: req.body.producer_id,
        transformer_id: req.body.transformer_id
    };

    Helper.availToPickUp(waste)
        .then(([waste])=> {
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
    console.log(req.body)
    const { id } = req.body;
    const waste = {
        date_posted: req.body.date_posted,
        exp: req.body.exp,
        pick_up_date: req.body.pick_up_date,
        time_available: req.body.time_available,
        type: req.body.type,
        address: req.body.address,
        description: req.body.description,
        producer_id: req.body.producer_id,
        transformer_id: req.body.transformer_id
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

const searchMultiAvail = (req, res) => {
    const list = [
        {id: 13},
        {id: 14}
    ];
    Helper.searchMultiAvail(list)
        .then((data)=> {
            console.log(data)
            res.status(200).json({
                data
            })
        })
        .catch(err => {
            res.status(500).json({
                message: err
            })
        })
}

const searchByAvailable = (req, res) => {
    const id = req.body

    Helper.searchAvailable(id)
        .then(([data])=> {
            res.status(200).json({
                data
            })
        })
        .catch(err => {
            res.status(500).json({
                message: err
            })
        })
};

const searchByPickUp = (req, res) => {
    const id = req.body

    Helper.searchPickUp(id)
        .then(data => {
            res.status(200).json({
                data
            })
        })
        .catch(err => {
            res.status(500).json({
                message: err
            })
        })
};

const searchByCompleted = (req, res) => {
    const id = req.body


    Helper.searchCompleted(id)
        .then(data => {
            res.status(200).json({
                data
            })
        })
        .catch(err => {
            res.status(500).json({
                message: err
            })
        })
};

const searchByCanceled = (req, res) => {
    const id = req.body


    Helper.searchCanceled(id)
        .then(data => {
            res.status(200).json({
                data
            })
        })
        .catch(err => {
            res.status(500).json({
                message: err
            })
        })
};




module.exports = {
    getAllAvailable,
    getAllPickUps,
    addWaste,
    moveToPickUp,
    moveToComplete,
    searchByPickUp,
    searchByAvailable,
    searchByCompleted,
    searchByCanceled,
    searchMultiAvail
}