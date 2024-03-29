import express from 'express'
import { homeController } from '../controllers/homeController'

const router = express.Router()

/**
 * @param {*} app : express app
 */

const initWebRoutes = (app) => {
  router.get('/', homeController.handleHomePage)
  router.get('/users', homeController.handleUserPage)
  router.post('/users/create-user', homeController.handleCreateNewUser)
  router.delete('/users/delete-user/:id', homeController.handleDeleteNewUser)
  router.get('/users/update-user/:id', homeController.handleUpdateNewUser)
  router.patch(
    '/users/update-user/:id',
    homeController.handleUpdateNewUserSubmit
  )

  app.use('/', router)
}

export default initWebRoutes
