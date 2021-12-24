const express = require('express');
const { path } = require('express/lib/application');
const app = express();
const hbs = require('hbs')
const mysql = require('mysql');
const port = 5000;

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + "/views/partials");

//Contenido estatico
app.use(express.static('public'));
app.use('/assets', express.static('public'));
app.use(express.json());


//Conección a base de datos
const conexion = mysql.createConnection({
    host: 'localhost',
    database: 'hospital',
    user: 'root',
    password: '',
    port: '3305'
});

conexion.connect(function (error) {
    if (error) {
        throw error;
    } else {
        console.log('Conexión establecida con éxito')
    }
});

// --- Home -- //

app.get("/", (req, res) => {
    res.render("home", {
        titulo: 'Hospital del Carmen | Sitio Oficial',
        nombre: 'Hospital del Carmen - San José de Metán',
        bienvenida: 'Bienvenido al Hospital del Carmen',
        slider1: 'Puedes comunicarte con nosotros por cualquiera de los siguientes medios y redes sociales',
        slider2: 'Somos profesionales en el campo de la Salud',
        slider2consulta: 'Enviá tu consulta. Te responderemos en breve',
        slider3: 'Nos importa lo que pensás. Estamos abiertos a sugerenias',
        slider3sug: 'Mejoremos nuestro hospital',
        sobrenos: "Sobre Nosotros",
        especialistas: "Contamos con los mejores especialistas"
    });
});

// -- Contacto -- //

app.get("/contacto", (req, res) => {
    res.render("contacto", {
        titulo: 'Hospital del Carmen | Sitio Oficial',
        nombre: 'Hospital del Carmen - San José de Metán',
        bienvenida: 'Bienvenido al Hospital del Carmen',
        slider1: 'Puedes comunicarte con nosotros por cualquiera de los siguientes medios y redes sociales',
        slider2: 'Somos profesionales en el campo de la Salud',
        slider2consulta: 'Enviá tu consulta. Te responderemos en breve',
        slider3: 'Nos importa lo que pensás. Estamos abiertos a sugerenias',
        slider3sug: 'Mejoremos nuestro hospital',
        contactanos: "Contactanos",
        respuesta: "Te responderemos a la brevedad",
        direccion: "José Ignacio Sierra N°610"
    });
});


// -- Servicios -- //

app.get("/servicios", (req, res) => {
    res.render("servicios", {
        titulo: 'Hospital del Carmen | Sitio Oficial',
        nombre: 'Hospital del Carmen - San José de Metán',
        bienvenida: 'Bienvenido al Hospital del Carmen',
        slider1: 'Puedes comunicarte con nosotros por cualquiera de los siguientes medios y redes sociales',
        slider2: 'Somos profesionales en el campo de la Salud',
        slider2consulta: 'Enviá tu consulta. Te responderemos en breve',
        slider3: 'Nos importa lo que pensás. Estamos abiertos a sugerenias',
        slider3sug: 'Mejoremos nuestro hospital',
        sobrenos: "Sobre Nosotros",
        especialistas: "Contamos con los mejores especialistas",
        titulo2: "Sala de Emergencias",
        cirugia: "Nuestro hospital cuenta con sala de emergencias para adultos y niños donde será atendido al instante",
        titulo3: "Médicos Especialistas",
        especialistas: "Contamos con especialistas en cada campo de la salud para una atención de calidad",
        titulo4: "Elementos Especiales",
        especiales: "Contamos con todos los elementos necesarios para la atención de toda clase pacientes",
        titulo5: "Farmacia",
        farmacia: "El hospital cuenta con farmacia propia para facilitar medicamentos a los pacientes sin obra social",
        titulo6: "Vacunatorio",
        vacunatorio: "Contamos con vacunatorio en todos nuestros centros de salud para que te vacunes o lleves a tus hijos",
        titulo7: "Ambulancia",
        ambulancia: "Contamos con varias ambulancias por cualquier situación de emergencia que se presente",
        titulo8: "Centros de Salud - San José de Metán"
    });
});

// -- Crud Servicios -- //



app.get('/cs12oc', (req, res) => {
    let sql = "SELECT * FROM profesional";
    let query = conexion.query(sql, (err, results) => {
        if (err) throw err;
        res.render("cs12oc", {
            results: results,
            titulo: 'Hospital del Carmen | Sitio Oficial',
            nombre: 'Hospital del Carmen - San José de Metán',
            bienvenida: 'Bienvenido al Hospital del Carmen',
            slider1: 'Puedes comunicarte con nosotros por cualquiera de los siguientes medios y redes sociales',
            slider2: 'Somos profesionales en el campo de la Salud',
            slider2consulta: 'Enviá tu consulta. Te responderemos en breve',
            slider3: 'Nos importa lo que pensás. Estamos abiertos a sugerenias',
            slider3sug: 'Mejoremos nuestro hospital',
            sobrenos: "Sobre Nosotros",
            especialistas: "Contamos con los mejores especialistas",
            centrotitulo: "Centro de Salud 12 de Octubre"


        });
    });
});

app.get('/csjdp', (req, res) => {
    let sql = "SELECT * FROM juandperon";
    let query = conexion.query(sql, (err, results) => {
        if (err) throw err;
        res.render("csjdp", {
            results: results,
            titulo: 'Hospital del Carmen | Sitio Oficial',
            nombre: 'Hospital del Carmen - San José de Metán',
            bienvenida: 'Bienvenido al Hospital del Carmen',
            slider1: 'Puedes comunicarte con nosotros por cualquiera de los siguientes medios y redes sociales',
            slider2: 'Somos profesionales en el campo de la Salud',
            slider2consulta: 'Enviá tu consulta. Te responderemos en breve',
            slider3: 'Nos importa lo que pensás. Estamos abiertos a sugerenias',
            slider3sug: 'Mejoremos nuestro hospital',
            sobrenos: "Sobre Nosotros",
            especialistas: "Contamos con los mejores especialistas",
            centrotitulo: "Centro de Salud Juán D. Perón"

        });
    });
});

app.get('/csSC', (req, res) => {
    let sql = "SELECT * FROM sanca";
    let query = conexion.query(sql, (err, results) => {
        if (err) throw err;
        res.render("csSC", {
            results: results,
            titulo: 'Hospital del Carmen | Sitio Oficial',
            nombre: 'Hospital del Carmen - San José de Metán',
            bienvenida: 'Bienvenido al Hospital del Carmen',
            slider1: 'Puedes comunicarte con nosotros por cualquiera de los siguientes medios y redes sociales',
            slider2: 'Somos profesionales en el campo de la Salud',
            slider2consulta: 'Enviá tu consulta. Te responderemos en breve',
            slider3: 'Nos importa lo que pensás. Estamos abiertos a sugerenias',
            slider3sug: 'Mejoremos nuestro hospital',
            sobrenos: "Sobre Nosotros",
            especialistas: "Contamos con los mejores especialistas",
            centrotitulo: "Centro de Salud San Cayetano"

        });
    });
});


app.post('/save', (req, res) => {
    let data = {servicio: req.body.servicio, lunes: req.body.lunes, martes: req.body.martes,miercoles: req.body.miercoles, jueves: req.body.jueves, viernes: req.body.viernes};
    let sql = "INSERT INTO profesional SET ?";
    let query = conn.query(sql, data, (err, results) => {
    if (err) throw err;
    res.redirect('/cs12oc');
    });
});

app.post('/save', (req, res) => {
    let data = {servicio: req.body.servicio, lunes: req.body.lunes, martes: req.body.martes,miercoles: req.body.miercoles, jueves: req.body.jueves, viernes: req.body.viernes};
    let sql = "INSERT INTO sanca SET ?";
    let query = conn.query(sql, data, (err, results) => {
    if (err) throw err;
    res.redirect('/csSC');
    });
});

app.post('/save', (req, res) => {
    let data = {servicio: req.body.servicio, lunes: req.body.lunes, martes: req.body.martes,miercoles: req.body.miercoles, jueves: req.body.jueves, viernes: req.body.viernes};
    let sql = "INSERT INTO juandperon SET ?";
    let query = conn.query(sql, data, (err, results) => {
    if (err) throw err;
    res.redirect('/csjdp');
    });
});

app.listen(port, () => {
    console.log(`Puerto corriendo en http://localhost:${port}`)
});
