-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: localhost    Database: diem_danh
-- ------------------------------------------------------
-- Server version	8.0.21

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
-- Table structure for table `teach`
--

DROP TABLE IF EXISTS `teach`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teach` (
  `id_teacher` int NOT NULL,
  `id_section_class` int NOT NULL,
  PRIMARY KEY (`id_teacher`,`id_section_class`),
  KEY `id_section_class` (`id_section_class`),
  CONSTRAINT `teach_ibfk_1` FOREIGN KEY (`id_teacher`) REFERENCES `teacher` (`id`),
  CONSTRAINT `teach_ibfk_2` FOREIGN KEY (`id_section_class`) REFERENCES `section_class` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teach`
--

LOCK TABLES `teach` WRITE;
/*!40000 ALTER TABLE `teach` DISABLE KEYS */;
INSERT INTO `teach` VALUES (63,68),(64,69),(65,70),(66,71),(67,72),(68,73),(69,74),(70,75),(71,76),(72,77),(73,78),(74,79),(75,80),(76,81),(77,82),(78,83),(79,84),(80,85),(81,86),(82,87),(83,88),(84,89),(85,90),(86,91),(87,92),(63,93),(64,94),(65,95),(66,96),(67,97),(68,98),(69,99),(70,100),(71,101),(72,102),(73,103),(74,104),(75,105),(76,106),(77,107),(78,108),(79,109),(80,110),(81,111),(82,112),(83,113),(84,114),(85,115),(86,116),(87,117);
/*!40000 ALTER TABLE `teach` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-06 16:50:49
