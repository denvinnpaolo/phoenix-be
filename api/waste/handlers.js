const Helper = require('./Helpers.js');


const getAllAvailable = (req, res) => {
    Helper.getAllAvailable()
        .then((wastes) => {
            res.status(200).json({
                wastes: wastes
            })
        })
        .catch(err => {
            res.status(500).json({
                message: err
            })
        })
}

const AddWaste = (req, res) => {
    console.log(req.body)
    const waste = {
        type: req.type,
        producer_id: req.body.producer_id,
        date: req.body.date,
        exp: req.body.exp
    }
    Helper.addWaste(waste)
        .then(waste => {
            console.log(waste)
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
module.exports = {
    getAllAvailable,
    AddWaste
}