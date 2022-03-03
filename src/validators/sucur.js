const { check } = require('express-validator');
const { validateResult } = require('../helpers/validateHelper')
let descripsucur;
let direccsucur;

const validateCreate = [
    check('ubicacion')
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
    }),check('direct')
    .exists()
    .not()
    .isEmpty()
    .custom((value, {req})=>{
        if(value.length < 10){
            direccsucur = llenar_espacios(value,10)
            return true
        } if(value.length > 25){
            return false
        }else if(value.length == 25){
            direccsucur = value
            return true
        }
    }),check('codsubdirectsucur')
    .exists()
    .not()
    .isEmpty()
    .custom((value, {req})=>{
        const num =10
        if(value.length < num){
            direccsucur = llenar_espacios(value,num)
            return true
        } if(value.length > num){
            return false
        }else if(value.length == num){
            direccsucur = value
            return true
        }
    }),check('paisCiu')
    .exists()
    .not()
    .isEmpty()
    .custom((value, {req})=>{
        const num = 3
        if(value.length < num){
            direccsucur = llenar_espacios(value,num)
            return true
        } if(value.length > num){
            return false
        }else if(value.length == num){
            direccsucur = value
            return true
        }
    }),check('actbarriosCiu')
    .exists()
    .not()
    .custom((value, {req})=>{
        const num = 1
        if(value.length < num){
            direccsucur = llenar_espacios(value,num)
            return true
        } if(value.length > num){
            return false
        }else if(value.length == num){
            direccsucur = value
            return true
        }
    }),check('incremCiu')
    .exists()
    .not()
    .isEmpty()
    .isNumber()
    ,
    (req, res, next) =>{
        req.body.descripsucur = descripsucur
        req.body.direccsucur = direccsucur
        validateResult(req, res, next)
    }
]

// function llenar_espacios(dato,cantidad){
//         for(let i=dato.length; i<cantidad; i++){
//             dato = dato.concat(' ')
//         }
//         return dato
// }
const llenar_espacios = (dato, cantidad) =>{
    for(let i=dato.length; i<cantidad; i++){
        dato = dato.concat(' ')
    }
    return dato
}
    



module.exports = {validateCreate}