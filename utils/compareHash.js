const bcrypt = require('bcryptjs');

module.exports = compareHash = (bodyPass, DBpass) => { 
    return bcrypt.compareSync(bodyPass, DBpass)
};