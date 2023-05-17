import { createPool } from "mysql2"

createPool ({
    host: 'localhost',
    user: 'root',
    password: 'cascarr16',
    port: 3306,
    database: 'nombre_db'
})