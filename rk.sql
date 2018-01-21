CREATE DATABASE  IF NOT EXISTS `rk` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `rk`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: rk
-- ------------------------------------------------------
-- Server version	5.7.19-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `laenutused`
--

DROP TABLE IF EXISTS `laenutused`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `laenutused` (
  `idlaenutused` int(11) NOT NULL AUTO_INCREMENT,
  `idraamatud` int(11) NOT NULL,
  `idlugejad` int(11) NOT NULL,
  `tagastatud` varchar(1) NOT NULL DEFAULT 'N',
  PRIMARY KEY (`idlaenutused`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `laenutused`
--

LOCK TABLES `laenutused` WRITE;
/*!40000 ALTER TABLE `laenutused` DISABLE KEYS */;
/*!40000 ALTER TABLE `laenutused` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lugejad`
--

DROP TABLE IF EXISTS `lugejad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lugejad` (
  `idlugejad` int(11) NOT NULL AUTO_INCREMENT,
  `eesnimi` varchar(45) NOT NULL,
  `perenimi` varchar(45) NOT NULL,
  PRIMARY KEY (`idlugejad`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lugejad`
--

LOCK TABLES `lugejad` WRITE;
/*!40000 ALTER TABLE `lugejad` DISABLE KEYS */;
INSERT INTO `lugejad` VALUES (1,'Mari','Maasikas'),(2,'Jüri','Maasikas'),(3,'Piret','Vaarikas'),(4,'Piret','Jõhvikas'),(5,'Mari','Kask'),(6,'Jüri','Kask'),(7,'Jüri','Tamm'),(8,'Anne','Kask'),(9,'Anne','Kull'),(10,'Jüri','Tihane'),(11,'Ülo','Tamm');
/*!40000 ALTER TABLE `lugejad` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `raamatud`
--

DROP TABLE IF EXISTS `raamatud`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `raamatud` (
  `idraamatud` int(11) NOT NULL AUTO_INCREMENT,
  `autor1_eesnimi` varchar(45) DEFAULT NULL,
  `autor1_perenimi` varchar(45) DEFAULT NULL,
  `autor2_eesnimi` varchar(45) DEFAULT NULL,
  `autor2_perenimi` varchar(45) DEFAULT NULL,
  `pealkiri` varchar(100) NOT NULL,
  `aasta` int(11) NOT NULL,
  PRIMARY KEY (`idraamatud`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `raamatud`
--

LOCK TABLES `raamatud` WRITE;
/*!40000 ALTER TABLE `raamatud` DISABLE KEYS */;
INSERT INTO `raamatud` VALUES (1,'Astrid','Lindgren','','','Pipi Pikksukk',1978),(2,'Astrid','Lindgren','','','Emil',2001),(3,'Lennart','Meri',NULL,NULL,'Hõbevalgem',2012),(4,'',NULL,NULL,NULL,'Mudila nupula',1975),(5,'Victor','Hugo',NULL,NULL,'Jumalema kirik Pariisi',2012),(6,'Herman','Sergo','',NULL,'Näkimadalad I',1979),(7,'Herman ','Sergo',NULL,NULL,'Näkimadalad II',1980),(8,'Herman','Sergo ',NULL,NULL,'Näkimadalad III',1980),(9,'Berit','Renser',NULL,NULL,'Minu Indoneesia',2017),(10,'Ingrid','Eomõis',NULL,NULL,'Minu Malta',2017),(11,NULL,NULL,NULL,NULL,'Abiks ristsõnade lahendajale',2017);
/*!40000 ALTER TABLE `raamatud` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-01-21 12:30:58
