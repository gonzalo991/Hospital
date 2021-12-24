-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3305
-- Tiempo de generación: 24-12-2021 a las 04:43:34
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `hospital`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contacto`
--

CREATE TABLE `contacto` (
  `nombre` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `celular` varchar(255) NOT NULL,
  `mensaje` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `juandperon`
--

CREATE TABLE `juandperon` (
  `servicio` varchar(255) NOT NULL,
  `lunes` varchar(255) NOT NULL,
  `martes` varchar(255) NOT NULL,
  `miercoles` varchar(255) NOT NULL,
  `jueves` varchar(255) NOT NULL,
  `viernes` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `juandperon`
--

INSERT INTO `juandperon` (`servicio`, `lunes`, `martes`, `miercoles`, `jueves`, `viernes`) VALUES
('Odontología', 'Dr.Gramaglia 7hs', 'Dr.Gramaglia 15hs', 'Dr.Gramaglia 7hs', 'Dr.Gramaglia 15hs', 'Dr.Gramaglia 7hs'),
('Pediatría', 'Dr.Gómez Rojas 8hs', 'Dr.Gómez Rojas 8hs', 'Dr.Gómez Rojas 8hs', '-', 'Dr.Gómez Rojas 8hs'),
('Pediatría', 'Dra.Barni 8hs', 'Dra.Barni 8hs', 'Dra.Barni 8hs', 'Dra.Barni 8hs', 'Dra.Barni 8hs'),
('Clínica Médica', 'Dra.Vázquez M 15hs', '-', 'Dra.Vázquez M 15hs', '-', 'Dr.Gambarte 15hs'),
('Ginecología', 'Dr.Villa Nogues 14:30hs', '-', '-', 'Dr.Villa Nogues 14:30hs', 'Dr.González 8hs'),
('PAP', '-', 'Dr.González', 'Dr.González', '-', '-'),
('Traumatología', 'Dr.Samson P. 9hs', '-', '-', '-', 'Dr.Samson P. 11hs'),
('Cirugía Pediátrica', '-', 'Dr.Brizuela 8hs', 'Dr.Brizuela 8hs', '-', '-'),
('Cirugía General', '-', '-', 'Dr.Rojas E. 11hs C/15días', 'Dr.Rojas E. 11hs c/15días', '-'),
('Negrología', '-', '-', '-', '-', 'Dr.Humacata 15hs c/15días'),
('Nutrición', 'Lic.Duró 9hs', 'Lic.Duró 9hs', '-', 'Lic.Duró 9hs', '-'),
('Psicología', '-', 'Lic.Palazón 15hs', '-', 'Lic.Díaz Brahim 15hs', 'Lic.Palazón 15hs'),
('Fonoaudiología', '-', '-', 'Lic.López 15hs', '-', '-'),
('Servicio Social', '-', 'Lic.Sosa 8:30hs', '-', 'Lic.Sosa 8:30hs', 'Lic.Sosa 8:30hs'),
('Enfermería', 'De 7 a 19hs', 'De 7 a 19hs', 'De 7 a 19hs', 'De 7 a 19hs', 'De 7 a 19hs'),
('Vacunatorio', 'De 7 a 19hs', 'De 7 a 19hs', 'De 7 a 19hs', 'De 7 a 19hs', 'De 7 a 19hs');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profesional`
--

CREATE TABLE `profesional` (
  `servicio` varchar(255) NOT NULL,
  `lunes` varchar(255) NOT NULL,
  `martes` varchar(255) NOT NULL,
  `miercoles` varchar(255) NOT NULL,
  `jueves` varchar(255) NOT NULL,
  `viernes` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `profesional`
--

INSERT INTO `profesional` (`servicio`, `lunes`, `martes`, `miercoles`, `jueves`, `viernes`) VALUES
('Odontología', 'Dr.Gastaldi 8hs', 'Dr.Gastaldi 8hs', 'Dr.Gastaldi 8hs', 'Dr.Gastaldi 8hs', 'Dr.Gastaldi 8hs'),
('Odontología', '-', 'Dra.Capuzzelo 10hs', 'Dra.Capuzzelo 10hs', 'Dra.Capuzzelo 10hs', 'Dra.Capuzzelo 10hs'),
('Pediatría', 'Dra.Aguirre 8hs', 'Dra.Aguirre 8hs', 'Dra.Aguirre 8hs', 'Dra.Aguirre 8hs', 'Dra.Aguirre 8hs'),
('Clínica Médica', 'Dr.Samson.F 8hs', 'Dr.Samson.F 10hs', 'Dr.Rufino 8:30hs', 'Dr.Rufino 8:30hs', 'Dr.Rufino 8:30hs'),
('Ginecología', 'Dr.Madrazo.F 10hs', 'Dr.Madrazo.F 10hs', '-', '-', 'Dr.Madrazo.F 8hs'),
('PAP', 'Dr.Madrazo.F 14hs', '-', '-', 'Dr.Madrazo.F 14hs', '-'),
('Obstetricia', '-', '-', 'Lic. Vergara 8hs', '-', '-'),
('Traumatología', '-', '-', '-', 'Dr.Pievarolli 14:30hs', '-'),
('Cirugía Gral', 'Dr.Astorga 8hs', '-', '-', 'Dr.Astorga 11hs', '-'),
('Urología', '-', 'Dr.Figueroa 8:30hs', '-', 'Dr.Figueroa 8:30hs', '-'),
('Dermatología', 'Dra.Ledesma 10hs y 14hs', '-', '-', '-', '-'),
('Cardiología Infantil', 'Dr.Suarez 10hs y 14hs', '-', '-', '-', '-'),
('Fonoaudiología', 'Lic.Tomas 9hs', 'Lic.Tomas 9hs', 'Lic.Tomas 9hs', 'Lic.Tomas 9hs', 'Lic.Tomas 9hs'),
('Psicología', 'Lic.Minicucci 15hs', 'Lic.Minicucci 8hs', 'Lic.Minicucci 10hs', '-', 'Lic.Díaz 14hs'),
('Nutrición', 'Lic.Galli 11hs', '-', 'Lic.Duró 9hs', '-', '-');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sanca`
--

CREATE TABLE `sanca` (
  `servicio` varchar(255) NOT NULL,
  `lunes` varchar(255) NOT NULL,
  `martes` varchar(255) NOT NULL,
  `miercoles` varchar(255) NOT NULL,
  `jueves` varchar(255) NOT NULL,
  `viernes` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `sanca`
--

INSERT INTO `sanca` (`servicio`, `lunes`, `martes`, `miercoles`, `jueves`, `viernes`) VALUES
('Odontología', 'Dra.Miy 8hs', 'Dra.Campero 8hs', 'Dra.Miy 8hs', 'Dra.Campero 8hs', 'Dra.Campero 8hs'),
('Odontología', 'Dra.Campero 8hs', 'Dra.Miy 14hs', 'Dra.Campero 8hs', 'Dra.Miy 14hs', 'Dra.Miy 8hs'),
('Pediatría', 'Dra.Barrientos 9hs', 'Dra.López N 10hs', 'Dra.López N 10hs', 'Dra.López N 10hs', 'Dra.López N 10hs'),
('Clinica Médica', 'Dra.Guerrero 8:30hs', 'Dra.Guerrero 8:30hs', 'Dra.Camaño 8hs', 'Dra.Guerrero 9hs', 'Dr.Samson F 9hs'),
('Ginecología', 'Dra.García V 8:30hs', '-', 'Dra.García V 8:30hs', '-', '-'),
('PAP', '-', '-', 'Dra.García V 8:30hs', '-', '-'),
('Diabetes', '-', 'Dra.Pereyra Barros 9hs', '-', '-', 'Dra.Pereyra Barros 9hs'),
('Traumatología', '-', '-', '-', 'Dr.Pievarolli 8hs', '-'),
('Infectología', '-', '-', '-', '-', 'Dr.García C 10hs'),
('Neurología', '-', '-', '-', 'Dra.Flores N 10hs', '-'),
('Fonoaudiología', 'Lic.López Ibarra 8hs', 'Lic.López Ibarra 14hs', 'Lic.López Ibarra 8hs', 'Lic.López Ibarra 14hs', 'Lic.López Ibarra 8hs'),
('Nutrición', '-', 'Lic.Galli V 9hs', 'Lic.Galli V 9hs', 'Lic.Galli V 9hs', '-'),
('Psicología', '-', '-', '-', 'Lic.Minicucci 8hs', '-'),
('Enfermería', 'De 7 a 16hs', 'De 7 a 16hs', 'De 7 a 16hs', 'De 7 a 16hs', 'De 7 a 16hs');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
