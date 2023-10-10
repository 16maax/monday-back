import { pool } from '../db.js'

export const postActividades = async (req, res) => {
    const {Actividad, Estado, Prioridad, Fecha, idUsuario} = req.body
    try {
        const [rows] = await pool.query('INSERT INTO actividades (Actividad, Estado, Prioridad, Fecha, idUsuario) VALUES (?,?,?,?,?)', [Actividad, Estado, Prioridad, Fecha, idUsuario])
        res.send({
            id: rows.insertId,
            Actividad, 
            Estado, 
            Prioridad, 
            Fecha, 
            idUsuario
        }) 
    } catch (error) {
        return res.status(500).json({
            message:'Algo salio mal'
        })
    }
}

export const getActividades = async (req, res) => {
    try {
    const [rows] = await pool.query('SELECT * FROM actividades')
    res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message:'Algo salio mal'
        })
    }
}

export const getActividad = async (req, res) => {
    try {
    const [rows] = await pool.query('SELECT * FROM actividades WHERE idActividad = ?', [req.params.id])
    if (rows.length <= 0) return res.status(404).json({
        message: 'Actividad no encontrada'
    })
    res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message:'Algo salio mal'
        })
    }
}

export const putActividades = async (req, res) => {
    const {idActividad} = req.params
    const {Actividad, Estado, Prioridad, Fecha, idUsuario} = req.body
    try {
    const [result] = await pool.query('UPDATE actividades SET Actividad = IFNULL(?, Actividad), Estado = IFNULL(?, Estado), Prioridad = IFNULL(?, Prioridad), Fecha = IFNULL(?, Fecha), idUsuario = IFNULL(?, idUsuario)  WHERE idActividad = ?', [Actividad, Estado, Prioridad, Fecha, idUsuario, idActividad])
    console.log(result)
    if(result === 0) return res.status(404).json({
        message:'Actividad no actualizada'
    })
    res.json('Actualizada')
    } catch (error) {
        return res.status(500).json({
            message:'Algo salio mal'
        })
    }
}

export const deleteActividad = async (req, res) => {
    try {
    const result = await pool.query('DELETE FROM actividades WHERE idActividad = ?', [req.params.id])
    if (result.affectedRows <= 0) return res.status(404).json({
        message: 'Actvidad no encontrada'
    })
    res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message:'Algo salio mal',
            error :error
        }) 
    }
} 