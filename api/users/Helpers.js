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

const searchByCity = name => {
    return db('users')
        .orderBy('id', 'asc')
        .where(city)
};

const fetchUser = filter => {
    return db('users')
        .select(
            'id',
            'type',
            'company_name',
            'company_size',
            'website',
            'company_address',
            'company_phone',
            'name',
            'job_title',
            'phone',
            'email'
        )
        .where(filter)
};

const addUser = userObj => {
    console.log(userObj)
    return (
        db('users')
            .insert(userObj)
            .then(( [id] )=> {
                return fetchUser({ id })
            })
    )
};

const updateUser = (email, updatedUser) => {
    return db('users').where({email}).update(updatedUser, 'id')
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