import express from 'express'

const router = express.Router()

/**
 * @param {*} app : express app
 */

const initWebRoutes = (app) => {
  router.get('/', (req, res) => {
    return res.send('<h1>LaQuangVinh huhu</h1>')
  })

  app.use('/', router)
}

export default initWebRoutes
