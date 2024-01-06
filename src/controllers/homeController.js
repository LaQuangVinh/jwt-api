import mysql from 'mysql2'
import { env } from '../configs/environment'

// create the connection to database
const connection = mysql.createConnection({
  host: env.LOCAL_DEV_APP_HOST,
  user: 'root',
  database: 'jwt'
})

const handleHomePage = (req, res) => {
  return res.render('home.ejs')
}

const handleUserPage = (req, res) => {
  return res.render('user.ejs')
}

const handleCreateNewUser = (req, res) => {
  let email = req.body.email
  let password = req.body.password
  let username = req.body.username

  connection.query(
    'INSERT INTO users (email, password, username) VALUES (?, ?, ?)',
    [email, password, username],
    function (err, results, fields) {
      console.log(results) // results contains rows returned by server
      console.log(fields) // fields contains extra meta data about results, if available
    }
  )

  return res.send('req')
}

export const homeController = {
  handleHomePage,
  handleUserPage,
  handleCreateNewUser
}
