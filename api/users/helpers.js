const db = require('../../data/KnexConfig.js');

const GetByUserEmail = email=> {
    return db('users').where(email)
};


const GetAllUsers = () => {
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
            'email',

        )
        .where(filter)
};

const addUser = userObj => {
    return (
        db('users')
            .insert(userObj, 'id')
            .then(( [id] )=> {
                return fetchUser({ id })
            })
    )
};

const updateUser = (id, updatedUser) => {
    return db('users').where({id}).update(updatedUser, 'id')
}

const deleteUser = filter => {
    return db('users').where(filter).del()
}

module.exports = {
    addUser,
    fetchUser,
    searchByCity,
    GetByUserEmail,
    GetAllUsers,
    searchByName
}