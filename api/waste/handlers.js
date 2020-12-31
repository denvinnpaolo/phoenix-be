const Helper = require('./Helpers.js');


const getAllAvailable = (req, res) => {
    Helper.getAllAvailable()
        .then((wastes) => {res.status(200).json({data: wastes})})
        .catch(err => {res.status(500).json({message: err})})
}

const getAllPickUps = (req, res) => {
    Helper.getAllPickUps()
        .then(wastes => {res.status(200).json({pick_ups: wastes})})
        .catch(err => {res.status(500).json({message: err})})
}

const getAllArchived = (req, res) => {
    Helper.getAllArchived()
        .then(archived => {res.status(200).json({archived: archived})})
        .catch(err => {res.status(500).json({message: err})})
}

const addWaste = (req, res) => {
    const waste = {...req.body,}

    Helper.addWaste(waste)
        .then(([waste]) => {res.status(201).json({available: waste})})
        .catch(err => {res.status(500).json({message: err})})
};

const moveToPickUpMulti = (req, res) => {
    const {TI} = req.body
    let list = req.body.wastes.map(item => item[0])

    Helper.availToPickUpMulti(list, TI)
        .then((data)=> {res.status(200).json({data})})
        .catch(err => {res.status(500).json({message: err})})
}

const moveToPickUp = (req, res) => {
    const { id } = req.body;
    const waste = {
        date_posted: req.body.date_posted,
        exp: req.body.exp,
        pick_up_date: req.body.pick_up_date,
        time_available: req.body.time_available,
        items: req.body.items,
        type: req.body.type,
        address: req.body.address,
        price: req.body.price,
        producer_id: req.body.producer_id,
        transformer_id: req.body.transformer_id
    };

    Helper.availToPickUp(waste)
        .then(waste=> {
            Helper.deleteAvail({id})
                .then(moved => {res.status(201).json({pick_up: waste})})
                .catch(err => {res.status(404).json({message: err})})
        })
        .catch(err => {res.status(500).json({message: err})})
};

const moveToComplete = (req, res) => {
    const { id } = req.body;
    const waste = {
        date_posted: req.body.date_posted,
        exp: req.body.exp,
        pick_up_date: req.body.pick_up_date,
        time_available: req.body.time_available,
        items: req.body.items,
        type: req.body.type,
        address: req.body.address,
        price: req.body.price,
        producer_id: req.body.producer_id,
        transformer_id: req.body.transformer_id
    };

    Helper.pickUpToComplete(waste)
        .then(waste => {
            Helper.deletePickUp({id})
                .then(moved => {res.status(201).json({completed: waste})})
                .catch(err => {res.status(400).json({message: err})})})
        .catch(err => {res.status(500).json({message: err})})
};

const moveToCancel = (req, res) => {
    console.log('db  -> moveToCancel -> req: ',req.body)
    const { id } = req.body;
    const waste = {
        date_posted: req.body.date_posted,
        exp: req.body.exp,
        pick_up_date: req.body.pick_up_date,
        time_available: req.body.time_available,
        items: req.body.items,
        type: req.body.type,
        address: req.body.address,
        price: req.body.price,
        producer_id: req.body.producer_id,
        transformer_id: req.body.transformer_id
    };

    Helper.pickUpToCancel(waste)
        .then(waste => {
            Helper.deletePickUp({id})
                .then(moved => {res.status(201).json({canceled: waste})})
                .catch(err => {res.status(404).json({message: err})})
        })
        .catch(err => {res.status(500).json({message: err})})
};

const archived = (req, res) => {
    console.log(req.body)
    const {id, userType} = req.body

    const wasteData = {
        date_posted: req.body.date_posted,
        items: req.body.items,
        pick_up_date: req.body.pick_up_date,
        price: req.body.price,
        producer_id: req.body.producer_id,
        status: req.body.status,
        transformer_id: req.body.transformer_id,
        type: req.body.type
    };

    if(req.body.status === 'completed'){
        Helper.archived(wasteData, userType)
            .then(archived => {
                Helper.deleteCompleted(id)
                .then(moved => {res.status(200).json({data: archived})})
                .catch(err => res.status(404).json({message: err}))
            })
            .catch(err => res.status(500).json({message: err}))

    } else if(req.body.status === 'canceled'){
        Helper.archived(wasteData, userType)
            .then(archived => {
                Helper.deleteCanceled(id)
                .then(moved => {res.status(200).json({data: archived})})
                .catch(err => res.status(404).json({message: err}))
            })
            .catch(err => res.status(500).json({message: err}))
    }
}

const searchMultiAvail = (req, res) => {
    console.log('handlers -> searchMultiAvail -> req.body: ',req.body)
    let list = Object.values(req.body);
    Helper.searchMultiAvail(list)
        .then((data)=> {res.status(200).json({data})})
        .catch(err => {res.status(500).json({message: err})})
}

const searchByAvailable = (req, res) => {
    // console.log('searchByavail -> searchAvailable -> req.body: ',req.body)
    Helper.searchAvailable(req.body.id)
        .then(([data])=> {res.status(200).json({data})})
        .catch(err => {res.status(500).json({message: err})})
};

const searchArchivedById = (req, res) => {
    Helper.searchArchivedById(req.body)
        .then(data => {res.status(200).json({data})})
        .catch(err => {res.status(500).json({message:err})})
}

const searchByPickUp = (req, res) => {
    const id = req.body

    Helper.searchPickUp(id)
        .then(data => {res.status(200).json({data})})
        .catch(err => {res.status(500).json({message: err})})
};


const searchByCompleted = (req, res) => {
    const id = req.body

    Helper.searchCompleted(id)
        .then(data => {res.status(200).json({data})})
        .catch(err => {res.status(500).json({message: err})})
};

const searchByCanceled = (req, res) => {
    const id = req.body

    Helper.searchCanceled(id)
        .then(data => {res.status(200).json({data})})
        .catch(err => {res.status(500).json({message: err})})
};


const searchById = (req, res) => {
    // console.log('handlers -> searchbyid => req.body: ', req.body)'
    const {id} = req.body

    Helper.searchAvailById(id)
        .then(available => {
            Helper.viewPickUp(id)
                .then(pick_up => {
                    res.status(200).json({
                        data:[...available,...pick_up]
                    })
                })
                .catch(err => res.status(404).json({message: err}))
        })
        .catch(err => res.status(500).json({message: err}))
};

const updatePost = (req, res) => {
    console.log("handlers -> updatePost -> req.body: ",req.body)
    Helper.updatePost(req.body)
        .then(update => {res.status(200).json({data: update})})
        .catch(err => res.status(400).json({message: err}))
}



module.exports = {
    getAllAvailable,
    getAllPickUps,
    getAllArchived,

    addWaste,
    archived,
    moveToPickUpMulti,
    moveToPickUp,
    moveToCancel,
    moveToComplete,

    updatePost,

    searchByPickUp,
    searchByAvailable,
    searchByCompleted,
    searchByCanceled,
    searchById,
    searchMultiAvail,
    searchArchivedById
}