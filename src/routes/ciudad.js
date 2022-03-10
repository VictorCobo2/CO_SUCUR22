const express = require('express');
const { check } = require('express-validator');

const ciudadSchema = require("../models/ciudad");
const { validateCreate } = require('../validators/ciudad')
const router = express.Router();



 

//Crear datos
router.post("/createsucur",validateCreate,
check('cod').custom(value => {
    const dpt = value.dpt;
    const ciu = value.ciu
    return ciudadSchema.find({cod:[{dpt, ciu}]}).then(sucur => {
        console.log("Este es el sucur")
        console.log(sucur.length)
        if (sucur.length > 0){
            console.log("Entre al if")
            throw new Error('ya existe perro');
        }
    });
}), (req, res) => {
    const ciudad = ciudadSchema(req.body);
    
    ciudad.save()
    .then((data)=> res.json(data))
    .catch((error)=> {
        console.log(error)
        console.log("<<<<")
        res.json({mensaje: error} )
    })
})

//obtener datos
router.get("/getdata", (req, res) => {
    ciudadSchema.find()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({mensaje: error}))
})


//obtener un dato por id
router.get("/getdata/:id", (req, res) => {
    const { id }=req.params;
    ciudadSchema.findById(id).then((data)=> res.json(data)).catch((error)=> res.json({mensaje: error}))
})

//buscar por cod Subdirect
router.get("/getdatasub/:subdirect", (req, res) => {
    const subdirect =req.params.subdirect;
    ciudadSchema
    .findOne({subdirect:subdirect})
    //.findOne({ $and:[{paisCiu:dptCiu, }]})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({mensaje: error}))
})

//Buscra con codCiu
router.get("/getdatacod/:dpt/:ciu", (req, res)=>{
    const dpt = req.params.dpt;
    const ciu = req.params.ciu;
    ciudadSchema
    .find({cod:[{dpt, ciu}]})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({mensaje: error}))
})

//Editar datos por codCiu
router.put("/putdatacod/:dpt/:ciu",validateCreate,(req, res) => {
    const dpt = req.params.dpt;
    const ciu = req.params.ciu;
    const {ubicacion, direct, subdirect, cod, nombre, pais, actbarrios, increm} = req.body
    ciudadSchema
    .updateOne({codCiu:[{dptCiu, ciuCiu}]},{$set:{ubicacion, direct, subdirect, cod, nombre, pais, actbarrios, increm}})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({mensaje: error}))
})

//Editar datos
router.put("/putdata/:id",validateCreate,(req, res) => {
    const { id }=req.params;
    const {ubicacion, direct, subdirect, codCiu, nombreCiu, paisCiu, actbarriosCiu, incremCiu} = req.body
    ciudadSchema
    .updateOne({_id: id},{$set:{ubicacion, direct, subdirect, codCiu, nombreCiu, paisCiu, actbarriosCiu, incremCiu}})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({mensaje: error}))
})

//eliminar
router.delete("/deletedata/:id", (req, res) => {
    const { id }=req.params;
    ciudadSchema
    .remove({_id: id})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({mensaje: error}))
})

//eliminar con codCiu
router.delete("/deletedatacod/:dpt/:ciu", (req, res) => {
    const  dpt =req.params.dpt;
    const  ciu =req.params.ciu;
    ciudadSchema
    .remove({cod:[{dpt,ciu}]})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({mensaje: error}))
})



module.exports = router;