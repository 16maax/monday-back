import { pool } from '../db.js'

export const postUsuarios = async (req, res) => {
    const {Nom_Usuario, Contraseña} = req.body
    try {
        const [rows] = await pool.query('INSERT INTO usuarios (Nom_Usuario, Contraseña) VALUES (?,sha1(?))', [Nom_Usuario, Contraseña])
        res.send({
            id: rows.insertId,
            Nom_Usuario,
            Contraseña
        }) 
    } catch (error) {
        return res.status(500).json({
            message:'Algo salio mal'
        })
    }
}

export const getUsuarios = async (req, res) => {
    try {
    const [rows] = await pool.query('SELECT * FROM usuarios')
    res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message:'Algo salio mal'
        })
    }
}