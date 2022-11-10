import { validationResult } from "express-validator";

export const validationResultExpress = (req, res, next) => {
    const errors = validationResult(req); 
      
    if(!errors.isEmpty())
    {
        console.log(errors);
        return res
            .status(400)
            .json({
                errors: errors.array(),
                request: req.body,
            })
    }

    next();
}

// export const emailValidation = async (req, res, next) => {
//    let result =  await body("email", "Formato de e-mail incorrecto").trim().isEmail().normalizeEmail()
//    console.log(result)
//     return true;
// }