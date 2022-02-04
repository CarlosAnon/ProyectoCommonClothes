const databaseConnection=require('../../config/database');


 /*const renderHome = (req,res)=>{

     //hablandole a la DB , pidiendo la informacion que guardo
     databaseConnection.query('SELECT * FROM categorias',(error,data)=>{
        if(error){
             console.log(error)
         }else{

            //mande esa informacion al archivo index para mostrarlo en el sitio
             res.render('pages/index',{
                 data
             }) 
         }
     });
 } 
 */
/*Se pone "error" cuando se quiere traer info de otro lado*/
 const getAllBuzos =(req,res) => {
     databaseConnection.query('SELECT * FROM productos WHERE Categoria="Buzos"',(error,data)=>{
         if (error){
             console.log(error)
         }else{
             res.render('pages/PagProdBuzos',{data})
        }
     })
 };

 const getAllRemeras =(req,res) => {
    databaseConnection.query('SELECT * FROM productos WHERE Categoria="Remeras"',(error,data)=>{
        if (error){
            console.log(error)
        }else{
         res.render('pages/PagProdRemeras',{data})
       }
    })
};
const getAllPantalones =(req,res) => {
    databaseConnection.query('SELECT * FROM productos WHERE Categoria="Pantalones"',(error,data)=>{
        if (error){
            console.log(error)
        }else{
            res.render('pages/PagProdPantalones',{data})
       }
    })
};
const getAllZapatillas =(req,res) => {
    databaseConnection.query('SELECT * FROM productos WHERE Categoria="Zapatillas"',(error,data)=>{
        if (error){
            console.log(error)
        }else{
            res.render('pages/PagProdZapatillas',{data})
       }
    })
};

const renderHome = (req,res)=>{
    res.render('pages/Index2',{data
    }) 
};
const renderSobreNosotros = (req,res)=>{
    res.render('pages/SobreNosotros',{data
    })
};

const renderNovedades = (req,res)=>{
    res.render('pages/Novedades',{data
    })
};
const getForm=(req,res)=>{
    res.render('pages/Novedades')
};

const renderPagProdBuzos = (req,res)=>{
    res.render('pages/PagProdBuzos',{data
    })
};
const renderPagProdPantalones = (req,res)=>{
    res.render('pages/PagProdPantalones',{data
    })
};
const renderPagProdRemeras = (req,res)=>{
    res.render('pages/PagProdRemeras',{data
    })
};
const renderPagProdZapatillas = (req,res)=>{
    res.render('pages/PagProdZapatillas',{data
    })
};

const addnewSuscrip=(req,res)=>{
    const {correo}=req.body;
    
    databaseConnection.query('INSERT INTO suscripciones(correo)VALUES(?)',[correo],(error,data)=>{
        if(error){
            console.log(error)
            
        }else{
            res.send("recibido")
        }
    }
)};

module.exports= {
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
    addnewSuscrip,
    getForm

};

