const jwtToken = require('jsonwebtoken');
const secrets = require('../secrets.js');

function token(user){
    const payload = user;
    const options = { expiresIn: '1h'}

    return jwtToken.sign(payload, secrets.jwtSecret, options)
}

module.exports = token