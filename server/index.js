//importar express
const express = require("express");
const path = require('path');
const routes = require("./routes");
const configs = require('./config');
const db = require('./config/database');

db.authenticate()
    .then(()=> console.log('DB Conectada'))
    .catch(error => console.log(error));
//configurar express
const app = express();

//Habilitar Pug
app.set('view engine', 'pug');

//Añadir las vistas
app.set('views',path.join(__dirname,'./views'));

//cargar una carpeta estatica llamada public
app.use(express.static('public'));

//Veririficamos si estamos en desarrollo
const config = configs[app.get('env')];
app.locals.titulo = config.nombreSitio;

//Muestra el año actual
app.use((req,res,next)=>{
    //crear un nueva fecha
    const fecha = new Date();
    
    //creamos un avariable local
    res.locals.fechaActual = fecha.getFullYear();
    console.log(res.locals);
    //indicamos que se ejecutan las sgtes funciones
    return next();
})

//cargar rutas
app.use('/',routes());

//asignando puerto
app.listen(4000, () => {
  console.log("servidor Cargado");
});
