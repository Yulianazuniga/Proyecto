const proyectoRoutes = require('./routes/proyectoRoutes')
const pruebasRoutes = require('./routes/pruebasRoutes')
const testerRoutes = require('./routes/testerRoutes')
const express = require('express');
const app = express();
require ('dotenv').config();
const port = process.env.PORT;
app.use(express.json());

app.use('/api/proyecto',proyectoRoutes);
app.use('/api/pruebas',pruebasRoutes);
app.use('/api/tester',testerRoutes);

app.listen(port,()=> {
    console.log("el puerto esta corriendo" +port);
})