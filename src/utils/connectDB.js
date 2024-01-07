import mysql from 'mysql2/promise'
import { env } from '../configs/environment'

const connectionDB = async () => {
  const connection = await mysql.createConnection({
    host: env.LOCAL_DEV_APP_HOST,
    user: 'root',
    database: 'jwt'
  })
  return connection
}

export default connectionDB
