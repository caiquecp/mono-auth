import express from 'express'
import { StatusCodes } from 'http-status-codes'

import logger from '../logger.js'

const createRouter = (userService) => {
  const router = express.Router()

  router.get('/', async (req, res, next) => {
    try {
      const users = await userService.getAll()
      const usersWrapper = { items: users }
      res.json(usersWrapper)
    } catch (err) {
      logger.error(err)
      next(err)
    }
  })

  router.post('/register', async (req, res, next) => {
    try {
      const input = { ...req.body }
      const newUser = await userService.register(input)
      res.status(StatusCodes.CREATED).json(newUser)
    } catch (err) {
      logger.error(err)
      next(err)
    }
  })

  return router
}

export default createRouter
