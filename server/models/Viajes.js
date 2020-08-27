const Sequelize = require('sequelize');
const db = require('../config/database');

const viaje = db.define('viaje',{
    titulo : Sequelize.STRING,
    precio : Sequelize.STRING,
    fecha_ida : Sequelize.DATE,
    fecha_vuelta : Sequelize.DATE,
    imagen : Sequelize.STRING,
    descripcion : Sequelize.STRING,
    disponibles : Sequelize.STRING,
});

module.exports = viaje;