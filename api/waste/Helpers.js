const db = require('../../data/KnexConfig.js');


// SEARCH DATA
const searchMultiAvail = async list => {
    const result = await list.map(async (item)=> {
        const object = await searchAvailable(item)
        return object
    })
    return Promise.all(result)
}

const searchAvailable = async filter => {
    const result = await db('available as a')
        .join('users as u',"a.producer_id", "=", "u.id")
        .select('a.*', "u.name", "u.phone", "u.company_name")
        .where({"a.id": filter.id});

    return Promise.all(result)
};

const searchPickUp = filter => {   
    return db('pick_up as p')
    .join('users as u',"p.producer_id", "=", "u.id")
    .select('p.*', "u.name", "u.phone", "u.company_name")
    .where(filter)
}

const searchCompleted = filter => {
    return db('completed').where(filter);
};

const searchCanceled = filter => {
    return db('canceled').where(filter);
};


// FETCHING DATA
const getAllAvailable = () => {
    return db('available as a')
};

const getAllPickUps = () => {
    return db('pick_up')
};

const getAllPickUpsByCompanyId = filter => {
    return db('pick_up').where(filter)
};

const getAllCompletedByCompanyId = filter => {
    return db('completed').where(filter)
};

const getAllCanceledByCompanyId = filter => {
    return db('canceled').where(filter)
}


// ADDING DATA
const addWaste = wasteObj => {
    return db('available')
        .insert(wasteObj)
        .then(([id]) => {
            return searchAvailable({ id })
        })
};

const availToPickUp = wasteObj => {
    return db('pick_up')
        .insert(wasteObj)
        .then( ([id]) => {
            return searchPickUp({transformer_id :id }) 
        })

};  



const availToPickUpMulti = async (list, TI)=> {
    const result = await list.map(async (item)=> {
        const itemStruct = {
            producer_id: item.producer_id,
            transformer_id: TI,
            exp: item.exp,
            type: item.type,
            items: item.items,
            address: item.address,
            description: item.description,
            date_posted: item.date_posted,
            pick_up_date: item.exp,
            time_available: item.time_available
        }

        const object = await availToPickUp(itemStruct)
        const deleted = await deleteAvail({id: item.id})
        return object
    })
    return Promise.all(result)
}

const pickUpToComplete = (wasteObj) => {
    return db('completed')
    .insert(wasteObj)
    .then(([id]) => {
        return searchCompleted({ id }) 
    })
};

const pickUpToCancel = (wasteObj) => {
    return db('canceled')
    .insert(wasteObj)
    .then(([id]) => {
        return searchCompleted({ id }) 
    })
};


// DELETION

const deleteAvail = (id) => {
    console.log('database-> deleteAvail-> id: ', id)

    return db('available').where(id).del()
};

const deletePickUp = id => {
    return db('pick_up').where({id}).del()
};

module.exports ={
    
    searchMultiAvail,
    searchAvailable,
    searchCompleted,
    searchCanceled,
    searchPickUp,

    getAllAvailable,
    getAllPickUps,

    availToPickUp,
    availToPickUpMulti,
    pickUpToCancel,
    pickUpToComplete,
    deleteAvail,
    addWaste,

    deleteAvail,
    deletePickUp
}
