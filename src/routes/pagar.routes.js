import { Router } from 'express'
import { postPagar, getPagar, getSumaAnticipoo, getSumaDolaress, getSumaPesoss, getPagarr, putPagar, deletePagar } from '../controllers/pagar.controller.js'

const router = Router()

router.post('/pagarr', postPagar)
router.get('/pagar', getPagar)
router.get('/supesos', getSumaPesoss)
router.get('/sudolares', getSumaDolaress)
router.get('/suanticipo', getSumaAnticipoo)
router.get('/cpagar/:id', getPagarr)
router.patch('/actpagar/:idPagar', putPagar)
router.delete('/delpagar/:id', deletePagar)

export default router 