const db = require('../../data/KnexConfig.js');

const GetByEmail = email=> {
    return db('users').where(email)
};

const GetAllUsers = email => {
    console.log(email)
    return db('users')
}

const searchByName = name => {
    return db('users')
        .join('orgs')
        .where(name)
};

const searchByCity = name => {
    return db('orgs')
        .orderBy('id', 'asc')
        .where(city)
};

const fetchOrg = filter => {
    return db('orgs')
        .select(
            'type',
            'name',
            'email',
            'phone',
            'address',
            'city',
            'zipcode',
            'about',
            'url'
        )
        .where(filter)
};

const fetchUser = filter => {
    console.log(filter)
    return db('users').where(filter)
};

const addOrg = orgObj => {
    return (
        db('orgs')
            .insert(orgObj, 'id')
            .then(([id]) => {
                return fetchOrg({ id })
            })
    )
};

const addUser = userObj => {
    console.log(userObj)
    return (
        db('users')
            .insert(userObj, 'id')
            .then(([id] )=> {
                return fetchUser({ id })
            })
    )
};

module.exports = {
    addOrg,
    addUser,
    fetchOrg,
    fetchUser,
    searchByCity,
    GetByEmail,
    GetAllUsers,
    searchByName
}