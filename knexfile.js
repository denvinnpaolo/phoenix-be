/* // Update with your config settings. */

require('dotenv').config();
// process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/phoenix.db3'
    },
    useNullAsDefault: true,
    pool: {
        afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys =ON", done);
      }
    },
    migrations: {
    directory: "./data/migrations"
    },
    seeds: {
    directory: "./data/seeds"
    }
  },

  staging: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  },
  
  production: {
    client: "pg",
    connection: {
      database: process.env.DB_DATABASE,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT,
      host: process.env.DATABASE_URL,
      ssl:true
    },
    useNullAsDefault: true,
    pool: {
      min: 0,
      max: 10
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },
};