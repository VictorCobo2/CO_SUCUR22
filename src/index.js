require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const sucurRoute = require("./routes/CON110H")

const app =  express();
const port = process.env.PORT || 9000


//middeleware
app.use(express.json());
app.use('/api', sucurRoute);



app.get("/", (req, res) => {
    res.send("Funciona la api")
})

mongoose.connect(process.env.MONGODB_URI).then(()=> console.log("Conectado a mongo"))
.catch((error)=> 
console.log(error))

app.listen(port, () => console.log('Esuchando en el puerto: ', port))