module.exports = {
    jwtSecret: process.env.JWT_SECRET,
    PORT: process.env.PORT || 5000,
    env: process.env.DB_ENV || "development"
}