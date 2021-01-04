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
    // console.log('db -> searchAvailable -> filter: ', filter)

    if(filter.id){
        const result = await db('available as a')
        .join('users as u',"a.producer_id", "u.id")
        .select('a.*', "u.name", "u.phone", "u.company_name")
        .where({"a.id": filter.id});

        return Promise.all(result)
    } else {
        const result = await db('available as a')
            .join('users as u',"a.producer_id", "u.id")
            .select('a.*', "u.name", "u.phone", "u.company_name")
            .where({"a.id": filter});

        return Promise.all(result)
    }
};

const searchAvailById = async (filter) => {
    console.log('db -> searchAvailById -> filter: ', filter)

        const result = await db('available as a')
                .join('users as u',"a.producer_id", "=", "u.id")
                .select('a.*', "u.name", "u.phone", "u.company_name")
                .where({'a.producer_id': filter});

        return Promise.all(result)

}

const searchPickUp = filter => {   
    console.log('searchPickUp: ', filter)
    if(Object.keys(filter)[0].charAt(0) === 't'){
        return db('pick_up as p')
        .join('users as u',"p.producer_id", "=", "u.id")
        .select('p.*', "u.name", "u.phone", "u.company_name")
        .where(filter)
    } else if(Object.keys(filter)[0].charAt(0) === 'p'){
        return db('pick_up as p')
        .join('users as u',"p.transformer_id", "=", "u.id")
        .select('p.*', "u.name", "u.phone", "u.company_name")
        .where(filter)
    } else if(Object.keys(filter)[0].charAt(0) === 'i') {
        return db('pick_up as p')
        .join('users as u',"p.transformer_id", "=", "u.id")
        .select('p.*', "u.name", "u.phone", "u.company_name")
        .where({'p.id': filter.id})
    }

}

const searchCompleted = filter => {
    if(Object.keys(filter)[0].charAt(0) === 't'){
        return db('completed as c')
            .join('users as u',"c.producer_id", "u.id")
            .select('c.*', "u.name", "u.phone", "u.company_name")
            .where(filter)
    } else if(Object.keys(filter)[0].charAt(0) === 'p'){
        return db('completed as c')
            .join('users as u',"c.transformer_id", "u.id")
            .select('c.*', "u.name", "u.phone", "u.company_name")
            .where(filter)
    }
};


const searchCanceled = filter => {
    // console.log(filter)
    if(Object.keys(filter)[0].charAt(0) === 't'){
        return db('canceled as c')
            .join('users as u',"c.producer_id", "u.id")
            .select('c.*', "u.name", "u.phone", "u.company_name")
            .where(filter)
    } else if(Object.keys(filter)[0].charAt(0) === 'p'){
        return db('canceled as c')
            .join('users as u',"c.transformer_id", "u.id")
            .select('c.*', "u.name", "u.phone", "u.company_name")
            .where(filter)
    }
};

const searchArcived = filter => {
    // console.log('db -> searchArchived -> filter: ',filter.producer_id)
    if(Object.keys(filter)[0].charAt(0) === 't'){
        return db('archive as a')
            .join('users as u',"a.producer_id", "u.id")
            .select('a.*', "u.name", "u.phone", "u.company_name")
            .where({"a.id": filter.transformer_id})
    } else if(Object.keys(filter)[0].charAt(0) === 'p'){
        return db('archive as a')
            .join('users as u',"a.transformer_id", "u.id")
            .select('a.*', "u.name", "u.phone", "u.company_name")
            .where({"a.id": filter.producer_id})
    }
}

const searchArchivedById = filter => {
    if(Object.keys(filter)[0].charAt(0) === 't'){
        return db('archive as a')
            .join('users as u',"a.producer_id", "u.id")
            .select('a.*', "u.name", "u.phone", "u.company_name")
            .where({"a.transformer_id": filter.transformer_id})
    } else if(Object.keys(filter)[0].charAt(0) === 'p'){
        return db('archive as a')
            .join('users as u',"a.transformer_id", "u.id")
            .select('a.*', "u.name", "u.phone", "u.company_name")
            .where({"a.producer_id": filter.producer_id})
    }
}

const viewPickUp = filter => {   
    // console.log('db -> viewPickUp -> filter: ', filter)
    return db('pick_up as p')
        .join('users as u',"p.transformer_id", "=", "u.id")
        .select('p.*', "u.name", "u.phone", "u.company_name")
        .where({'p.producer_id': filter})
}


// FETCHING DATA

const getAllArchived = () => {
    return db('archive')
}
const getAllAvailable = () => {
    return db('available')
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
    // console.log('db -> addWaste -> obj: ', wasteObj)
    return db('available')
        .insert(wasteObj)
        .returning('id')
        .then(([id]) => {
            return searchAvailable({ id })
        })
};

const availToPickUp = wasteObj => {
    // console.log('database  -> availtoPickup -> waste obj: ',wasteObj)
    return db('pick_up')
        .insert(wasteObj)
        .returning('id')
        .then( ([id]) => {
            console.log('db -> availtoPick -> .then: ',id)
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
            price: item.price,
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
    .returning('id')
    .then(([id]) => {
        return searchCompleted({ id }) 
    })
};

const pickUpToCancel = (wasteObj) => {
    // console.log('db -> pickUpToCancel -> wasteObj: ', wasteObj)
    return db('canceled')
    .insert(wasteObj)
    .returning('id')
    .then(([id]) => {
        return searchCanceled({ id }) 
    })
};


const archived = (wasteData, userType) => {
    // console.log('db -> archived -> userType: ', userType)
    // console.log('db -> archived -> wasteData: ', wasteData)

    return db('archive')
        .insert(wasteData)
        .returning('id')
        .then(([id]) => {
            console.log(id)
            return searchArcived({[userType]: id})
        })
}
// EDIT

const updatePost = item => {
    // console.log('db -> updatePost -> id: ', item.id)
    if(item.type === 'pick_up'){
        return db('pick_up')
            .where({"id":item.id})
            .update(item.editPickUp, '*')
            .then(updated =>{
                return searchPickUp({"id":item.id})
            })
            
    } else if(item.type === 'available'){
        return db('available')
            .where({"id":item.id})
            .update(item.editAvail, '*')
            .then(updated =>{
                return searchPickUp({"id":item.id})
            })
    }
}


// DELETION

const deleteAvail = id => {
    // console.log('database-> deleteAvail-> id ',id)

    return db('available').where(id).del()
};

const deletePickUp = (id) => {
    return db('pick_up').where(id).del()
};

const deleteCompleted = (id) => {
    return db('completed').where({id}).del()
};

const deleteCanceled = (id) => {
    return db('canceled').where({id}).del()
};
module.exports ={
    viewPickUp,
    
    searchMultiAvail,
    searchAvailable,
    searchAvailById,
    searchArchivedById,
    searchCompleted,
    searchCanceled,
    searchPickUp,

    getAllAvailable,
    getAllPickUps,
    getAllArchived,

    availToPickUp,
    availToPickUpMulti,
    pickUpToCancel,
    pickUpToComplete,
    addWaste,
    archived,

    updatePost,

    deleteAvail,
    deleteCompleted,
    deletePickUp,
    deleteCanceled
}
