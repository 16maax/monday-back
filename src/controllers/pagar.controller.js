import { pool } from '../db.js'

export const postPagar = async (req, res) => {
    const {Elemento, Estado, Cliente, Pesos, Dolares, Cronograma, Anticipo, Cantidad_Anticipo} = req.body
    try {
        const [rows] = await pool.query('INSERT INTO pagar (Elemento, Estado, Cliente, Pesos, Dolares, Cronograma, Anticipo, Cantidad_Anticipo) VALUES (?,?,?,?,?,?,?,?)', [Elemento, Estado, Cliente, Pesos, Dolares, Cronograma, Anticipo, Cantidad_Anticipo])
        res.send({
            id: rows.insertId,
            Elemento, 
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

export const getPagar = async (req, res) => {
    try {
    const [rows] = await pool.query('SELECT * FROM pagar')
    res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message:'Algo salio mal'
        })
    }
}

export const getSumaPesoss = async (req, res) => {
    try {
    const [rows] = await pool.query('SELECT SUM(Pesos) AS TotalPesos FROM pagar')
    res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message:'Algo salio mal'
        })
    }
}

export const getSumaDolaress = async (req, res) => {
    try {
    const [rows] = await pool.query('SELECT SUM(Dolares) AS TotalDolares FROM pagar')
    res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message:'Algo salio mal'
        })
    }
}

export const getSumaAnticipoo = async (req, res) => {
    try {
    const [rows] = await pool.query('SELECT SUM(Cantidad_Anticipo) AS TotalAnticipo FROM pagar')
    res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message:'Algo salio mal'
        })
    }
}

export const putPagar = async (req, res) => {
    const {idPagar} = req.params
    const {Elemento, Estado, Cliente, Pesos, Dolares, Cronograma, Anticipo, Cantidad_Anticipo} = req.body
    try {
    const [result] = await pool.query('UPDATE pagar SET Elemento = IFNULL(?, Elemento), Estado = IFNULL(?, Estado), Cliente = IFNULL(?, Cliente), Pesos = IFNULL(?, Pesos), Dolares = IFNULL(?, Dolares), Cronograma = IFNULL(?, Cronograma), Anticipo = IFNULL(?, Anticipo), Cantidad_Anticipo = IFNULL(?, Cantidad_Anticipo)  WHERE idPagar = ?', [Elemento, Estado, Cliente, Pesos, Dolares, Cronograma, Anticipo, Cantidad_Anticipo, idPagar])
    console.log(result)
    if(result === 0) return res.status(404).json({
        message:'Pagar no actualizada'
    })
    res.json('Actualizada')
    } catch (error) {
        return res.status(500).json({
            message:'Algo salio mal'
        })
    }
}

export const deletePagar = async (req, res) => {
    try {
    const result = await pool.query('DELETE FROM pagar WHERE idPagar = ?', [req.params.id])
    if (result.affectedRows <= 0) return res.status(404).json({
        message: 'Pagar no encontrada'
    })
    res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message:'Algo salio mal',
            error :error
        }) 
    }
} 

export const getPagarr = async (req, res) => {
    try {
    const [rows] = await pool.query('SELECT * FROM pagar WHERE idPagar = ?', [req.params.id])
    if (rows.length <= 0) return res.status(404).json({
        message: 'Pagar no encontrada'
    })
    res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message:'Algo salio mal'
        })
    }
}