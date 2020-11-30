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
-- Table structure for table `teacher`
--

DROP TABLE IF EXISTS `teacher`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teacher` (
  `id` int NOT NULL AUTO_INCREMENT,
  `teacher_code` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `teacher_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  `gender` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `teacher_code` (`teacher_code`)
) ENGINE=InnoDB AUTO_INCREMENT=113 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teacher`
--

LOCK TABLES `teacher` WRITE;
/*!40000 ALTER TABLE `teacher` DISABLE KEYS */;
INSERT INTO `teacher` VALUES (63,'GV001','Giảng viên 001','1980-01-01','Nam'),(64,'GV002','Giảng viên 002','1980-01-02','Nam'),(65,'GV003','Giảng viên 003','1980-01-03','Nữ'),(66,'GV004','Giảng viên 004','1980-01-04','Nữ'),(67,'GV005','Giảng viên 005','1980-01-05','Nam'),(68,'GV006','Giảng viên 006','1980-01-06','Nữ'),(69,'GV007','Giảng viên 007','1980-01-07','Nữ'),(70,'GV008','Giảng viên 008','1980-01-08','Nam'),(71,'GV009','Giảng viên 009','1980-01-09','Nam'),(72,'GV010','Giảng viên 010','1980-01-10','Nam'),(73,'GV011','Giảng viên 011','1980-01-11','Nữ'),(74,'GV012','Giảng viên 012','1980-01-12','Nam'),(75,'GV013','Giảng viên 013','1980-01-13','Nữ'),(76,'GV014','Giảng viên 014','1980-01-14','Nam'),(77,'GV015','Giảng viên 015','1980-01-15','Nam'),(78,'GV016','Giảng viên 016','1980-01-16','Nữ'),(79,'GV017','Giảng viên 017','1980-01-17','Nữ'),(80,'GV018','Giảng viên 018','1980-01-18','Nam'),(81,'GV019','Giảng viên 019','1980-01-19','Nam'),(82,'GV020','Giảng viên 020','1980-01-20','Nam'),(83,'GV021','Giảng viên 021','1980-01-21','Nữ'),(84,'GV022','Giảng viên 022','1980-01-22','Nam'),(85,'GV023','Giảng viên 023','1980-01-23','Nữ'),(86,'GV024','Giảng viên 024','1980-01-24','Nữ'),(87,'GV025','Giảng viên 025','1980-01-25','Nam'),(88,'GV026','Giảng viên 026','1980-01-26','Nữ'),(89,'GV027','Giảng viên 027','1980-01-27','Nam'),(90,'GV028','Giảng viên 028','1980-01-28','Nam'),(91,'GV029','Giảng viên 029','1980-01-29','Nam'),(92,'GV030','Giảng viên 030','1980-01-30','Nam'),(93,'GV031','Giảng viên 031','1980-01-31','Nữ'),(94,'GV032','Giảng viên 032','1980-02-01','Nam'),(95,'GV033','Giảng viên 033','1980-02-02','Nam'),(96,'GV034','Giảng viên 034','1980-02-03','Nữ'),(97,'GV035','Giảng viên 035','1980-02-04','Nam'),(98,'GV036','Giảng viên 036','1980-02-05','Nam'),(99,'GV037','Giảng viên 037','1980-02-06','Nữ'),(100,'GV038','Giảng viên 038','1980-02-07','Nam'),(101,'GV039','Giảng viên 039','1980-02-08','Nam'),(102,'GV040','Giảng viên 040','1980-02-09','Nam'),(103,'GV041','Giảng viên 041','1980-02-10','Nam'),(104,'GV042','Giảng viên 042','1980-02-11','Nữ'),(105,'GV043','Giảng viên 043','1980-02-12','Nam'),(106,'GV044','Giảng viên 044','1980-02-13','Nam'),(107,'GV045','Giảng viên 045','1980-02-14','Nam'),(108,'GV046','Giảng viên 046','1980-02-15','Nam'),(109,'GV047','Giảng viên 047','1980-02-16','Nam'),(110,'GV048','Giảng viên 048','1980-02-17','Nữ'),(111,'GV049','Giảng viên 049','1980-02-18','Nam'),(112,'GV050','Giảng viên 050','1980-02-19','Nữ');
/*!40000 ALTER TABLE `teacher` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-11-30 16:59:58
