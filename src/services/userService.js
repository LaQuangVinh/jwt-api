import bcrypt from 'bcryptjs'
import connectionDB from '../utils/connectDB'
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
    'INSERT INTO User (email, password, username) VALUES (?, ?, ?)',
    [email, hashPass, username]
  )

  return row
}

const handleDeleteNewUser = async (id) => {
  // Create the connection to database
  const connection = await connectionDB()
  const [row, fields] = await connection.execute(
    'DELETE FROM User WHERE id = ?',
    [id]
  )

  return row
}

const getUserList = async () => {
  // Create the connection to database
  const connection = await connectionDB()
  const [row, fields] = await connection.execute('SELECT * FROM User')
  return row
}

const getUserById = async (id) => {
  // Create the connection to database
  const connection = await connectionDB()
  const [row, fields] = await connection.execute(
    'SELECT * FROM User WHERE id = ?',
    [id]
  )
  return row
}

const updateUserById = async (id, email, username) => {
  // Create the connection to database
  const connection = await connectionDB()
  const [row, fields] = await connection.execute(
    'UPDATE User SET email = ?, username = ? WHERE id = ?',
    [email, username, id]
  )
  return row
}

export const userService = {
  handleCreateNewUser,
  getUserList,
  handleDeleteNewUser,
  getUserById,
  updateUserById
}
