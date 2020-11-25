const db = require('../../data/KnexConfig.js');


// SEARCH DATA
const searchWaste = filter => {
    return db('available').where(filter);
};

const searchPickUp = filter => {
    return db('pick_up').where(filter)
}

const searchCompleted = filter => {
    return db('completed').where(filter);
};

const searchArchive = filter => {
    return db('archive').where(filter);
};


// FETCHING DATA
const getAllAvailable = () => {
    return db('available')
};

const getAllPickUps = () => {
    return db('pick_up')
};

const getAllProducerCompleted = (id) => {
    return db('completed').where(id)
} 


// ADDING DATA
const addWaste = wasteObj => {
    return db('available')
        .insert(wasteObj)
        .then((id) => {
            return getAllAvailable({ id })
        })
};

const availToPickUp = wasteObj => {
    return db('pick_up')
        .insert(wasteObj)
        .then(([id]) => {
            return searchPickUp({ id }) 
        })

};  

const pickUpToComplete = (wasteObj) => {
    //add waste object to completed then  delete from 'pick_up' database.
};


// DELETION
const deleteAvail = (id) => {
    return db('available').where(id).del()
}

const deletePickUp = (id) => {
    return db('pick_up').where(id).del()
}

module.exports ={
    
    searchWaste,
    searchCompleted,
    searchArchive,
    searchPickUp,

    getAllAvailable,
    getAllPickUps,

    availToPickUp,
    pickUpToComplete,
    addWaste,

    deleteAvail,
    deletePickUp
}