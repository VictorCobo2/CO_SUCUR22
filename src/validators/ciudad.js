const { check } = require('express-validator');
const { validateResult } = require('../helpers/validateHelper')

let ubicacion ,direct, subdirect, paisCiu, actbarriosCiu;

const validateCreate = [

    check('ubicacion')
    .isLength({max:20})
    .custom((value, {req})=>{
        ubicacion = validarEspacio(value)
        return true
    }),


    check('direct','subdirect')
    .exists()
    .isLength({max:10}) 
    

    // ,check('subdirect')
    // .exists()
    // .isLength({max:10})

    
    ,check('pais')
    .exists()
    .not()
    .isEmpty()
    .isLength({max:3})


    ,check('actbarrios')
    .custom((value, {req})=>{
        actbarriosCiu = validarEspacio(value)
        return true
    })
    

    ,check('increm')
    .exists()
    .not()
    .isEmpty()
    .isNumeric()
    .isLength({max:1}),


    // ,check('codCiu')
    // .isObject(),

    (req, res, next) =>{
        req.body.actbarriosCiu = actbarriosCiu
        req.body.ubicacion = ubicacion
        validateResult(req, res, next)
    }
]

function validarEspacio(valor){
    if(valor){
        return valor
    }else{
        return " "
    }
}
module.exports = {validateCreate}