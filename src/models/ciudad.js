const mongoose = require('mongoose');
console.clear()
mongoose.pluralize(null)
const ciudadSchema = mongoose.Schema({
    ubicacion: {
        type: String,
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
    cod:{
    type: Object,
        required: true
    },
    nombre:{
        type: Object,
        required: true
    },
    pais:{
        type: String,
        required: true
    },
    actbarrios:{
        type: String,
        required: true
    },
    increm:{
        type: Number,
        required: true
    }
  },{versionKey: false},);

 module.exports = mongoose.model('ciudad', ciudadSchema);