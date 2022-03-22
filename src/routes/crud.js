const express = require("express");
const sucurSchema = require("../models/sucurSchema");
const { check, validationResult } = require("express-validator");
const router = express.Router();

const { validateCreate } = require("../validators/validarSucur");

// create sucur

router.post(
  "/createsucur",
  validateCreate,
  check("codigo").custom((value) => {
    return sucurSchema.find({ codigo: value }).then((sucur) => {
      if (sucur.length > 0) {
        throw new Error("00");
      }
    }); //-------------- Validacion de que el codSucur no exista antes de crearla.
  }),
  (req, res) => {
    const erros = validationResult(req); //Metodo de express-Validator
    if (!erros.isEmpty()) {
      return res.status(422).json({ erros: erros.array() });
    }
    const sucur = sucurSchema(req.body);
    sucur
      .save()
      .then((data) => res.json({ data }))
      .catch((error) => res.json({ message: error }));
  }
);

// get all users
router.get("/Sucur", (req, res) => {
  sucurSchema
    .find()
    .then((data) => res.json({ data }))
    .catch((error) => res.json({ message: error }));
});

// ejercicio atrapar todos los elementos y sumar todos los datos de un mismo tipo de cada tabla.
router.get("/sumarCodigos", (req, res) => {
  sucurSchema
    .find()
    .then((data) => {
      var coleccion = [];
      var suma;
      for (let i of data) {
        coleccion.push(i["codigo"]);
      }
      for (let i of coleccion) {
        suma = i, " ", suma;
      }
      console.log(suma);
      
      console.log(coleccion.length);

      res.json(data);
    })
    .catch((error) => res.json({ message: error }));
});

// get a user id
router.get("/Sucur/:id", (req, res) => {
  const { id } = req.params;
  sucurSchema
    .findById(id)
    .then((data) => res.json({ data }))
    .catch((error) => res.json({ message: error }));
});

// get a user for codSucur
router.get("/Sucurs/:codSucur", (req, res) => {
  const { codSucur } = req.params;

  sucurSchema
    .find({ codSucur })
    .then((data) => res.json({ data }))
    .catch((error) => res.json({ message: error }));
});

//update a user
router.put("/Sucur/:codSucur", (req, res) => {
  const { codSucur } = req.params;
  const {
    ubicacion,
    direct,
    subdirect,
    descripSucur,
    almacenSucur,
    codciuSucur,
    telSucur,
    direccSucur,
    activoSucur,
    fevtacontadoSucur,
  } = req.body;
  sucurSchema
    .updateOne(
      { codSucur: codSucur },
      {
        $set: {
          ubicacion,
          direct,
          subdirect,
          codSucur,
          descripSucur,
          almacenSucur,
          codciuSucur,
          telSucur,
          direccSucur,
          activoSucur,
          fevtacontadoSucur,
        },
      }
    )
    .then((data) => res.json({ data }))
    .catch((error) => res.json({ message: error }));
});

// delete a user
router.delete("/Sucur/:codSucur", (req, res) => {
  const { codSucur } = req.params;
  sucurSchema
    .remove({ codSucur: codSucur })
    .then((data) => res.json({ data }))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
