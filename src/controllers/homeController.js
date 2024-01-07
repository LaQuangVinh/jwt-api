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
const handleCreateNewUser = (req, res) => {
  const email = req.body.email
  const password = req.body.password
  const username = req.body.username

  userService.handleCreateNewUser(email, password, username)

  return res.redirect('/users')
}

// [DELETE] /users/delete-user/:id
const handleDeleteNewUser = async (req, res) => {
  await userService.handleDeleteNewUser(req.params.id)
  return res.redirect('/users')
}

export const homeController = {
  handleHomePage,
  handleUserPage,
  handleCreateNewUser,
  handleDeleteNewUser
}
