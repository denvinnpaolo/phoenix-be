module.exports = {
    jwtSecret: process.env.JWT_SECRET,
    PORT: process.env.DB_PORT,
    env: process.env.DB_ENV || 'production'
}