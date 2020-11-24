const db = require('../../data/KnexConfig.js');

const GetByEmail = email=> {
    return db('users').where(email)
};

const GetAllUsers = () => {
    return db('users')
}

const GetAllOrgs = () => {
    return db('orgs')
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
            'id',
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
    return db('users')
        .select(
            'id',
            'type',
            'email',
            'name',
            'job',
            'phone',
            'company_id'

        )
        .where(filter)
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
    return (
        db('users')
            .insert(userObj, 'id')
            .then(( [id] )=> {
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
    GetAllOrgs,
    searchByName
}