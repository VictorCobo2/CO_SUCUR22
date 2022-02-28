const { check } = require('express-validator');
const { validateResult } = require('../helpers/validateHelper')
let descripsucur;
let direccsucur;

const validateCreate = [
    check('descripsucur')
    .exists()
    .not()
    .isEmpty()
    .custom((value, {req})=>{
        if(value.length < 20){
            descripsucur = llenar_espacios(value,20)
            return true
        } if(value.length > 20){
            return false
        }else if(value.length == 20){
            descripsucur = value
            return true
        }
    }),check('direccsucur')
    .exists()
    .not()
    .isEmpty()
    .custom((value, {req})=>{
        if(value.length < 25){
            direccsucur = llenar_espacios(value,25)
            return true
        } if(value.length > 25){
            return false
        }else if(value.length == 25){
            direccsucur = value
            return true
        }
    }),
    (req, res, next) =>{
        req.body.descripsucur = descripsucur
        req.body.direccsucur = direccsucur
        validateResult(req, res, next)
    }
]

function llenar_espacios(dato,cantidad){
    //let descripsucur = dato
        for(let i=dato.length; i<cantidad; i++){
            dato = dato.concat(' ')
        }
        return dato
}



module.exports = {validateCreate}