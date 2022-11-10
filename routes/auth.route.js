import express from 'express'
import { login, register } from '../controllers/auth.controller.js';
import { body } from 'express-validator'
import { validationResultExpress } from '../middlewares/validationResultExpress.js'

const router = express.Router();


router.post("/register", [
    body("email", "Formato de e-mail incorrecto").trim().isEmail().normalizeEmail(),
    body("password", "La longitud del password debe ser de al menos 6 caracteres").trim().isLength({ min: 6 }),
    // body("password", "No coinciden los valores del password").custom((value, {req}) => {
    //     if(value !== req.body.repassword) {
    //             throw new Error("err password");
    //         }
    //         return value;
    //     })
    ],
    validationResultExpress, 
    register)
    
    router.post("/login", [
    //    emailValidation
        body("email", "Formato de e-mail incorrecto").trim().isEmail().normalizeEmail(),
    ], 
    validationResultExpress,
    login)
    
    export default router;