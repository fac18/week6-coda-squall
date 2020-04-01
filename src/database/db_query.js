const fs = require('fs')
const dbConnection = require('./db_connection')

const dbQuery = (sqlCmd, cb) => {
  dbConnection.query(sqlCmd, cb)
}

module.exports = dbQuery
