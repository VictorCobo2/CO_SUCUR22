const { check } = require('express-validator');
const { validateResult } = require('../helpers/validateHelper')
let ubicacion;
let direct, subdirect, paisCiu, actbarriosCiu;

const validateCreate = [
    check('ubicacion')
        .custom((value, {req})=>{
            
            if(value.length < 20){
                
                ubicacion = llenar_espacios(value,20)
                return true
            } if(value.length > 20){
                
                return false
            }else if(value.length == 20){
                
                ubicacion = value
                return true
            }
    }),check('direct')
    .exists()
    .not()
    .custom((value, {req})=>{
        console.log(value.length)
        if(value.length < 10){
            console.log("llenar")
            direct = llenar_espacios(value,10)
            console.log(direct, "0")
            return false
        } if(value.length > 10){
            console.log("mas")
            return true
        }else if(value.length == 10){
            console.log("10")
            direct = value
            return false
        }
    }),check('subdirect')
    .exists()
    .not()
    .custom((value, {req})=>{
        const num =10
        if(value.length < num){
            console.log("llenar sub")
            subdirect = llenar_espacios(value,num)
            return false
        } if(value.length > num){
            return true
        }else if(value.length == num){
            subdirect = value
            return false
        }
    }),check('paisCiu')
    .exists()
    .not()
    .isEmpty()
    .custom((value, {req})=>{
        const num = 3
        if(value.length < num){
            paisCiu = llenar_espacios(value,num)
            return true
        } if(value.length > num){
            return false
        }else if(value.length == num){
            paisCiu = value
            return true
        }
    }),check('actbarriosCiu')
    .custom((value, {req})=>{
        if(value){
            actbarriosCiu = value
        }else{actbarriosCiu = " "}
        return true
    }),check('incremCiu')
    .exists()
    .not()
    .isEmpty()
    .isNumeric()
    ,
    (req, res, next) =>{
        console.log(req.body.nombreCiu.nombre1Ciu)
        req.body.ubicacion = ubicacion
        req.body.direct = direct
        req.body.subdirect = subdirect
        req.body.paisCiu= paisCiu
        req.body.actbarriosCiu = actbarriosCiu
        validateResult(req, res, next)
    }
]

const llenar_espacios = (dato, cantidad) =>{
    for(let i=dato.length; i<cantidad; i++){
        dato = dato.concat(' ')
    }
    return dato
}
    



module.exports = {validateCreate}