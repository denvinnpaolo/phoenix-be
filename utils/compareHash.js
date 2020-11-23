const bcrypt = require('bcryptjs');

module.exports = compareHash = (bodyPass, DBpass) =>{bcrypt.compareSync(bodyPass, DBpass)};