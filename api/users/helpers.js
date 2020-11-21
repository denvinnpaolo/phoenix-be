const db = require('../../data/KnexConfig.js');

const searchByEmail = email => {
    return db('users')
        .join('waste_transformers')
        .join('waste_producers')
        .where(email)
};

const searchByName = name => {
    return db('users')
        .join('waste_transformers')
        .join('waste_producers')
        .where(name)
};

const searchByCity = name => {
    return db('waste_transformers')
        .join('waste_producers')
        .orderBy('id', 'asc')
        .where(city)
};

const fetchOrg = filter => {
    return db('waste_transformers')
        .join('waste_producers')
        .where(filter)
};

const fetchUser = filter => {
    return db('users').where(filter)
};

const addOrg = orgObj => {
    return (
        db(`${orgObj.type}`)
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
            .then([id] => {
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
    searchByEmail,
    searchByName
}