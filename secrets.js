require('dotenv').config()
module.exports = {
    jwtSecret: process.env.JWT_SECRET,
    PORT: process.env.PORT,
    env: process.env.DB_ENV || "development"
}