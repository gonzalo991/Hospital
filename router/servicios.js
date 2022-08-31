const {Router} = require('express');
const conexion = require('./../bd');
const servicios = new Router();

servicios.get("/servicios", (req, res) => {
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


servicios.get('/cs12oc', (req, res) => {
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

servicios.get('/csjdp', (req, res) => {
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

servicios.get('/csSC', (req, res) => {
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

//--Agregar,editar,borrar servicio Centro de Salud 12 de octubre--//
servicios.post('/save', (req, res) => {
    let data = {servicio: req.body.servicio, lunes: req.body.lunes, martes: req.body.martes,miercoles: req.body.miercoles, jueves: req.body.jueves, viernes: req.body.viernes};
    let sql = "INSERT INTO profesional SET ?";
    let query = conexion.query(sql, data, (err, results) => {
    if (err) throw err;
    res.redirect('/cs12oc');
    });
});

servicios.post('/update', (req, res) => {
    let sql = "UPDATE profesional SET servicio='" + req.body.servicio + "', lunes='" + req.body.lunes + "',martes='"+req.body.martes+"',miercoles='"+req.body.miercoles+"'jueves='"+req.body.jueves+"',viernes='"+req.body.viernes+"' WHERE producto_id=" + req.body.id;
    let query = conexion.query(sql, (err, results) => {
      if (err) throw err;
      res.redirect('/cs12oc');
    });
  });
  
  servicios.post('/delete',(req, res) => {
    let sql = "DELETE FROM profesional WHERE servicio"+req.body.servicio+"";
    let query = conn.query(sql, (err, results) => {
      if(err) throw err;
        res.redirect('/cs12oc');
    });
  });

//--Agregar,editar,borrar servicio Centro de salud San Cayetano--//

servicios.post('/save', (req, res) => {
    let data = {servicio: req.body.servicio, lunes: req.body.lunes, martes: req.body.martes,miercoles: req.body.miercoles, jueves: req.body.jueves, viernes: req.body.viernes};
    let sql = "INSERT INTO sanca SET ?";
    let query = conexion.query(sql, data, (err, results) => {
    if (err) throw err;
    res.redirect('/csSC');
    });
});

servicios.post('/update', (req, res) => {
    let sql = "UPDATE profesional SET servicio='" + req.body.servicio + "', lunes='" + req.body.lunes + "',martes='"+req.body.martes+"',miercoles='"+req.body.miercoles+"'jueves='"+req.body.jueves+"',viernes='"+req.body.viernes+"' WHERE producto_id=" + req.body.id;
    let query = conexion.query(sql, (err, results) => {
      if (err) throw err;
      res.redirect('/csSC');
    });
  });
  
  servicios.post('/delete',(req, res) => {
    let sql = "DELETE FROM profesional WHERE servicio="+req.body.servicio+"";
    let query = conn.query(sql, (err, results) => {
      if(err) throw err;
        res.redirect('/csSC');
    });
  });

//--Agregar,editar,borrar servicio Centro de salud Juán D. Perón--//
servicios.post('/save', (req, res) => {
    let data = {servicio: req.body.servicio, lunes: req.body.lunes, martes: req.body.martes,miercoles: req.body.miercoles, jueves: req.body.jueves, viernes: req.body.viernes};
    let sql = "INSERT INTO juandperon SET ?";
    let query = conexion.query(sql, data, (err, results) => {
    if (err) throw err;
    res.redirect('/csjdp');
    });
});

servicios.post('/update', (req, res) => {
    let sql = "UPDATE profesional SET servicio='" + req.body.servicio + "', lunes='" + req.body.lunes + "',martes='"+req.body.martes+"',miercoles='"+req.body.miercoles+"'jueves='"+req.body.jueves+"',viernes='"+req.body.viernes+"' WHERE producto_id=" + req.body.id;
    let query = conexion.query(sql, (err, results) => {
      if (err) throw err;
      res.redirect('/csjdp');
    });
  });
  
  servicios.post('/delete',(req, res) => {
    let sql = "DELETE FROM profesional WHERE servicio="+req.body.servicio+"";
    let query = conexion.query(sql, (err, results) => {
      if(err) throw err;
        res.redirect('/csjdp');
    });
  });


module.exports = servicios;