// Contexts
import { AuthData } from '../contexts/Auth'

const SignIn = async (email: string, password: string): Promise<AuthData> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (password === 'johndoe123') {
        resolve({
          token: 'fake-token',
          email,
          username: 'John Doe',
        })
      } else {
        reject(new Error('Invalid password'))
      }
    }, 500)
  })
}

export const authService = { SignIn }
