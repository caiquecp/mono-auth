import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import pinoHttp from 'pino-http'

import logger from './logger.js'
import errorHandler from './middlewares/errorHandler.js'
import createUserRepository from './repositories/user.js'
import createHealthRouter from './routes/health.js'
import createUserRouter from './routes/user.js'
import createUserService from './services/user.js'

const createServer = ({}) => {
  // create user's router dependencies
  const userRepository = createUserRepository()
  const userService = createUserService(userRepository)

  // create and configure (Express) app
  const app = express()

  // middlewares
  app.use(helmet())
  app.use(cors())
  app.use(express.json())
  app.use(pinoHttp({ logger }))

  // routes
  app.use('/health', createHealthRouter())
  app.use('/user', createUserRouter(userService))

  // error handler (middleware)
  app.use(errorHandler)

  return app
}

export default createServer
