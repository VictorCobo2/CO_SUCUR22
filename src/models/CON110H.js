const { type } = require("express/lib/response");
const mongoose = require("mongoose");
console.clear();
mongoose.pluralize(null); //Con este evitamos que mongo ponga una S al final
const ciudadSchema = mongoose.Schema(
  {
    ubicacion: {
      type: String,
      //required: true,
      default: "",
    },
    direct: {
        type: String,
        required: true
    },
    subdirect: {
        type: String,
        index: true,
        required: true,
        unique: true
    },
    codCiu: {
      dptCiu: {
        type: String,
        index: true,
        required: true,
        unique: true,
      },
      ciuCiu: {
        type: String,
        required: true
      },
      //type: Object,
      
    },
    nombre: {
      nombre1: {
        type: String,
        default: "",
      },
      nombre2: {
        type: String,
        default: "",
      }
    },
    pais: {
      type: String,
      required: true,
    },
    actbarrios: {
      type: String,
      //required: true
      default: "", //El valor por defecto sera este, si no se envia nada.
    },
    increm: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false }
); //Con este evitamos que mongo agrege una variable llamada __V

module.exports = mongoose.model("ciudad", ciudadSchema);
