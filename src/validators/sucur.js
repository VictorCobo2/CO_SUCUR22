const { check } = require('express-validator');
const { validateResult } = require('../helpers/validateHelper')


const validateCreate = [
    check('codsucur')
    .exists()
    .not()
    .isEmpty()
    .custom((value, {req})=>{
        if(value.trim()==""){
            throw new Error('No puede ser un valor vacio')
        }
        return true
    }),
    (req, res, next) =>{
        validateResult(req, res, next)
    }
]

module.exports = {validateCreate}