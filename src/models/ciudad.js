const mongoose = require('mongoose');
console.clear()
const ciudadSchema = mongoose.Schema({
    ubicacion: {
        type: String,
        value: " ",
        required: true,
      },
    direct: {
        type: String,
        required: true
    },
    subdirect:{
        type:String,
        required: true
    },
    codCiu:{
        type: Object,
        required: true
    },
    nombreCiu:{
        type: Object,
        required: true
    },
    paisCiu:{
        type: String,
        required: true
    },
    actbarriosCiu:{
        type: String,
        required: true
    },
    incremCiu:{
        type: Number,
        required: true
    }
  },{versionKey: false});

 module.exports = mongoose.model('ciudades', ciudadSchema);