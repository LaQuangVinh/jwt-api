import { userService } from '../services/userService'

const handleHomePage = (req, res) => {
  return res.render('home.ejs')
}

// [GET] /users
const handleUserPage = async (req, res) => {
  const userList = await userService.getUserList()
  return res.render('user.ejs', { userList })
}

// [POST] /users/create-user
const handleCreateNewUser = async (req, res) => {
  const email = req.body.email
  const password = req.body.password
  const username = req.body.username

  await userService.handleCreateNewUser(email, password, username)

  return res.redirect('/users')
}

// [DELETE] /users/delete-user/:id
const handleDeleteNewUser = async (req, res) => {
  await userService.handleDeleteNewUser(req.params.id)
  return res.redirect('/users')
}

// [GET] /users/update-user/:id
const handleUpdateNewUser = async (req, res) => {
  const user = await userService.getUserById(req.params.id)
  console.log(
    '🚀 ~ file: homeController.js:33 ~ handleUpdateNewUser ~ user:',
    user
  )
  return res.render('updateUser.ejs', { user })
}

// [PATCH] /users/update-user/:id
const handleUpdateNewUserSubmit = async (req, res) => {
  const id = req.params.id
  const email = req.body.email
  const username = req.body.username

  await userService.updateUserById(id, email, username)

  return res.redirect('/users')
}

export const homeController = {
  handleHomePage,
  handleUserPage,
  handleCreateNewUser,
  handleDeleteNewUser,
  handleUpdateNewUser,
  handleUpdateNewUserSubmit
}
