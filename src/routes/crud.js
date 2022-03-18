const express = require("express");
const sucurSchema = require("../models/sucurSchema");
const { check, validationResult } = require("express-validator");
const router = express.Router();

// create sucur
router.post("/Sucur", (req, res) => {
  const sucur = sucurSchema(req.body);

  // validacion de codSucur

  // termina validacion de codSucur

  sucur
    .save()
    .then((data) => res.json({ data }))
    .catch((error) => res.json({ message: error }));
});

router.post(
  "/createsucur",
  check("codSucur").custom((value) => {
    console.log("llegue", value);
    const codSucur = value;
    console.log(value);
    return sucurSchema.find({ codSucur: value }).then((sucur) => {
      console.log("Este ", sucur);
      if (sucur.length > 0) {
        throw new Error("00");
      }
    }); //-------------- Validacion de que la ciudad no exista antes de crearla
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
    .then((data) => res.json({data}))
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