module.exports = {
    development: {
      client: 'sqlite3',
      connection: {
        filename: './dev.sqlite3'
      },
      useNullAsDefault: true,
      migrations: {
        tableName: 'knex_migrations',
        directory: `${__dirname}/src/database/migrations`
      },
      seeds: {
        directory: `${__dirname}/src/database/seeds`
      }
    },
  
    production: {
      client: 'sqlite3',
      connection: {
        filename: './prod.sqlite3'
      },
      useNullAsDefault: true,
      migrations: {
        directory: './migrations' 
      }
    }
  };
  