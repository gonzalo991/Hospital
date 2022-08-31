const express = require('express');
const app = express();
const hbs = require('hbs')
const path = require('path');
const port = process.env.PORT || 5000;



//Definición de handlebars
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.set('port', process.env.PORT || 5000);
hbs.registerPartials(path.join(__dirname, '/views/partials'));

//Contenido estatico
app.use(express.static('public'));
app.use(express.json());

//Decodificador de datos
app.use(express.urlencoded({ extended: true }));

//Envio de e-mails
require('dotenv').config;


// -- Rutas -- //

app.use(require('./router/home'));
app.use(require('./router/servicios'));
app.use(require('./router/contacto'));


app.listen(port, () => {
    console.log(`Puerto corriendo en http://localhost:${port}`)
});
