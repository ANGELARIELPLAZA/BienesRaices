import { check, validationResult } from "express-validator"
import Usuario from "../models/Usuario.js"

const formularioLogin = (req, res) => {
    res.render('auth/login',
        {
            autenticado: true,
            pagina: "Iniciar sesion"
        })
}
const formularioRegistrar = (req, res) => {
    res.render('auth/registro', {
        pagina: "Crear cuenta"
    })
}
const registrar = async (req, res) => {
    await check('nombre')
        .notEmpty().withMessage('El nombre no puede ir vacío').isLength({ min: 3 }).withMessage('El nombre debe tener al menos 3 caracteres').run(req)

    await check('email')
        .notEmpty().withMessage('El email no puede ir vacío').isEmail().withMessage('Debe proporcionar un email válido').run(req)

    await check('password')
        .notEmpty().withMessage('La contraseña no puede ir vacía').isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres').run(req)
    await check('repetir_password')
        .equals('password').withMessage('La contraseña no es igual').run(req)

    let resultado = validationResult(req)
    if (!resultado.isEmpty()) {
        return res.render('auth/registro', {
            pagina: "Crear cuenta",
            errores: resultado.array()

        })
    }
    return
    res.json(resultado.array())
    const usuario = await Usuario.create(req.body);
    res.json(usuario)
}
const formOlvidePassword = (req, res) => {
    res.render('auth/olvide-password', {
        pagina: "Recuperar cuenta"
    })
}
export {
    formularioLogin,
    formularioRegistrar,
    registrar,
    formOlvidePassword
} 