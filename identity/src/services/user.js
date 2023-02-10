import { hashPassword } from '../auth.js'
import { registerUserSchema } from '../schemas/user.js'

const createService = () => {
  const register = (registerUserInput) => {
    const { error, value: input } = registerUserSchema.validate(registerUserInput, {
      abortEarly: false,
    })

    if (error) {
      throw new Error(error.message)
    }

    const hashedPassword = hashPassword(input.password)
    const user = {
      email: input.email,
      password: hashedPassword,
    }

    /**
     * TODO:
     * 1. save user in the database
     * 2. load user (with id), and return it to client
     */
  }

  return {
    register,
  }
}

export default createService
