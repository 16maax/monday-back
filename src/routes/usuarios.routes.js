import { Router } from 'express'
import { postUsuarios, getUsuarios } from '../controllers/usuarios.controller.js'

const router = Router()

router.post('/usuarios', postUsuarios)
router.get('/usuario', getUsuarios)

export default router