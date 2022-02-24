




// const mongoose = require('mongoose');

// const url = 'mongodb://localhost/coldb';

// mongoose.connect(url, {

// })
// .then( ()=> console.log("Conectado papa"))
// .catch( (e)=> console.log("Error: "+e))

// const sucurSchema = mongoose.Schema({
//     cod_sucur: String,
//     descrip_sucur: String,
//     almacen_sucur: String,
//     cod_ciu_sucur: Object,
//     tel_sucur: Number,
//     direcc_sucur: String,
//     activo_sucur: String,
//     anomes_sucur: Number
// }, {versionKey: false})

// const SucurModel  = mongoose.model('COL_SUCUR22', sucurSchema)

// const mostrar = async()=>{
//     const sucur = await SucurModel.find()
//     console.log(sucur)
// }

// const crear = async()=>{
//     const sucur = new SucurModel({
//         cod_sucur: 'CO',
//         descrip_sucur: 'Muy bonito',
//         almacen_sucur: '0001',
//         cod_ciu_sucur: {cod_ciud: 00001, dpt_ciu_sucur: 01, ciu_ciu_sucur: 001},
//         tel_sucur: 3186877835,
//         direcc_sucur: 'Calle 29 #3-56',
//         activo_sucur: 'S',
//         anomes_sucur: 0001
//     })

//     const res = await sucur.save();
//     console.log(res)
// }

// const edit = async(id)=>{
    
//     const editSucur = await SucurModel.updateOne({_id:id},
//         {
//             $set:{
//                 cod_sucur: 'MX',
//                 descrip_sucur: 'Muy bonito EDIT',
//                 almacen_sucur: '0111',
//             }
//         })
//         console.log(editSucur)
// }

// const del = async(id)=>{
//     const sucur = await SucurModel.deleteOne({_id:id})
// }

//crear()
//mostrar()
//edit('6216984e54f2b6900cc809fb')
//del('6216984e54f2b6900cc809fb')