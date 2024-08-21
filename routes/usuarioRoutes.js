// Importa el módulo express
import express from 'express'
import { formularioLogin,formularioRegistrar,formOlvidePassword,registrar } from '../controllers/usuarioController.js';

const router = express.Router();

// Define una ruta básica
router.get('/login',  formularioLogin);

router.get('/registro',  formularioRegistrar);
router.post('/registrar',  registrar);

router.get('/olvide-password',  formOlvidePassword);


export default router