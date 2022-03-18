const mongoose = require("mongoose");

mongoose.pluralize(null);

const sucurSchema = mongoose.Schema(
  {
    ubicacion: {
      type: String,
      required: true,
    },
    directorio: {
      type: String,
      required: true,
    },
    subdirectorio: {
      type: String,
      required: true,
    },
    codigo: {
      type: String,
      required: true,
    },
    descripcion: {
      type: Object,
      required: true
    },
    almacen: {
      type: String,
      required: true,
    },
    llaveCiudad: {
      type: Object,
      required: true,

      codDpt: {
        type: String,
        default: " ",
        required: true,
      },
      codCiu: {
        type: String,
        required: true
      }
     
    },
    telefono: {

        indicaTel: {
          type: String,
        },
        numeroTel: {
          type: String,
        }

    },
    direccion: {
      type: String,
      required: true,
    },
    activo: {
      type: String,
      required: true,
    },
    fevtacontado: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model("sucur", sucurSchema);