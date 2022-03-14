const mongoose = require('mongoose');
console.clear()
mongoose.pluralize(null) //Con este evitamos que mongo ponga una S al final
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
  },{versionKey: false}); //Con este evitamos que mongo agrege una variable llamada __V

 module.exports = mongoose.model('ciudad', ciudadSchema);