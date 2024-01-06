import { userService } from '../services/userService'

const handleHomePage = (req, res) => {
  return res.render('home.ejs')
}

const handleUserPage = (req, res) => {
  return res.render('user.ejs')
}

const handleCreateNewUser = (req, res) => {
  const email = req.body.email
  const password = req.body.password
  const username = req.body.username

  // userService.handleCreateNewUser(email, password, username)
  userService.getUserList()

  return res.redirect('/')
}

export const homeController = {
  handleHomePage,
  handleUserPage,
  handleCreateNewUser
}
