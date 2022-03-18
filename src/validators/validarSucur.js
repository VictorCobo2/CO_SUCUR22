const { check } = require('express-validator');
const { validateResult } = require('../helpers/validateHelper')
const { validarExistencia } = require('./global')



const validateCreate = [
    check("codigo").custom((value) => {
        return value.indexOf(" ");
    }),
    (req, res, next) => {
        validateResult(req, res, next);
    }
]

module.exports = {validateCreate}