import bcrypt from 'bcryptjs'
import connectionDB from '../utils/connectDB'
import db from '../models'
// import bluebird from 'bluebird'

// Store hash in your password DB.
const salt = bcrypt.genSaltSync(10)
const hashPassword = (password) => {
  const hashPass = bcrypt.hashSync(password, salt)
  return hashPass
}

const handleCreateNewUser = async (email, password, username) => {
  const hashPass = hashPassword(password)

  await db.User.create({
    email,
    username,
    password: hashPass
  })
}

const handleDeleteNewUser = async (id) => {
  await db.User.destroy({
    where: {
      id
    }
  })
}

const getUserList = async () => {
  // Create the connection to database
  const userList = await db.User.findAll()
  return userList
}

const getUserById = async (id) => {
  const user = await db.User.findOne({
    where: {
      id
    }
  })
  return user
}

const updateUserById = async (id, email, username) => {
  await db.User.update(
    { email, username },
    {
      where: {
        id
      }
    }
  )
}

export const userService = {
  handleCreateNewUser,
  getUserList,
  handleDeleteNewUser,
  getUserById,
  updateUserById
}
