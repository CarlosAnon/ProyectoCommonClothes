const express = require('express');

/*hacer el ruteo, decir el recorrido que tiene que hacer al recibir una peticion*/
const routes=express.Router();

const {
    renderHome,
    renderSobreNosotros,
    renderNovedades,
    renderPagProdBuzos,
    renderPagProdPantalones,
    renderPagProdRemeras,
    renderPagProdZapatillas,
    getAllBuzos,
    getAllRemeras,
    getAllPantalones,
    getAllZapatillas,
    getForm,
    addnewSuscrip

} =require('../controllers/controllers')

routes.get("/pages/Index2",renderHome);
 routes.get("/",(req,res)=>{
     res.render("pages/Index2")});
     
routes.get("pages/SobreNosotros",renderSobreNosotros);
routes.get("/SobreNosotros",(req,res)=>{
    res.render("pages/SobreNosotros")});


routes.get("/pages/Novedades",renderNovedades);
routes.get('/Novedades', function(req, res) {
    res.render('pages/Novedades');
});
routes.get("/Novedades",getForm);
routes.post("/Novedades", addnewSuscrip);

routes.get("pages/PagProdBuzos",renderPagProdBuzos);
routes.get("/PagProdBuzos",getAllBuzos);


routes.get("pages/PagProdPantalones",renderPagProdPantalones);
routes.get("/PagProdPantalones",getAllPantalones);

 routes.get("pages/PagProdRemeras",renderPagProdRemeras);
 routes.get("/PagProdRemeras",getAllRemeras);


routes.get("pages/PagProdZapatillas",renderPagProdZapatillas);
routes.get("/PagProdZapatillas",getAllZapatillas);



module.exports=routes;