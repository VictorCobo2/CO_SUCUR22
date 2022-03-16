const express = require("express");
const { check, validationResult } = require("express-validator");

const ciudadSchema = require("../models/CON110H");
const { validateCreate, ValidateEdit } = require("../validators/CON110H");
const router = express.Router();

//Crear datos------------------------
router.post(
  "/createciudad",validateCreate,
  check("codCiu").custom((value) => {
    //---------------
    const dptCiu = value.dptCiu;
    const ciuCiu = value.ciuCiu;
    return ciudadSchema
      .find({ codCiu: [{ dptCiu, ciuCiu }] })
      .then((ciudad) => {
        if (ciudad.length > 0) {
          throw new Error("Ya existe una ciudad con ese id");
        }
      }); //-------------- Validacion de que la ciudad no exista antes de crearla
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
    .find().sort({$natural:-1}) //el .sort es para organizar algun dato de manera ascendente(1) o descendente(-2), $natural es para organizar de del mas nuevo al mas antiguo
    .then((data) => res.json(data))
    .catch((error) => res.json({ mensaje: error }));
});

//obtener un dato por id------------------------
router.get("/getdata/:id", (req, res) => {
  const { id } = req.params;
  ciudadSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ mensaje: error }));
});

//Buscra con codCiu------------------------
router.get("/getdatacod/:dptCiu/:ciuCiu", (req, res) => {
  const dptCiu = req.params.dptCiu;
  const ciuCiu = req.params.ciuCiu;
  ciudadSchema
    .find({ codCiu: [{ dptCiu, ciuCiu }] })
    .then((data) => res.json(data))
    .catch((error) => res.json({ mensaje: error }));
});

//Bucar por codigo de pais -----------------------------------------
router.get("/getdatapais/:pais", (req, res) => {
    const pais = req.params.pais;
    ciudadSchema
      .find({ pais })
      .then((data) => res.json(data))
      .catch((error) => res.json({ mensaje: error }));
  });

//Buscar con cod Dpt-----------------------
router.get("/getdatadpt/:dptCiu", (req, res) => {
  const dptCiu = req.params.dptCiu;
  ciudadSchema
    .find({ "codCiu.dptCiu": dptCiu })
    .then((data) => res.json(data))
    .catch((error) => res.json({ mensaje: error }));
});

//Buscar con cod ciu-----------------------
router.get("/getdataciu/:ciuCiu", (req, res) => {
  const ciuCiu = req.params.ciuCiu;
  ciudadSchema
    .find({ "codCiu.ciuCiu": ciuCiu })
    .then((data) => res.json(data))
    .catch((error) => res.json({ mensaje: error }));
});

//Editar datos por codCiu
router.put("/putdatacod/:dpt/:ciu", (req, res) => {
  const dpt = req.params.dpt;
  const ciu = req.params.ciu;
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
  console.log(res);
  ciudadSchema
    .updateOne(
      { cod: [{ dpt, ciu }] },
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


//eliminar con codCiu
router.delete("/deletedatacod/:dpt/:ciu", (req, res) => {
  const dpt = req.params.dpt;
  const ciu = req.params.ciu;
  ciudadSchema
    .remove({ cod: [{ dpt, ciu }] })
    .then((data) => res.json(data))
    .catch((error) => res.json({ mensaje: error }));
});

module.exports = router;
