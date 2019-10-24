const express = require('express')
const serveStatic = require('serve-static')
const bodyParser = require('body-parser')
// const cors = require('cors')
const morgan = require('morgan')
const path = require('path')
const port = process.env.PORT || 8080
const app = express()

// establish connection with database using Knex ORM
var knex = require('knex')({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    port: '5437',
    user: 'postgres',
    password: '',
    database: 'contact-manager-database'
  }
})

// // for production database
// var knex = require('knex')({
//   client: 'pg',
//   connection: 'postgres://foebrtpffobifj:014530deb0ab7d7a01ec5e7392a4f6b44c645e6a31bef640c10312980e2bae24@ec2-107-20-243-220.compute-1.amazonaws.com:5432/d6o9t4b4gd3lni',
//   migrations: {
//     tableName: 'knex_migrations'
//   },
//   ssl: true
// })

app.use(morgan('combined'))
app.use(bodyParser.json())

//here we are configuring dist to serve app files
// app.use(serveStatic(path.join(__dirname, '/dist')))
app.use('/', serveStatic(path.join(__dirname, '/dist')))

// require('./routes')(app, knex)

app.listen(port)

console.log(`app is listening on port: ${port}`)
