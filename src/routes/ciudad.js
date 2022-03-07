const express = require('express');
const sucurSchema = require("../models/ciudad");
const { validateCreate } = require('../validators/ciudad')
const router = express.Router();


 

//Crear datos
router.post("/createsucur",validateCreate, (req, res) => {
    
    const ciudad = sucurSchema(req.body);
    ciudad
    .save()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({mensaje: error}))
})

//obtener datos
router.get("/getdata", (req, res) => {
    sucurSchema
    .find()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({mensaje: error}))
})


//obtener un dato
router.get("/getdata/:id", (req, res) => {
    const { id }=req.params;
    sucurSchema
    .findById(id)
    .then((data)=> res.json(data))
    .catch((error)=> res.json({mensaje: error}))
    console.log(res)
})
//buscar por cod Subdirect
router.get("/getdatasub/:subdirect", (req, res) => {
    const subdirect =req.params.subdirect;
    sucurSchema
    .findOne({subdirect:subdirect})
    //.findOne({ $and:[{paisCiu:dptCiu, }]})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({mensaje: error}))
})

//Buscra con codCiu
router.get("/getdatacod/:dptCiu/:ciuCiu", (req, res)=>{
    const dptCiu = req.params.dptCiu;
    const ciuCiu = req.params.ciuCiu;
    sucurSchema
    .findOne({codCiu:[{dptCiu, ciuCiu}]})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({mensaje: error}))
})
//Editar datos
router.put("/putdata/:id",validateCreate,(req, res) => {
    const { id }=req.params;
    const {ubicacion, direct, subdirect, codCiu, nombreCiu, paisCiu, actbarriosCiu, incremCiu} = req.body
    sucurSchema
    .updateOne({_id: id},{$set:{ubicacion, direct, subdirect, codCiu, nombreCiu, paisCiu, actbarriosCiu, incremCiu}})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({mensaje: error}))
})

//eliminar
router.delete("/deletedata/:id", (req, res) => {
    const { id }=req.params;
    sucurSchema
    .remove({_id: id})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({mensaje: error}))
})

//eliminar con codCiu
router.delete("/deletedatacod/:dptCiu/:ciuCiu", (req, res) => {
    const  dptCiu =req.params.dptCiu;
    const  ciuCiu =req.params.ciuCiu;
    sucurSchema
    .remove({codCiu:[{}]})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({mensaje: error}))
})



module.exports = router;