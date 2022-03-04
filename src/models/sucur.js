const mongoose = require ('mongoose');

const sucurSchema = mongoose.Schema({
    ubicacion: {
        type:String,
        required: true
    },
    direct: {
        type:String,
        required: true
    },
    subdirect: {
        type:String,
        required: true
    },
    codSucur: {
        type:String,
        required: true
    },
    descripSucur: {
        type:Object,
        required: true
    },
    almacenSucur: {
        type:String,
        required: true
    },
    codciuSucur: {
        type:Object,
        required: true
    },
    telSucur: {
        type:String,
        required: true
    },
    direccSucur: {
        type:String,
        required: true
    },
    activoSucur: {
        type:String,
        required: true
    },
    fevtacontadoSucur: {
        type:String,
        required: true
    },
})

module.exports = mongoose.model('sucurs', sucurSchema)