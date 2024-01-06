import bcrypt from 'bcryptjs'
import mysql from 'mysql2'
import { env } from '../configs/environment'

// create the connection to database
const connection = mysql.createConnection({
  host: env.LOCAL_DEV_APP_HOST,
  user: 'root',
  database: 'jwt'
})

// Store hash in your password DB.
const salt = bcrypt.genSaltSync(10)

const hashPassword = (password) => {
  const hashPass = bcrypt.hashSync(password, salt)
  return hashPass
}

const handleCreateNewUser = (email, password, username) => {
  const hashPass = hashPassword(password)

  connection.query(
    'INSERT INTO users (email, password, username) VALUES (?, ?, ?)',
    [email, hashPass, username],
    function (err, results, fields) {
      if (err) {
        console.log('🚀 ~ file: userService.js:28 ~ err:', err)
      }
    }
  )
}

const getUserList = () => {
  let userList
  connection.query('SELECT * FROM users', function (err, results, fields) {
    if (results) {
      console.log('🚀 ~ file: userService.js:38 ~ results:', results)
    }
  })
}

export const userService = {
  handleCreateNewUser,
  getUserList
}
