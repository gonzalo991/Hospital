const mysql= require('mysql');
require('dotenv').config({
    path: './.env'
})

const conexion = mysql.createConnection({
    host: process.env.MYSQL_ADDON_HOST,
    database: process.env.MYSQL_ADDON_DB,
    user: process.env.MYSQL_ADDON_USER,
    password: process.env.MYSQL_ADDON_PASSWORD,
    port: process.env.MYSQL_ADDON_PORT
});

conexion.connect(function (error) {
    if (error) {
        throw error;
    } else {
        console.log('Conexión establecida con éxito')
    }
});

module.exports = conexion;