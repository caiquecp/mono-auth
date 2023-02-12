import sqlite3 from 'sqlite3'

let db = null

/**
 * Get database (SQLite) instance.
 */
export const getDb = () => (db === null ? new sqlite3.Database(`${process.cwd()}/identity.db`) : db)

/**
 * Run a prepared statement command in the database.
 * @param {string} sql
 * @param {object} params
 * @returns {Promise<void>}
 */
export const runPreparedStatement = async (sql, params) => {
  return new Promise((resolve, reject) => {
    const db = getDb()
    db.prepare(sql, params, (err) => {
      err ? reject(err) : resolve()
    })
  })
}

/**
 * Get a row from a database table.
 * @param {string} sql
 * @param {object} params
 * @returns {Promise<object>}
 */
export const get = async (sql, params) => {
  return new Promise((resolve, reject) => {
    const db = getDb()
    db.get(sql, params, (err, res) => {
      err ? reject(err) : resolve(res)
    })
  })
}

/**
 * Get all rows from a database table.
 * @param {string} sql
 * @param {object} params
 * @returns {Promise<object[]>}
 */
export const getAll = async (sql, params) => {
  return new Promise((resolve, reject) => {
    const db = getDb()
    db.all(sql, params, (err, res) => {
      err ? reject(err) : resolve(res)
    })
  })
}
