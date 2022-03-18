const express = require("express");
const { check, validationResult } = require("express-validator");

const ciudadSchema = require("../models/CON110H");
const { validateCreate, ValidateEdit } = require("../validators/CON110H");
const router = express.Router();

//Crear datos------------------------
router.post(
  "/createciudad",validateCreate,
  //---------------------------------- Validacion de que la ciudad no exista antes de crearla
  check("codCiu").custom((value) => {
    const dptCiu = value.dptCiu;
    const ciuCiu = value.ciuCiu;
    const datos = {dptCiu,ciuCiu}
    return ciudadSchema
      .find({ codCiu: datos })
      .then((ciudad) => {
        if (ciudad.length > 0) {
          throw new Error("00");
        }
      }); //---------------------------------------------------------------
  }),
  (req, res) => {
    const erros = validationResult(req); //Metodo de express-Validator
    if (!erros.isEmpty()) {
      return res.status(422).json({ erros: erros.array() });
    }
    const ciudad = ciudadSchema(req.body);
    ciudad
      .save()
      .then((data) => res.json(data))
      .catch((error) => {
        res.json({ mensaje: error });
      });
  }
);

//Crear datos 222222------------------------
router.post("/createciudad2", validateCreate, (req, res) => {
  const ciudad = ciudadSchema(req.body);
  ciudad
    .save()
    .then((data) => res.json(data))
    .catch((error) => {
      res.json({ mensaje: error });
    });
});

//obtener datos------------------------
router.get("/getdata", (req, res) => {
  ciudadSchema
    .find().sort({$natural:-1}) //el .sort es para organizar algun dato de manera ascendente(1) o descendente(-1), $natural es para organizar de del mas nuevo al mas antiguo
    .then((data) => res.json(data))
    .catch((error) => res.json({ mensaje: error }));
});

//Buscar con codCiu------------------------
router.get("/getdatacod/:dptCiu/:ciuCiu", (req, res) => {
  const dptCiu = req.params.dptCiu;
  const ciuCiu = req.params.ciuCiu;
  const datos = {dptCiu,ciuCiu}
  console.log(datos) 
  ciudadSchema
    .find({ "codCiu": datos })
    .then((data) => res.send(data))
    .catch((error) => res.json({ mensaje: error }));
});

//Editar datos por codCiu
router.put("/putdatacod/:dptCiu/:ciuCiu", (req, res) => {
  const dptCiu = req.params.dptCiu;
  const ciuCiu = req.params.ciuCiu;
  const datos = {dptCiu,ciuCiu}
  const {
    ubicacion,
    direct,
    subdirect,
    cod,
    nombre,
    pais,
    actbarrios,
    increm,
  } = req.body;
  ciudadSchema
    .updateOne(
      { "codCiu": datos },
      {
        $set: {
          ubicacion,
          direct,
          subdirect,
          cod,
          nombre,
          pais,
          actbarrios,
          increm,
        },
      }
    )
    .then((data) => res.json(data))
    .catch((error) => res.json({ mensaje: error }));
});


//Buscar por cualquier variable

router.get("/getdataFiltro/:dato/:idDato", (req, res) => {
  const dat = req.params.dato;
  const idDato = req.params.idDato;

  ciudadSchema.find({[dat]:idDato})
  .then((data) => res.json(data))
  .catch((error) => res.json({ mensaje: error}))
});


//eliminar con codCiu
router.delete("/deletedatacod/:dptCiu/:ciuCiu", (req, res) => {
  const dptCiu = req.params.dptCiu;
  const ciuCiu = req.params.ciuCiu;
  const datos = {dptCiu,ciuCiu}
  ciudadSchema
    .remove({ "codCiu": datos })
    .then((data) => res.json(data))
    .catch((error) => res.json({ mensaje: error }));
});

module.exports = router;
