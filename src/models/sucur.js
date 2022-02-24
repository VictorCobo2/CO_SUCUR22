const mongoose = require('mongoose');

 const sucurSchema = mongoose.Schema({
     cod_sucur: {
         type: String,
         require: true
     },
     descrip_sucur: {
         type: String,
         required: true
     },
     almacen_sucur: {
         type: String,
         required: true
     },
     cod_ciu_sucur: {
         type: Object,
         required: true
     },
     tel_sucur: {
         type: Number,
         required: true
     },
     direcc_sucur: {
         type: String,
         required: true
     },
     activo_sucur: {
         type: String,
         required: true
     },
     anomes_sucur: {
         type: Number,
         required: true
     }
 }, {versionKey: false});


 const userSchema = mongoose.Schema({
    cod_sucur: {
        type: String,
        required: true,
      },
    descrip_sucur: {
        type: Number,
        required: true
      },
    almacen_sucur: {
        type: String,
        required: true
    
      }
  });

 module.exports = mongoose.model('COL_SUCUR22', userSchema);