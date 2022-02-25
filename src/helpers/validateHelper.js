const { validationResult } = require('express-validator');
const validateResult = (req, res, next)=>{
    console.log('entre')
    try {
        validationResult(req).throw()
        return next()
    } catch (error) {
        res.status(403)
        res.send({erros: error.array()})
    }
}
module.exports = { validateResult }