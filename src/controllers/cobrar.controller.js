import { pool } from '../db.js'

export const postCobrar = async (req, res) => {
    const {Factura, Estado, Cliente, Pesos, Dolares, Cronograma, Anticipo, Cantidad_Anticipo} = req.body
    try {
        const [rows] = await pool.query('INSERT INTO cobrar (Factura, Estado, Cliente, Pesos, Dolares, Cronograma, Anticipo, Cantidad_Anticipo) VALUES (?,?,?,?,?,?,?,?)', [Factura, Estado, Cliente, Pesos, Dolares, Cronograma, Anticipo, Cantidad_Anticipo])
        res.send({
            id: rows.insertId,
            Factura, 
            Estado, 
            Cliente, 
            Pesos, 
            Dolares, 
            Cronograma, 
            Anticipo, 
            Cantidad_Anticipo
        }) 
    } catch (error) {
        return res.status(500).json({
            message:'Algo salio mal'
        })
    }
}

export const getCobrar = async (req, res) => {
    try {
    const [rows] = await pool.query('SELECT * FROM cobrar')
    res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message:'Algo salio mal'
        })
    }
}

export const getSumaPesos = async (req, res) => {
    try {
    const [rows] = await pool.query('SELECT SUM(Pesos) AS TotalPesos FROM cobrar')
    res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message:'Algo salio mal'
        })
    }
}

export const getSumaDolares = async (req, res) => {
    try {
    const [rows] = await pool.query('SELECT SUM(Dolares) AS TotalDolares FROM cobrar')
    res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message:'Algo salio mal'
        })
    }
}

export const getSumaAnticipo = async (req, res) => {
    try {
    const [rows] = await pool.query('SELECT SUM(Cantidad_Anticipo) AS TotalAnticipo FROM cobrar')
    res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message:'Algo salio mal'
        })
    }
}

export const putCobrar = async (req, res) => {
    const {idCobrar} = req.params
    const {Factura, Estado, Cliente, Pesos, Dolares, Cronograma, Anticipo, Cantidad_Anticipo} = req.body
    try {
    const [result] = await pool.query('UPDATE cobrar SET Factura = IFNULL(?, Factura), Estado = IFNULL(?, Estado), Cliente = IFNULL(?, Cliente), Pesos = IFNULL(?, Pesos), Dolares = IFNULL(?, Dolares), Cronograma = IFNULL(?, Cronograma), Anticipo = IFNULL(?, Anticipo), Cantidad_Anticipo = IFNULL(?, Cantidad_Anticipo)  WHERE idCobrar = ?', [Factura, Estado, Cliente, Pesos, Dolares, Cronograma, Anticipo, Cantidad_Anticipo, idCobrar])
    console.log(result)
    if(result === 0) return res.status(404).json({
        message:'Cobrar no actualizada'
    })
    res.json('Actualizada')
    } catch (error) {
        return res.status(500).json({
            message:'Algo salio mal'
        })
    }
}

export const deleteCobrar = async (req, res) => {
    try {
    const result = await pool.query('DELETE FROM cobrar WHERE idCobrar = ?', [req.params.id])
    if (result.affectedRows <= 0) return res.status(404).json({
        message: 'Cobrar no encontrada'
    })
    res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message:'Algo salio mal',
            error :error
        }) 
    }
} 

export const getCobrarr = async (req, res) => {
    try {
    const [rows] = await pool.query('SELECT * FROM cobrar WHERE idCobrar = ?', [req.params.id])
    if (rows.length <= 0) return res.status(404).json({
        message: 'Cobrar no encontrada'
    })
    res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message:'Algo salio mal'
        })
    }
}