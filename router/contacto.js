const { Router } = require('express');
const contacto = new Router();
const nodemailer = require('nodemailer');
const { proto } = require('once');

contacto.post('/send-email', (req, res) => {
    const nombre = req.body.nombre;
    const mail = req.body.mail;
    const numero = req.body.numero;
    const asunto = req.body.asunto;
    const mensaje = req.body.asunto;

    let transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });

    let mailOptions = {
        to: "Hospital Del Carmen",
        from: `${nombre}`,
        subjet: `${asunto}`,
        html: `<h1> <b><style color:blue;>Al Hospital del Carme de la ciudad de San José de Metán</style></b></h1> <br>
        ${mensaje}<br><br>
        Contacto del paciente:<br>E-mail: ${mail}<br>Celular: ${numero}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          res.status(500).send(error.message);
        }else{
            res.render("envioexitoso", {
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
                direccion: "José Ignacio Sierra N°610",
                exito: "Mensaje enviado exitosamente"
            });
        }
        res.status(200).jsonp(reqbody);
    })

});


contacto.get("/contacto", (req, res) => {
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

module.exports = contacto;