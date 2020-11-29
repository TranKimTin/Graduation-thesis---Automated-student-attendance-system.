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
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `role` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  KEY `user_ibfk_1` (`role`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`role`) REFERENCES `role` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=153 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'admin','21232f297a57a5a743894a0e4a801fc3',1),(103,'GV001','aee22ae84e37d01f0b68b11cacdcc6b6',2),(104,'GV002','46a41e9d578f742d76584d72c17fba50',2),(105,'GV003','910c1852975a856b3ecab2cb95d9c0ce',2),(106,'GV004','b3c86a84ca1f4c07a2637b7c5b0542b7',2),(107,'GV005','411d39645b4be9b656352becaf7879b5',2),(108,'GV006','f1be3391ac8dd8d378d0f2f9507c848a',2),(109,'GV007','061a2d0a470e1663b39ea310965d537f',2),(110,'GV008','da5cc6b89e0b7ab96057e19df53ce81e',2),(111,'GV009','bee0471cf52632b41b51b59fd6f6ef5f',2),(112,'GV010','b895952ae51377efd7eb14e3523b79c6',2),(113,'GV011','91a47191ad9143243a71d3400bdf32ae',2),(114,'GV012','99dfb35a2e41972c652cc2f75ed29333',2),(115,'GV013','3b380f72887e5ef6a8b590c40073af1a',2),(116,'GV014','9995d48fc392aff731b05595cdf0cb5f',2),(117,'GV015','64d9b8e55a34c856f396286103015ccb',2),(118,'GV016','36770051a8b3bb14242e366c2377229f',2),(119,'GV017','e5ac29fe385563659c6113edf6b8a068',2),(120,'GV018','3ef93f0b340192820efd78d6c752e14c',2),(121,'GV019','fcd492a63c320494ad6828285ab848bc',2),(122,'GV020','543426cbbe01ff9e758aa04022c034d5',2),(123,'GV021','0898d260be96dc9ffbfe4cb4fa53855b',2),(124,'GV022','7fcabbb347a7b1e0d228c93627301152',2),(125,'GV023','b4e4fdc978e0250e900f06994e88d318',2),(126,'GV024','7879106aa41c536ead35556f2b58cef2',2),(127,'GV025','d927f08aa3d9945696772d3f20eefe92',2),(128,'GV026','e997ca14b84537f0e1f7318fbbdcc123',2),(129,'GV027','8693927733e773fa15dc015a94c28129',2),(130,'GV028','7e858b7b21d70a1d4d11906af82843a9',2),(131,'GV029','ade10466bd5d892379e5143d2a43a6a2',2),(132,'GV030','0255cd46d0fee91d26abe2f1c3babd3a',2),(133,'GV031','14081c2c4ecd2ee13e591ca521c21329',2),(134,'GV032','b3927dfdb239f2924b9c0c3e52fa7ba5',2),(135,'GV033','13519d152c7b0649d1ff67529873e02e',2),(136,'GV034','505b7427cba7fd1e2d763cb3c5eae34e',2),(137,'GV035','f780d4b461c9bf34950135ad949607f6',2),(138,'GV036','9ed65ae9f46d733b0f8e60e02113bdf0',2),(139,'GV037','b238018205d4f564e574ab3470cbf3e6',2),(140,'GV038','5c2e564e08c5fee3570cf146eb63be78',2),(141,'GV039','6378296b88adb92c6e39f07ec2dcf92b',2),(142,'GV040','bef22df8652a1f3971525b247fc2ef13',2),(143,'GV041','29be945890a132998a86a9324b17ff72',2),(144,'GV042','48a55fc0fe68564e29446f3c056b4165',2),(145,'GV043','4a2a91aefb22324fb0d6f1a19b71a955',2),(146,'GV044','3eea316001a0e828c4a41d92818eac77',2),(147,'GV045','55d26aa629febe0d0d22fc02f6f7f90b',2),(148,'GV046','05ef8cfb16caca2acacd4d35b9a9a855',2),(149,'GV047','5098748189cfbfc59d280695fda94861',2),(150,'GV048','85f7d42e167245dc48cde0170690a418',2),(151,'GV049','9c9ec03a9fdb31eb42ebb04153a340d6',2),(152,'GV050','0fcbf73242be74e086f5ae9549b61eb9',2);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-11-30  0:31:49
