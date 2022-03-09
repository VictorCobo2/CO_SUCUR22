const express = require('express');
const ciudadSchema = require("../models/ciudad");
const { validateCreate } = require('../validators/ciudad')
const router = express.Router();



 

//Crear datos
router.post("/createsucur",validateCreate, (req, res) => {
    const ciudad = ciudadSchema(req.body);
    ciudad.save().then((data)=> res.json(data)).catch((error)=> res.json({mensaje: error}))
})

//obtener datos
router.get("/getdata", (req, res) => {
    ciudadSchema.find().then((data)=> res.json(data)).catch((error)=> res.json({mensaje: error}))
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
router.get("/getdatacod/:dptCiu/:ciuCiu", (req, res)=>{
    const dptCiu = req.params.dptCiu;
    const ciuCiu = req.params.ciuCiu;
    ciudadSchema
    .find({codCiu:[{dptCiu, ciuCiu}]})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({mensaje: error}))
})

//Editar datos por codCiu
router.put("/putdatacod/:dptCiu/:ciuCiu",validateCreate,(req, res) => {
    const dptCiu = req.params.dptCiu;
    const ciuCiu = req.params.ciuCiu;
    const {ubicacion, direct, subdirect, codCiu, nombreCiu, paisCiu, actbarriosCiu, incremCiu} = req.body
    ciudadSchema
    .updateOne({codCiu:[{dptCiu, ciuCiu}]},{$set:{ubicacion, direct, subdirect, codCiu, nombreCiu, paisCiu, actbarriosCiu, incremCiu}})
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
router.delete("/deletedatacod/:dptCiu/:ciuCiu", (req, res) => {
    const  dptCiu =req.params.dptCiu;
    const  ciuCiu =req.params.ciuCiu;
    ciudadSchema
    .remove({codCiu:[{dptCiu,ciuCiu}]})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({mensaje: error}))
})



module.exports = router;