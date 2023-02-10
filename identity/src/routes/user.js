import express from 'express'

const createRouter = (userService) => {
  const router = express.Router()

  router.post('/register', async (req, res) => {
    const input = { ...req.body }
    const user = userService.register()

  })

  return router
}

export default createRouter
