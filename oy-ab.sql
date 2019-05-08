-- --------------------------------------------------------
-- Verkkotietokone:              127.0.0.1
-- Palvelinversio:               10.2.13-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Versio:              9.4.0.5125
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
DROP DATABASE IF EXISTS `oyab`;
CREATE DATABASE `oyab`;
USE `oyab`;

-- Dumping structure for taulu oy-ab.kayttaja
CREATE TABLE IF NOT EXISTS `kayttaja` (
  `Sahkoposti` varchar(50) NOT NULL,
  `Salasana` varchar(50) NOT NULL,
  `Osoite` varchar(50) NOT NULL,
  `Oikeudet` int(11) DEFAULT 1,
  `Tilausnumero` int(11),
  PRIMARY KEY (`Sahkoposti`),
  KEY `Tilausnumero` (`Tilausnumero`),
  CONSTRAINT `kayttaja_ibfk_1` FOREIGN KEY (`Tilausnumero`) REFERENCES `tilaus` (`Tilausnumero`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table oy-ab.kayttaja: ~0 rows (suunnilleen)
/*!40000 ALTER TABLE `kayttaja` DISABLE KEYS */;
/*!40000 ALTER TABLE `kayttaja` ENABLE KEYS */;

-- Dumping structure for taulu oy-ab.sisaltaa
CREATE TABLE IF NOT EXISTS `sisaltaa` (
  `Tilausnumero` int(11) NOT NULL,
  `Tuotetunnus` int(11) NOT NULL,
  PRIMARY KEY (`Tilausnumero`,`Tuotetunnus`),
  KEY `Tuotetunnus` (`Tuotetunnus`),
  CONSTRAINT `sisaltaa_ibfk_1` FOREIGN KEY (`Tilausnumero`) REFERENCES `tilaus` (`Tilausnumero`),
  CONSTRAINT `sisaltaa_ibfk_2` FOREIGN KEY (`Tuotetunnus`) REFERENCES `tuote` (`Tuotetunnus`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table oy-ab.sisaltaa: ~0 rows (suunnilleen)
/*!40000 ALTER TABLE `sisaltaa` DISABLE KEYS */;
/*!40000 ALTER TABLE `sisaltaa` ENABLE KEYS */;

-- Dumping structure for taulu oy-ab.tilaus
CREATE TABLE IF NOT EXISTS `tilaus` (
  `Tilausnumero` int(11) NOT NULL,
  PRIMARY KEY (`Tilausnumero`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table oy-ab.tilaus: ~0 rows (suunnilleen)
/*!40000 ALTER TABLE `tilaus` DISABLE KEYS */;
/*!40000 ALTER TABLE `tilaus` ENABLE KEYS */;

-- Dumping structure for taulu oy-ab.tuote
CREATE TABLE IF NOT EXISTS `tuote` (
  `Tuotetunnus` int(11) NOT NULL,
  PRIMARY KEY (`Tuotetunnus`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table oy-ab.tuote: ~4 rows (suunnilleen)
/*!40000 ALTER TABLE `tuote` DISABLE KEYS */;
INSERT INTO `tuote` (`Tuotetunnus`) VALUES
	(1),
	(2),
	(3),
	(4);
/*!40000 ALTER TABLE `tuote` ENABLE KEYS */;

-- Dumping structure for taulu oy-ab.tuotetyyppi
CREATE TABLE IF NOT EXISTS `tuotetyyppi` (
  `Nimi` varchar(50) NOT NULL,
  `Kuvaus` text NOT NULL,
  `Hinta` double NOT NULL,
  `Tuotetunnus` int(11) NOT NULL,
  `Kuva` text NOT NULL,
  PRIMARY KEY (`Nimi`),
  KEY `Tuotetunnus` (`Tuotetunnus`),
  CONSTRAINT `tuotetyyppi_ibfk_1` FOREIGN KEY (`Tuotetunnus`) REFERENCES `tuote` (`Tuotetunnus`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table oy-ab.tuotetyyppi: ~2 rows (suunnilleen)
/*!40000 ALTER TABLE `tuotetyyppi` DISABLE KEYS */;
INSERT INTO `tuotetyyppi` (`Nimi`, `Kuvaus`, `Hinta`, `Tuotetunnus`, `Kuva`) VALUES
	('Meisseli', 'Tyokalu', 10, 1, '../kuvat/meisseli.jpg'),
	('Vasara', 'Tyokalu', 5, 2, '../kuvat/vasara.jpg');
/*!40000 ALTER TABLE `tuotetyyppi` ENABLE KEYS */;

-- Dumping structure for taulu oy-ab.varasto
CREATE TABLE IF NOT EXISTS `varasto` (
  `Varastotunnus` int(11) NOT NULL,
  `Tuotetunnus` int(11) NOT NULL,
  PRIMARY KEY (`Varastotunnus`),
  KEY `Tuotetunnus` (`Tuotetunnus`),
  CONSTRAINT `varasto_ibfk_1` FOREIGN KEY (`Tuotetunnus`) REFERENCES `tuote` (`Tuotetunnus`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table oy-ab.varasto: ~0 rows (suunnilleen)
/*!40000 ALTER TABLE `varasto` DISABLE KEYS */;
/*!40000 ALTER TABLE `varasto` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
