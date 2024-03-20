import {config} from 'dotenv'

config()

export const PORT = process.env.PORT || 3000
export const DB_USER = process.env.DB_USER || 'podermuj_admin_monday'
export const DB_PASSWORD = process.env.DB_PASSWORD || 'N&4Uq12DcbIH'
export const DB_HOST = process.env.DB_HOST || '162.241.61.125'
export const DB_DATABASE = process.env.DB_DATABASE || 'podermuj_db_monday'
export const DB_PORT = process.env.DB_PORT || 3306