const mongoose = require('mongoose');
//  const sucurSchema = mongoose.Schema({
//     codsucur: {
//         type: String,
//         required: true,
//       },
//     descripsucur: {
//         type: String,
//         required: true
//     },
//     almacensucur:{
//         type:String,
//         required: true
//     },
//     codciusucur:{
//         type: Array,
//         required: true
//     },
//     telsucur:{
//         type: String,
//         required: true
//     },
//     direccsucur:{
//         type: String,
//         required: true
//     },
//     activosucur:{
//         type: String,
//         required: true
//     },
//     anomessucur:{
//         type: String,
//         required: true
//     }
//   },{versionKey: false});

const sucurSchema = mongoose.Schema({
    ubicacion: {
        type: String,
        //required: true,
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

 module.exports = mongoose.model('ciudades', sucurSchema);