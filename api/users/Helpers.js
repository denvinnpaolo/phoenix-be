const db = require('../../data/KnexConfig.js');

const getByUserEmail = email=> {
    return db('users').where(email)
};


const getAllUsers = () => {
    return db('users')
}


const searchByName = name => {
    return db('users')
        .where(name)
};

const searchByCity = city => {
    return db('users')
        .orderBy('id', 'asc')
        .where(city)
};

const fetchUser = filter => {
    console.log(filter)
    return db('users')
        .select(
            'id',
            'type',
            'company_name',
            'company_size',
            'website',
            'address',
            'city',
            'state',
            'country',
            'name',
            'phone',
            'email'
        )
        .where(filter)
};

const addUser = userObj => {
    console.log('database-> addUser-> object: ', userObj)
    return (
        db('users')
            .insert(userObj, 'id')
            .then(( [id] )=> {
                return fetchUser({ id })
            })
    )
};

const updateUser = (id, updatedUser) => {
    // console.log('db -> updateUser -> updatedUser: ', updatedUser)
    // console.log('db -> updateUser -> id: ', {id})

    return(
        db('users')
            .where({id})
            .update(updatedUser, 'email')
    )
}

const deleteUser = filter => {
    return db('users').where(filter).del()
}

module.exports = {
    addUser,
    fetchUser,
    searchByName,
    searchByCity,
    getByUserEmail,
    getAllUsers,
    updateUser,
    deleteUser
}
