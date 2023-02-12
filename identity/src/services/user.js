import { hashPassword } from '../auth.js'
import { registerUserSchema } from '../schemas/user.js'

const createService = (userRepository) => {
  const getAll = async () => {
    return userRepository.getAll()
  }

  /**
   * Register a new user.
   * @param {object} registerUserInput
   * @returns {Promise<object>} The new user.
   */
  const register = async (registerUserInput) => {
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

    await userRepository.add(user)

    return userRepository.getByEmail(user.email)
  }

  return {
    getAll,
    register,
  }
}

export default createService
