import config from './src/config.js'
import logger from './src/logger.js'
import createServer from './src/server.js'

const server = createServer({})
server.listen(config.PORT, () =>
  logger.info(`Server is running at http://localhost:${config.PORT}`)
)