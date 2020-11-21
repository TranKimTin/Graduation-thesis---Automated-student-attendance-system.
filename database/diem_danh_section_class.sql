-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: diem_danh
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `section_class`
--

DROP TABLE IF EXISTS `section_class`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `section_class` (
  `id` int NOT NULL AUTO_INCREMENT,
  `section_class_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `section_class_code` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `id_subject` int DEFAULT NULL,
  `id_year` int DEFAULT NULL,
  `id_semester` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `section_class_code` (`section_class_code`),
  KEY `id_subject` (`id_subject`),
  KEY `id_year` (`id_year`),
  KEY `id_semester` (`id_semester`),
  CONSTRAINT `section_class_ibfk_1` FOREIGN KEY (`id_subject`) REFERENCES `subject` (`id`),
  CONSTRAINT `section_class_ibfk_2` FOREIGN KEY (`id_year`) REFERENCES `year` (`id`),
  CONSTRAINT `section_class_ibfk_3` FOREIGN KEY (`id_semester`) REFERENCES `semester` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `section_class`
--

LOCK TABLES `section_class` WRITE;
/*!40000 ALTER TABLE `section_class` DISABLE KEYS */;
INSERT INTO `section_class` VALUES (1,'test','testt1',8,3,2),(2,'tt','tt',5,3,2),(4,'sad','sad',8,3,2),(8,'a','s',8,5,1),(9,'sada','dasd',8,4,2),(10,'qwe','q2e',10,3,1),(15,'test','ts',10,4,1);
/*!40000 ALTER TABLE `section_class` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-11-18 15:13:27
