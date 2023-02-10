import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import pinoHttp from 'pino-http'

import logger from './logger.js'
import errorHandler from './middlewares/errorHandler.js'
import { createRouter as createHealthRouter } from './routes/health.js'

const createServer = ({}) => {
  const app = express()

  // middlewares
  app.use(helmet())
  app.use(cors())
  app.use(express.json())
  app.use(pinoHttp({ logger }))

  // routes
  app.use('/health', createHealthRouter())

  // error handler (middleware)
  app.use(errorHandler)

  return app
}

export default createServer
