import bcrypt from 'bcryptjs'
import connectionDB from '../utils/connectionDB'
// import bluebird from 'bluebird'

// Store hash in your password DB.
const salt = bcrypt.genSaltSync(10)
const hashPassword = (password) => {
  const hashPass = bcrypt.hashSync(password, salt)
  return hashPass
}

const handleCreateNewUser = async (email, password, username) => {
  const hashPass = hashPassword(password)
  // Create the connection to database
  const connection = await connectionDB()
  const [row, fields] = await connection.execute(
    'INSERT INTO users (email, password, username) VALUES (?, ?, ?)',
    [email, hashPass, username]
  )

  return row
}

const handleDeleteNewUser = async (id) => {
  // Create the connection to database
  const connection = await connectionDB()
  const [row, fields] = await connection.execute(
    'DELETE FROM users WHERE id = ?',
    [id]
  )

  return row
}

const getUserList = async () => {
  // Create the connection to database
  const connection = await connectionDB()
  const [row, fields] = await connection.execute('SELECT * FROM users')
  return row
}

export const userService = {
  handleCreateNewUser,
  getUserList,
  handleDeleteNewUser
}
