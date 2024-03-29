import { pool } from '../db.js'

export const postInversiones = async (req, res) => {
    const {Descripcion, Estado, Inversion, Facturacion, Interes} = req.body
    try {
        const [rows] = await pool.query('INSERT INTO inversion (Descripcion, Estado, Inversion, Facturacion, Interes) VALUES (?,?,?,?,?)', [Descripcion, Estado, Inversion, Facturacion, Interes])
        res.send({
            id: rows.insertId,
            Descripcion, 
            Estado, 
            Inversion, 
            Facturacion, 
            Interes
        }) 
    } catch (error) {
        return res.status(500).json({
            message:'Algo salio mal'
        })
    }
}

export const getInversiones = async (req, res) => {
    try {
    const [rows] = await pool.query('SELECT * FROM inversion')
    res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message:'Algo salio mal'
        })
    }
}

export const getSumaInversiones = async (req, res) => {
    try {
    const [rows] = await pool.query('SELECT SUM(Inversion) AS TotalInversiones FROM inversion')
    res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message:'Algo salio mal'
        })
    }
}

export const getSumaFacturacion = async (req, res) => {
    try {
    const [rows] = await pool.query('SELECT SUM(Facturacion) AS TotalFacturacion FROM inversion')
    res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message:'Algo salio mal'
        })
    }
}

export const getSumaPropuesta = async (req, res) => {
    try {
    const [rows] = await pool.query('SELECT SUM(Interes) AS TotalInteres FROM inversion')
    res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message:'Algo salio mal'
        })
    }
}

export const putInversiones = async (req, res) => {
    const {idInversion} = req.params
    const {Descripcion, Estado, Inversion, Facturacion, Interes} = req.body
    try {
    const [result] = await pool.query('UPDATE inversion SET Descripcion = IFNULL(?, Descripcion), Estado = IFNULL(?, Estado), Inversion = IFNULL(?, Inversion), Facturacion = IFNULL(?, Facturacion), Interes = IFNULL(?, Interes)  WHERE idInversion = ?', [Descripcion, Estado, Inversion, Facturacion, Interes, idInversion])
    console.log(result)
    if(result === 0) return res.status(404).json({
        message:'Inversion no actualizada'
    })
    res.json('Actualizada')
    } catch (error) {
        return res.status(500).json({
            message:'Algo salio mal'
        })
    }
}

export const deleteInversiones = async (req, res) => {
    try {
    const result = await pool.query('DELETE FROM inversion WHERE idInversion = ?', [req.params.id])
    if (result.affectedRows <= 0) return res.status(404).json({
        message: 'Inversion no encontrada'
    })
    res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message:'Algo salio mal',
            error :error
        }) 
    }
} 

export const getInversion = async (req, res) => {
    try {
    const [rows] = await pool.query('SELECT * FROM inversion WHERE idInversion = ?', [req.params.id])
    if (rows.length <= 0) return res.status(404).json({
        message: 'Inversion no encontrada'
    })
    res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message:'Algo salio mal'
        })
    }
}