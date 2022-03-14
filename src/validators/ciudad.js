const { check } = require('express-validator');
const { validateResult } = require('../helpers/validateHelper')
const { validarExistencia } = require('../validators/global')

let ubicacion ,direct, subdirect, paisCiu, actbarrios;

const validateCreate = [

    check('ubicacion')
    .isLength({max:20})
    .custom((value, {req})=>{
        ubicacion = validarExistencia(value)
        return true
    }),


    check('direct','subdirect')
    .exists()
    .isLength({max:10})
     
    ,check('pais')
    .exists()
    .not()
    .isEmpty()
    .isLength({max:3})


    ,check('actbarrios')
    .custom((value, {req})=>{
        actbarrios = validarExistencia(value)
        return true
    })
    

    ,check('increm')
    .exists()
    .not()
    .isEmpty()
    .isNumeric()
    .isLength({max:1}),

    (req, res, next) =>{
        req.body.actbarrios = actbarrios
        req.body.ubicacion = ubicacion
        validateResult(req, res, next)
    }
]

const ValidateEdit = [
    check('ubicacion')
    .isLength({max:20})
    .custom((value, {req})=>{
        ubicacion = validarExistencia(value)
        return true
    }),


    check('direct','subdirect')
    .isLength({max:10})
     
    ,check('pais')
    .isLength({max:3})


    ,check('actbarrios')
    .custom((value, {req})=>{
        actbarrios = validarExistencia(value)
        return true
    })
    

    ,check('increm')
    //.isNumeric()
    .isLength({max:1}),

    (req, res, next) =>{
        req.body.actbarrios = actbarrios
        req.body.ubicacion = ubicacion
        validateResult(req, res, next)
    }
]

// function validarExistencia(valor){
//     if(valor){
//         return valor
//     }else{
//         return " "
//     }
// }
module.exports = {validateCreate, ValidateEdit}