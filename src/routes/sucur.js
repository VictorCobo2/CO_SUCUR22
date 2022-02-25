const express = require('express');
const sucurSchema = require("../models/sucur");
const { validateCreate } = require('../validators/sucur')
const router = express.Router();




//Crear datos
router.post("/createsucur",validateCreate, (req, res) => {
    
    const sucur = sucurSchema(req.body);
    sucur.save()
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
//Editar datos
router.put("/putdata/:id", (req, res) => {
    const { id }=req.params;
    const {codsucur, descripsucur,almacensucur,codciusucur, telsucur, direccsucur, activosucur, anomessucur} = req.body
    sucurSchema
    .updateOne({_id: id},{$set:{codsucur, descripsucur,almacensucur,codciusucur, telsucur, direccsucur, activosucur, anomessucur}})
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