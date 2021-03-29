const path = require('path')
module.exports = {
  development: {
    client: 'pg',
    connection: {
      user: 'postgres',
      password: 'admin',
      host: 'localhost',
      port: 5432,
      database: 'csv',
    },
    migrations: {
      directory: path.join(__dirname,'/server/db/migrations')
    },
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
