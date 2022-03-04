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
})
//buscar por cod Sucur
router.get("/getdatacod/:dptCiu/:ciuCiu", (req, res) => {
    console.log(req.params.dptCiu)
    const { dptCiu }=req.params.dptCiu;
    const { ciuCiu }= req.params.ciuCiu;
    sucurSchema
    .findOne({ $and:[{codCiu:dptCiu, }]})
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



module.exports = router;