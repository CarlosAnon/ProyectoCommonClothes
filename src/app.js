const express = require('express');
const app=express();
const routes=require('./routes/routes')
const path = require('path');
const databaseConnection= require('../config/database');

//conexion con MySQL
databaseConnection.connect();

//vamos a recibir info en formato JSON
app.use(express.json());app.use(express.urlencoded({extended:false}));

//uso de EJS y de archivos publicos
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'public')));


//rutas
app.use("/CommonClothes",routes);
app.use("/Novedades",routes);
app.use("/SobreNosotros",routes);
app.use("/PagProdBuzos",routes);
app.use("/PagProdRemeras",routes);
app.use("/PagProdPantalones",routes);
app.use("/PagProdZapatillas",routes);



app.listen(3000,()=>{
    console.log("Server corriendo en puerto 3000")
});