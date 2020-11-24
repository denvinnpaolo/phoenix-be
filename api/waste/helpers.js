const db = require('../../data/KnexConfig.js');

const searchWaste = filter => {
    return db('pick_up').where(filter);
};

const searchCompleted = filter => {
    return db('completed').where(filter);
};

const searchArchive = filter => {
    return db('archive').where(filter);
};

const getAllAvailable = () => {
    return db('available')
};

const pickUpComplete = (wasteObj) => {
    //add waste object to completed then  delete from 'pick_up' database.
};

const fetchPickUps = () => {
    return db('pick_up')
}

const addWaste = wasteObj => {
    console.log(wasteObj)
    return db('pick_up')
        .insert(wasteObj)
        .then(([id]) => {
            return getAllAvailable({ id })
        })
}

module.exports ={
    searchWaste,
    searchCompleted,
    searchArchive,
    pickUpComplete,
    addWaste,
    getAllAvailable
}