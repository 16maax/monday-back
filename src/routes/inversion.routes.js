import { Router } from 'express'
import { postInversiones, getInversiones, getSumaInversiones, getSumaFacturacion, getSumaPropuesta, putInversiones, deleteInversiones, getInversion } from '../controllers/inversion.controller.js'

const router = Router()

router.post('/inversion', postInversiones)
router.get('/inversiones', getInversiones)
router.get('/sinversiones', getSumaInversiones)
router.get('/sfacturacion', getSumaFacturacion)
router.get('/spropuesta', getSumaPropuesta)
router.patch('/actinversion/:idInversion', putInversiones)
router.delete('/delinversion/:id', deleteInversiones)
router.get('/inversionn/:id', getInversion)

export default router