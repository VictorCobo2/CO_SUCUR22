const mongoose = require('mongoose');

 const sucurSchema = mongoose.Schema({
     codsucur: {
         type: String,
         require: true
     },
    //  descripsucur: {
    //      type: String,
    //      required: true
    //  },
    //  almacensucur: {
    //      type: String,
    //      required: true
    //  },
    //  codciusucur: {
    //      type: Object,
    //      required: true
     //},
    //  telsucur: {
    //      type: Number,
    //      required: true
    //  },
    //  direccsucur: {
    //      type: String,
    //      required: true
    //  },
    //  activosucur: {
    //      type: String,
    //      required: true
    //  },
    //  anomessucur: {
    //      type: Number,
    //      required: true
    //  }
 });


 const userSchema = mongoose.Schema({
    codsucur: {
        type: String,
        required: true,
      },
    descripsucur: {
        type: String,
        required: true
    },
    almacensucur:{
        type:String,
        required: true
    },
    codciusucur:{
        type: Object,
        required: true
    },
    telsucur:{
        type: Number,
        required: true
    },
    direccsucur:{
        type: String,
        required: true
    },
    activosucur:{
        type: String,
        required: true
    },
    anomessucur:{
        type: Number,
        required: true
    }
  },{versionKey: false});

 module.exports = mongoose.model('COL_SUCUR22', userSchema);