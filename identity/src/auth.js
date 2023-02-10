import { compare, hash } from 'bcrypt'

import config from './config.js'

/**
 * Hash password (with salt).
 * @param {string} password
 * @returns {Promise<string>}
 */
export const hashPassword = async (password) => hash(password, config.SAUCE)

/**
 * Compare plain text password with hashed password.
 * @param {string} password
 * @param {string} hashedPassword
 * @returns {Promise<boolean>}
 */
export const comparePassword = async (password, hashedPassword) => compare(password, hashedPassword)
