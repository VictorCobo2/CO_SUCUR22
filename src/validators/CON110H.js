const { check } = require('express-validator');
const { validateResult } = require('../helpers/validateHelper')
const { validarExistencia } = require('./global')

const datosDirect=["ABR","AGT","CIE","CONTROL","DIC","ENE","ENVIOS","FEB","JUL","JUN","MAR","MAY","NOMINA","NOV","OCT","PRE","SEP"," "]



const validateCreate = [

    check('ubicacion')
    .isLength({max:20})
    .withMessage('No puede contener mas de 20 caracteres')


    ,check('subdirect')
    .exists()
    .isLength({max:10})
     
    ,check('direct')
    .custom((value)=>{
        return datosDirect.includes(value)
    })

    ,check('pais')
    .exists()
    .not()
    .isEmpty()
    .isLength({max:3})

    ,check('codCiu')
    .exists()
    .isObject()

    ,check('codCiu.dptCiu')
    .exists()
    .custom((value)=>{
        return value.indexOf(" ")
    })

    ,check('codCiu.ciuCiu')
    .exists()
    .custom((value)=>{
        return value.indexOf(" ")
    })

    ,check('increm')
    .exists()
    .not()
    .isEmpty()
    .isNumeric()
    .withMessage("57")
    .isLength({max:1}),

    (req, res, next) =>{
        validateResult(req, res, next)
    }
]

const ValidateEdit = [
     check('ubicacion')
     .isLength({max:20}),


    check('direct','subdirect')
    .isLength({max:10})
     
    ,check('pais')
    .isLength({max:3})

    

    ,check('increm')
    //.isNumeric()
    .isLength({max:1}),

    (req, res, next) =>{
        validateResult(req, res, next)
    }
]


module.exports = {validateCreate, ValidateEdit}