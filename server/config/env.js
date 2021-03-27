const env = {
  username: 'postgres',
  password: 'admin',
  host: 'localhost',
  port: 5432,
  database: 'csv',
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
   
  module.exports = env;