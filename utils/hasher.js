const bcrypt = require('bcryptjs');

module.exports = hasher = password => {
    const hash = bcrypt.hashSync(password, 12);
    return hash
}