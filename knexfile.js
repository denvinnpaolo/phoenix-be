/* // Update with your config settings. */

require('dotenv').config();
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

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
    connection: "postgresql://doadmin:yhhvgk4p5de1z946@db-postgresql-sfo3-14857-do-user-8447850-0.b.db.ondigitalocean.com:25061/defaultdb?sslmode=require",
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  },
  
  production: {
    client: "pg",
    // connection: {
    //   database: process.env.DATABASE_NAME,
    //   user: process.env.DATABASE_USERNAME,
    //   password: process.env.DATABASE_PASSWORD,
    //   port: process.env.DATABASE_PORT,
    //   host: process.env.DATABASE_URL1,
    //   ssl:true
    // },
    ssl: true,
    // connection: process.env.DATABASE_URL2,
    connection: process.env.DATABASE_URL,
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