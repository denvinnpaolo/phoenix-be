// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    useNullDefault: true,
    connection: {
      host: process.env.POSTGRESS_DEV_HOST,
      port: process.env.POSTGRESS_DEV_PORT,
      user: process.env.POSTGRESS_DEV_USER,
      password: process.env.POSTGRESS_DEV_PASSWORD,
      database: process.env.POSTGRESS_DEV_DATABASE
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
