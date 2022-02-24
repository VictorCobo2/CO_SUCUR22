const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const sucurRoute = require("./routes/sucur")

const app =  express();
const port = process.env.PORT || 9000


//middelewarw
app.use(express.json());
app.use('/api', sucurRoute);

app.get("/", (req, res) => {
    res.send("Funciona la api")
})

mongoose.connect(process.env.MONGODB_URI).then(()=> console.log("Se conecto"))
.catch((error)=> console.log(error))

app.listen(port, () => console.log('Server esuchando en el puerto: ', port))