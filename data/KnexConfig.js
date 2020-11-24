const knex = require('knex');
const secret = require('../secrets.js')
const config = require('../knexfile.js')

const env = secret.env

module.exports = knex(config.development)