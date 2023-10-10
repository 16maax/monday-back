import { Router } from 'express'
import { postCobrar, getCobrar, getSumaAnticipo, getSumaDolares, getSumaPesos, getCobrarr, putCobrar, deleteCobrar } from '../controllers/cobrar.controller.js'

const router = Router()

router.post('/cobrarr', postCobrar)
router.get('/cobrar', getCobrar)
router.get('/spesos', getSumaPesos)
router.get('/sdolares', getSumaDolares)
router.get('/santicipo', getSumaAnticipo)
router.get('/ccobrar/:id', getCobrarr)
router.patch('/actcobrar/:idCobrar', putCobrar)
router.delete('/delcobrar/:id', deleteCobrar)

export default router 