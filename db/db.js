// // establish connection with database using Knex ORM
// var knex = require('knex')({
//   client: 'pg',
//   connection: {
//     host: '127.0.0.1',
//     port: '5437',
//     user: 'postgres',
//     password: '',
//     database: 'regal-events-center-database'
//   }
// })

// for production database: establish connection with database using Knex ORM
var knex = require('knex')({
  client: 'pg',
  connection: 'postgres://foebrtpffobifj:014530deb0ab7d7a01ec5e7392a4f6b44c645e6a31bef640c10312980e2bae24@ec2-107-20-243-220.compute-1.amazonaws.com:5432/d6o9t4b4gd3lni',
  migrations: {
    tableName: 'knex_migrations'
  },
  ssl: true
})


module.exports = knex
