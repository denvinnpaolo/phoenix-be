// // Update with your config settings.


// module.exports = {
//   development: {
//     client: 'sqlite3',
//     connection: {
//       filename: './data/phoenix.db3'
//     },
//     useNullAsDefault: true,
//     pool: {
//       afterCreate: (conn, done) => {
//         conn.run("PRAGMA foreign_keys =ON", done);
//       }
//     },
//     migrations: {
//       directory: "./data/migrations"
//     },
//     seeds: {
//       directory: "./data/seeds"
//     }
//   },

//   staging: {
//     client: 'postgresql',
//     connection: process.env.DATABASE_URL,
//     migrations: {
//       directory: './migrations'
//     },
//     seeds: {
//       directory: './seeds'
//     }
//   },
  
//   production: {
//     client: 'pg',
//     connection: {
//       host: process.env.POSTGRESS_DEV_HOST,
//       port: process.env.POSTGRESS_DEV_PORT,
//       user: process.env.POSTGRESS_DEV_USER,
//       database: process.env.POSTGRESS_DEV_DATABASE,
//       password: process.env.POSTGRESS_DEV_PASSWORD
//     },
//     migrations: {
//       directory: './data/migrations'
//     },
//     seeds: {
//       directory: './data/seeds'
//     }
//   },
// };
module.exports ={
  development: {
    client: 'pg',
    connection: {
        port: process.env.DB_PORT,
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
    },
    useNullAsDefault: true,
    // debug: process.env.NODE_ENV === 'local' ? true : false,
    pool: {
        min: 1,
        max: 100,
        afterCreate: async (conn, done) => {
            console.log('AFTER CREATE DB CONNECTION');
            await conn.query('SET timezone="UTC";');
            done(null, conn);
        }
    },
    migrations: {
        directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  }
}