module.exports = {
    jwtSecret: process.env.JWT_SECRET,
    PORT: process.env.DATABASE_PORT || 5432,
    env: process.env.DATABASE_ENV || 'development'
}