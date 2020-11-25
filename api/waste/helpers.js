const db = require('../../data/KnexConfig.js');


// SEARCH DATA
const searchWaste = filter => {
    console.log(filter)
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


// ADDING DATA
const addWaste = wasteObj => {
    return db('available')
        .insert(wasteObj)
        .then((id) => {
            return searchWaste({ id })
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
    console.log(wasteObj)
    return db('completed')
    .insert(wasteObj)
    .then(([id]) => {
        return searchCompleted({ id }) 
    })
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