const express = require('express');
const { check, validationResult } = require('express-validator');

const ciudadSchema = require("../models/ciudad");
const { validateCreate, ValidateEdit } = require('../validators/ciudad')
const router = express.Router();

const datos = undefined

//Crear datos
router.post("/createciudad",
check('cod').custom(value => { //---------------
    const dpt = value.dpt;
    const ciu = value.ciu
    return ciudadSchema.find({cod:[{dpt, ciu}]}).then(ciudad => {
        if (ciudad.length > 0){
            throw new Error('Ya existe una ciudad con ese id')
        }
    });//-------------- Validacion de que la ciudad no exista antes de crearla
}), (req, res) => {
    const erros = validationResult(req) //Metodo de express-Validator
    if (!erros.isEmpty()) {
        return res.status(422).json({ erros: erros.array() })
    }
    const ciudad = ciudadSchema(req.body);
    ciudad.save()
    .then((data)=> res.json(data))
    .catch((error)=> {
         res.json({mensaje: error} )
     })
})

//Crear datos 222222
router.post("/createciudad2", validateCreate,(req, res) => {
    const ciudad = ciudadSchema(req.body);
    ciudad.save()
    .then((data)=> res.json(data))
    .catch((error)=> {
         res.json({mensaje: error} )
     })
})

//obtener datos
router.get("/getdata", (req, res) => {
    ciudadSchema.find()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({mensaje: error}))

    //console.log(data)
})


//obtener un dato por id
router.get("/getdata/:id", (req, res) => {
    const { id }=req.params;
    ciudadSchema.findById(id).then((data)=> res.json(data)).catch((error)=> res.json({mensaje: error}))
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

//Buscra con cod DPT
router.get("/getdatadpt/:dpt", (req, res)=>{
    console.log('Entreee')
    const dpt = req.params.dpt;
    const ciu = '';
    console.log(dpt,ciu)
    ciudadSchema
    .find( {cod:[{dpt}]} )
    .then((data)=> res.json(data))
    .catch((error)=>  res.json({mensaje: error}))
})


//Editar datos por codCiu
router.put("/putdatacod/:dpt/:ciu",(req, res) => {
    const dpt = req.params.dpt;
    const ciu = req.params.ciu;
    const {ubicacion, direct, subdirect, cod, nombre, pais, actbarrios, increm} = req.body

    console.log(res)
    ciudadSchema
    .updateOne({cod:[{dpt, ciu}]},{$set:{ubicacion, direct, subdirect, cod, nombre, pais, actbarrios, increm}})
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