const {Router} = require('express');
const home = new Router();

home.get("/", (req, res) => {
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

module.exports = home;