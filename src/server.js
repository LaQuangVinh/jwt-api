import express from 'express'
import configViewEngine from './configs/viewEngine'
import initWebRoutes from './routes/web'
import { env } from './configs/environment'

const app = express()

// config view engine
configViewEngine(app)

//init web routes
initWebRoutes(app)
app.listen(env.LOCAL_DEV_APP_PORT, () => {
  console.log(
    `Hello, I am running at ${env.LOCAL_DEV_APP_HOST}:${env.LOCAL_DEV_APP_PORT}`
  )
})
