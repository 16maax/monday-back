import { createPool } from "mysql2/promise"

export const pool = createPool ({
    host: '162.241.61.125',
    user: 'podermuj_admin_monday',
    password: 'N&4Uq12DcbIH',
    port: 3306,
    database: 'podermuj_db_monday'
})
