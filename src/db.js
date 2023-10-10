import { createPool } from "mysql2/promise"

export const pool = createPool ({
    host: '162.241.61.125',
    user: 'podermuj_admin',
    password: '_vowP7ZbfU6Z',
    port: 3306,
    database: 'podermuj_monday'
})
