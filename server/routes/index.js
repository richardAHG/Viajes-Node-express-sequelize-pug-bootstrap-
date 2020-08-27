const express = require("express");
const router = express.Router();

//exportamos la info
module.exports = function () {
  router.get("/", (req, res) => {
    //res.send("Iinicio");
    //apunta a la carpeta index q esta dentro de views
    //TODO: node automaticamnte reconoce el archivo index
    // por eso solo apuntamos a la carpeta

    res.render('index');
  });
  router.get("/nosotros", (req, res) => {
    //res.send("Nosotros");
    res.render('nosotros',{
      pagina : 'Sobre nosotros'
    });
  });
  return router;
};
