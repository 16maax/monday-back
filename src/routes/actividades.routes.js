import { Router } from 'express'
import { postActividades, getActividades, putActividades, getActividad, deleteActividad } from '../controllers/actividades.controller.js'

const router = Router()

router.post('/actividadd', postActividades)
router.get('/actividades', getActividades)
router.get('/actividad/:id', getActividad)
router.patch('/actividaddd/:idActividad', putActividades)
router.delete('/dactividad/:id', deleteActividad)

export default router