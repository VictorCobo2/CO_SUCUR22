const express = require('express');
const sucurSchema = require("../models/sucur");

const router = express.Router();




//Crear datos
router.post("/createsucur", (req, res) => {
    const sucur = sucurSchema(req.body);
    sucur.save()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({mensaje: error}))
})


module.exports = router;