const { check } = require('express-validator');
const { validateResult } = require('../helpers/validateHelper')
const { validarExistencia } = require('../validators/global')

let ubicacion ,direct, subdirect, paisCiu, actbarrios;

const validateCreate = [

    check('ubicacion')
    .isLength({max:20})
    


    ,check('direct','subdirect')
    .exists()
    .isLength({max:10})
     
    ,check('pais')
    .exists()
    .not()
    .isEmpty()
    .isLength({max:3})

    ,check('cod')
    .exists()
    .isLength({min: 2})
    .isObject()

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
     .isLength({max:20}),


    check('direct','subdirect')
    .isLength({max:10})
     
    ,check('pais')
    .isLength({max:3})

    

    ,check('increm')
    //.isNumeric()
    .isLength({max:1}),

    (req, res, next) =>{
        req.body.actbarrios = actbarrios
        req.body.ubicacion = ubicacion
        validateResult(req, res, next)
    }
]


module.exports = {validateCreate, ValidateEdit}