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
  `section_class_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `section_class_code` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
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
) ENGINE=InnoDB AUTO_INCREMENT=118 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `section_class`
--

LOCK TABLES `section_class` WRITE;
/*!40000 ALTER TABLE `section_class` DISABLE KEYS */;
INSERT INTO `section_class` VALUES (68,'Lớp học phần 001','LHP001',27,8,20),(69,'Lớp học phần 002','LHP002',27,8,20),(70,'Lớp học phần 003','LHP003',27,8,20),(71,'Lớp học phần 004','LHP004',27,8,20),(72,'Lớp học phần 005','LHP005',27,8,20),(73,'Lớp học phần 006','LHP006',28,8,20),(74,'Lớp học phần 007','LHP007',28,8,20),(75,'Lớp học phần 008','LHP008',28,8,20),(76,'Lớp học phần 009','LHP009',29,8,20),(77,'Lớp học phần 010','LHP010',29,8,20),(78,'Lớp học phần 011','LHP011',30,8,20),(79,'Lớp học phần 012','LHP012',30,8,20),(80,'Lớp học phần 013','LHP013',31,8,20),(81,'Lớp học phần 014','LHP014',31,8,20),(82,'Lớp học phần 015','LHP015',32,8,20),(83,'Lớp học phần 016','LHP016',32,8,20),(84,'Lớp học phần 017','LHP017',33,8,20),(85,'Lớp học phần 018','LHP018',33,8,20),(86,'Lớp học phần 019','LHP019',34,8,20),(87,'Lớp học phần 020','LHP020',34,8,20),(88,'Lớp học phần 021','LHP021',35,8,20),(89,'Lớp học phần 022','LHP022',35,8,20),(90,'Lớp học phần 023','LHP023',36,8,20),(91,'Lớp học phần 024','LHP024',36,8,20),(92,'Lớp học phần 025','LHP025',37,8,20),(93,'Lớp học phần 026','LHP026',37,8,20),(94,'Lớp học phần 027','LHP027',38,8,20),(95,'Lớp học phần 028','LHP028',38,8,20),(96,'Lớp học phần 029','LHP029',39,8,20),(97,'Lớp học phần 030','LHP030',39,8,20),(98,'Lớp học phần 031','LHP031',40,8,20),(99,'Lớp học phần 032','LHP032',40,8,20),(100,'Lớp học phần 033','LHP033',40,8,20),(101,'Lớp học phần 034','LHP034',41,8,20),(102,'Lớp học phần 035','LHP035',41,8,20),(103,'Lớp học phần 036','LHP036',42,8,20),(104,'Lớp học phần 037','LHP037',42,8,20),(105,'Lớp học phần 038','LHP038',43,8,20),(106,'Lớp học phần 039','LHP039',43,8,20),(107,'Lớp học phần 040','LHP040',44,8,20),(108,'Lớp học phần 041','LHP041',44,8,20),(109,'Lớp học phần 042','LHP042',44,8,20),(110,'Lớp học phần 043','LHP043',45,8,20),(111,'Lớp học phần 044','LHP044',45,8,20),(112,'Lớp học phần 045','LHP045',45,8,20),(113,'Lớp học phần 046','LHP046',46,8,20),(114,'Lớp học phần 047','LHP047',46,8,20),(115,'Lớp học phần 048','LHP048',46,8,20),(116,'Lớp học phần 049','LHP049',46,8,20),(117,'Lớp học phần 050','LHP050',46,8,20);
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

-- Dump completed on 2020-11-30 16:59:46
