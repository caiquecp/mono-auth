import express from 'express'
import { ReasonPhrases, StatusCodes } from 'http-status-codes'

const createRouter = () => {
  const router = express.Router()

  // liveness; used to check if application is running
  router.get('/ping', async (req, res) => {
    const content = { message: ReasonPhrases.OK }
    res.status(StatusCodes.OK).json(content).end()
  })

  return router
}

export default createRouter
