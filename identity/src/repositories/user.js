import logger from '../logger.js'
import * as db from './sqlite/db.js'

const mapDbToUser = (row) => ({
  id: row.id,
  email: row.email,
})

const createRepository = () => {
  /**
   * Get user by email.
   * @param {string} email
   * @returns {Promise<object>}
   */
  const getByEmail = async (email) => {
    const query = 'select id, email from users where email = $email'
    const row = await db.get(query, { $email: email })
    return mapDbToUser(row)
  }

  /**
   * Get all users.
   * @returns {Promise<object[]>}
   */
  const getAll = async () => {
    const query = 'select id, email from users'
    const rows = await db.getAll(query)
    return rows.map(mapDbToUser)
  }

  /**
   * Add a new user.
   * @param {object} user
   * @returns {Promise<void>}
   */
  const add = async (user) => {
    const query = 'insert into users (email, password) values ($email, $password)'
    await db.runPreparedStatement(query, { $email: user.email, $password: user.password })
  }

  return {
    getByEmail,
    getAll,
    add,
  }
}

export default createRepository
