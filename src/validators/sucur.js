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
    }),check('codsucur')
    .exists()
    .not()
    .isEmpty()
    .custom((value, {req})=>{
        if(value.length > 2){
            return false
        }
        return true
    }),check('almacensucur')
    .exists()
    .not()
    .isEmpty()
    .custom((value, {req})=>{
        if(value.length > 5){
            return false
        }
        return true
    }),check('telsucur')
    .exists()
    .not()
    .custom((value, {req})=>{
        const num = value.toString()
        console.log(num.length)
        if(num.length != 10){
            console.log('entreeeeeeee')
            return true
        }
        return false
    }),check('activosucur')
    .exists()
    .not()
    .isEmpty()
    .isString()
    .custom((value, {req})=>{
        if(value.length > 1){
            return false
        }
        return true
    }),check('anomessucur')
    .exists()
    .not()
    .isEmpty()
    .isNumeric()
    .custom((value, {req})=>{
        const num = value.toString()
        if(num.length > 1){
            return false
        }
        return true
    }),check('codciusucur')
    .exists()
    .not()
    .isEmpty()
    .isObject()
    .custom((value, {req})=>{
        if(value.length > 5){
            return false
        }
        return true
    }),
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