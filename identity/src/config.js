import * as dotenv from 'dotenv'

dotenv.config()

const config = {
  PORT: Number(process.env['PORT']),
  LOG_LEVEL: process.env['LOG_LEVEL'] || 'info',
  SAUCE: process.env['SAUCE'],
}

export default config
