import { ReasonPhrases, StatusCodes } from 'http-status-codes'

/**
 * Error handler for Express. The default behavior is to set 500 for (HTTP) status
 * and some generic server error response.
 */
const errorHandler = (err, req, res, next) => {
  res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ message: ReasonPhrases.INTERNAL_SERVER_ERROR })
    .end()
}

export default errorHandler
