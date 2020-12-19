module.exports = {
    jwtSecret: process.env.JWT_SECRET,
    PORT: process.env.DB_PORT || 25060,
    env: process.env.DATABASE_ENV || 'development'
}