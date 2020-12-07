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
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student` (
  `id` int NOT NULL AUTO_INCREMENT,
  `student_code` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `student_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  `gender` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `class_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `student_code` (`student_code`),
  KEY `class_id` (`class_id`),
  CONSTRAINT `student_ibfk_1` FOREIGN KEY (`class_id`) REFERENCES `class` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=509 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student`
--

LOCK TABLES `student` WRITE;
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
INSERT INTO `student` VALUES (9,'SV001','Sinh viên 001','1998-01-01','Nam',34),(10,'SV002','Sinh viên 002','1998-01-02','Nam',34),(11,'SV003','Sinh viên 003','1998-01-03','Nữ',34),(12,'SV004','Sinh viên 004','1998-01-04','Nữ',34),(13,'SV005','Sinh viên 005','1998-01-05','Nam',34),(14,'SV006','Sinh viên 006','1998-01-06','Nữ',34),(15,'SV007','Sinh viên 007','1998-01-07','Nữ',34),(16,'SV008','Sinh viên 008','1998-01-08','Nam',34),(17,'SV009','Sinh viên 009','1998-01-09','Nam',34),(18,'SV010','Sinh viên 010','1998-01-10','Nam',34),(19,'SV011','Sinh viên 011','1998-01-11','Nữ',34),(20,'SV012','Sinh viên 012','1998-01-12','Nam',34),(21,'SV013','Sinh viên 013','1998-01-13','Nữ',34),(22,'SV014','Sinh viên 014','1998-01-14','Nam',34),(23,'SV015','Sinh viên 015','1998-01-15','Nam',34),(24,'SV016','Sinh viên 016','1998-01-16','Nữ',34),(25,'SV017','Sinh viên 017','1998-01-17','Nữ',34),(26,'SV018','Sinh viên 018','1998-01-18','Nam',34),(27,'SV019','Sinh viên 019','1998-01-19','Nam',34),(28,'SV020','Sinh viên 020','1998-01-20','Nam',34),(29,'SV021','Sinh viên 021','1998-01-21','Nữ',34),(30,'SV022','Sinh viên 022','1998-01-22','Nam',34),(31,'SV023','Sinh viên 023','1998-01-23','Nữ',34),(32,'SV024','Sinh viên 024','1998-01-24','Nữ',34),(33,'SV025','Sinh viên 025','1998-01-25','Nam',34),(34,'SV026','Sinh viên 026','1998-01-26','Nữ',34),(35,'SV027','Sinh viên 027','1998-01-27','Nam',34),(36,'SV028','Sinh viên 028','1998-01-28','Nam',34),(37,'SV029','Sinh viên 029','1998-01-29','Nam',34),(38,'SV030','Sinh viên 030','1998-01-30','Nam',34),(39,'SV031','Sinh viên 031','1998-01-31','Nữ',34),(40,'SV032','Sinh viên 032','1998-02-01','Nam',34),(41,'SV033','Sinh viên 033','1998-02-02','Nam',34),(42,'SV034','Sinh viên 034','1998-02-03','Nữ',34),(43,'SV035','Sinh viên 035','1998-02-04','Nam',34),(44,'SV036','Sinh viên 036','1998-02-05','Nam',34),(45,'SV037','Sinh viên 037','1998-02-06','Nữ',34),(46,'SV038','Sinh viên 038','1998-02-07','Nam',34),(47,'SV039','Sinh viên 039','1998-02-08','Nam',34),(48,'SV040','Sinh viên 040','1998-02-09','Nam',34),(49,'SV041','Sinh viên 041','1998-02-10','Nam',34),(50,'SV042','Sinh viên 042','1998-02-11','Nữ',34),(51,'SV043','Sinh viên 043','1998-02-12','Nam',34),(52,'SV044','Sinh viên 044','1998-02-13','Nam',34),(53,'SV045','Sinh viên 045','1998-02-14','Nam',34),(54,'SV046','Sinh viên 046','1998-02-15','Nam',34),(55,'SV047','Sinh viên 047','1998-02-16','Nam',34),(56,'SV048','Sinh viên 048','1998-02-17','Nữ',34),(57,'SV049','Sinh viên 049','1998-02-18','Nam',34),(58,'SV050','Sinh viên 050','1998-02-19','Nữ',34),(59,'SV051','Sinh viên 051','1998-02-20','Nam',35),(60,'SV052','Sinh viên 052','1998-02-21','Nam',35),(61,'SV053','Sinh viên 053','1998-02-22','Nữ',35),(62,'SV054','Sinh viên 054','1998-02-23','Nữ',35),(63,'SV055','Sinh viên 055','1998-02-24','Nam',35),(64,'SV056','Sinh viên 056','1998-02-25','Nữ',35),(65,'SV057','Sinh viên 057','1998-02-26','Nữ',35),(66,'SV058','Sinh viên 058','1998-02-27','Nam',35),(67,'SV059','Sinh viên 059','1998-02-28','Nam',35),(68,'SV060','Sinh viên 060','1998-03-01','Nam',35),(69,'SV061','Sinh viên 061','1998-03-02','Nữ',35),(70,'SV062','Sinh viên 062','1998-03-03','Nam',35),(71,'SV063','Sinh viên 063','1998-03-04','Nữ',35),(72,'SV064','Sinh viên 064','1998-03-05','Nam',35),(73,'SV065','Sinh viên 065','1998-03-06','Nam',35),(74,'SV066','Sinh viên 066','1998-03-07','Nữ',35),(75,'SV067','Sinh viên 067','1998-03-08','Nữ',35),(76,'SV068','Sinh viên 068','1998-03-09','Nam',35),(77,'SV069','Sinh viên 069','1998-03-10','Nam',35),(78,'SV070','Sinh viên 070','1998-03-11','Nam',35),(79,'SV071','Sinh viên 071','1998-03-12','Nữ',35),(80,'SV072','Sinh viên 072','1998-03-13','Nam',35),(81,'SV073','Sinh viên 073','1998-03-14','Nữ',35),(82,'SV074','Sinh viên 074','1998-03-15','Nữ',35),(83,'SV075','Sinh viên 075','1998-03-16','Nam',35),(84,'SV076','Sinh viên 076','1998-03-17','Nữ',35),(85,'SV077','Sinh viên 077','1998-03-18','Nam',35),(86,'SV078','Sinh viên 078','1998-03-19','Nam',35),(87,'SV079','Sinh viên 079','1998-03-20','Nam',35),(88,'SV080','Sinh viên 080','1998-03-21','Nam',35),(89,'SV081','Sinh viên 081','1998-03-22','Nữ',35),(90,'SV082','Sinh viên 082','1998-03-23','Nam',35),(91,'SV083','Sinh viên 083','1998-03-24','Nam',35),(92,'SV084','Sinh viên 084','1998-03-25','Nữ',35),(93,'SV085','Sinh viên 085','1998-03-26','Nam',35),(94,'SV086','Sinh viên 086','1998-03-27','Nam',35),(95,'SV087','Sinh viên 087','1998-03-28','Nữ',35),(96,'SV088','Sinh viên 088','1998-03-29','Nam',35),(97,'SV089','Sinh viên 089','1998-03-30','Nam',35),(98,'SV090','Sinh viên 090','1998-03-31','Nam',35),(99,'SV091','Sinh viên 091','1998-04-01','Nam',35),(100,'SV092','Sinh viên 092','1998-04-02','Nữ',35),(101,'SV093','Sinh viên 093','1998-04-03','Nam',35),(102,'SV094','Sinh viên 094','1998-04-04','Nam',35),(103,'SV095','Sinh viên 095','1998-04-05','Nam',35),(104,'SV096','Sinh viên 096','1998-04-06','Nam',35),(105,'SV097','Sinh viên 097','1998-04-07','Nam',35),(106,'SV098','Sinh viên 098','1998-04-08','Nữ',35),(107,'SV099','Sinh viên 099','1998-04-09','Nam',35),(108,'SV100','Sinh viên 100','1998-04-10','Nữ',35),(109,'SV101','Sinh viên 101','1998-04-11','Nam',36),(110,'SV102','Sinh viên 102','1998-04-12','Nam',36),(111,'SV103','Sinh viên 103','1998-04-13','Nữ',36),(112,'SV104','Sinh viên 104','1998-04-14','Nữ',36),(113,'SV105','Sinh viên 105','1998-04-15','Nam',36),(114,'SV106','Sinh viên 106','1998-04-16','Nữ',36),(115,'SV107','Sinh viên 107','1998-04-17','Nữ',36),(116,'SV108','Sinh viên 108','1998-04-18','Nam',36),(117,'SV109','Sinh viên 109','1998-04-19','Nam',36),(118,'SV110','Sinh viên 110','1998-04-20','Nam',36),(119,'SV111','Sinh viên 111','1998-04-21','Nữ',36),(120,'SV112','Sinh viên 112','1998-04-22','Nam',36),(121,'SV113','Sinh viên 113','1998-04-23','Nữ',36),(122,'SV114','Sinh viên 114','1998-04-24','Nam',36),(123,'SV115','Sinh viên 115','1998-04-25','Nam',36),(124,'SV116','Sinh viên 116','1998-04-26','Nữ',36),(125,'SV117','Sinh viên 117','1998-04-27','Nữ',36),(126,'SV118','Sinh viên 118','1998-04-28','Nam',36),(127,'SV119','Sinh viên 119','1998-04-29','Nam',36),(128,'SV120','Sinh viên 120','1998-04-30','Nam',36),(129,'SV121','Sinh viên 121','1998-05-01','Nữ',36),(130,'SV122','Sinh viên 122','1998-05-02','Nam',36),(131,'SV123','Sinh viên 123','1998-05-03','Nữ',36),(132,'SV124','Sinh viên 124','1998-05-04','Nữ',36),(133,'SV125','Sinh viên 125','1998-05-05','Nam',36),(134,'SV126','Sinh viên 126','1998-05-06','Nữ',36),(135,'SV127','Sinh viên 127','1998-05-07','Nam',36),(136,'SV128','Sinh viên 128','1998-05-08','Nam',36),(137,'SV129','Sinh viên 129','1998-05-09','Nam',36),(138,'SV130','Sinh viên 130','1998-05-10','Nam',36),(139,'SV131','Sinh viên 131','1998-05-11','Nữ',36),(140,'SV132','Sinh viên 132','1998-05-12','Nam',36),(141,'SV133','Sinh viên 133','1998-05-13','Nam',36),(142,'SV134','Sinh viên 134','1998-05-14','Nữ',36),(143,'SV135','Sinh viên 135','1998-05-15','Nam',36),(144,'SV136','Sinh viên 136','1998-05-16','Nam',36),(145,'SV137','Sinh viên 137','1998-05-17','Nữ',36),(146,'SV138','Sinh viên 138','1998-05-18','Nam',36),(147,'SV139','Sinh viên 139','1998-05-19','Nam',36),(148,'SV140','Sinh viên 140','1998-05-20','Nam',36),(149,'SV141','Sinh viên 141','1998-05-21','Nam',36),(150,'SV142','Sinh viên 142','1998-05-22','Nữ',36),(151,'SV143','Sinh viên 143','1998-05-23','Nam',36),(152,'SV144','Sinh viên 144','1998-05-24','Nam',36),(153,'SV145','Sinh viên 145','1998-05-25','Nam',36),(154,'SV146','Sinh viên 146','1998-05-26','Nam',36),(155,'SV147','Sinh viên 147','1998-05-27','Nam',36),(156,'SV148','Sinh viên 148','1998-05-28','Nữ',36),(157,'SV149','Sinh viên 149','1998-05-29','Nam',36),(158,'SV150','Sinh viên 150','1998-05-30','Nữ',36),(159,'SV151','Sinh viên 151','1998-05-31','Nam',37),(160,'SV152','Sinh viên 152','1998-06-01','Nam',37),(161,'SV153','Sinh viên 153','1998-06-02','Nữ',37),(162,'SV154','Sinh viên 154','1998-06-03','Nữ',37),(163,'SV155','Sinh viên 155','1998-06-04','Nam',37),(164,'SV156','Sinh viên 156','1998-06-05','Nữ',37),(165,'SV157','Sinh viên 157','1998-06-06','Nữ',37),(166,'SV158','Sinh viên 158','1998-06-07','Nam',37),(167,'SV159','Sinh viên 159','1998-06-08','Nam',37),(168,'SV160','Sinh viên 160','1998-06-09','Nam',37),(169,'SV161','Sinh viên 161','1998-06-10','Nữ',37),(170,'SV162','Sinh viên 162','1998-06-11','Nam',37),(171,'SV163','Sinh viên 163','1998-06-12','Nữ',37),(172,'SV164','Sinh viên 164','1998-06-13','Nam',37),(173,'SV165','Sinh viên 165','1998-06-14','Nam',37),(174,'SV166','Sinh viên 166','1998-06-15','Nữ',37),(175,'SV167','Sinh viên 167','1998-06-16','Nữ',37),(176,'SV168','Sinh viên 168','1998-06-17','Nam',37),(177,'SV169','Sinh viên 169','1998-06-18','Nam',37),(178,'SV170','Sinh viên 170','1998-06-19','Nam',37),(179,'SV171','Sinh viên 171','1998-06-20','Nữ',37),(180,'SV172','Sinh viên 172','1998-06-21','Nam',37),(181,'SV173','Sinh viên 173','1998-06-22','Nữ',37),(182,'SV174','Sinh viên 174','1998-06-23','Nữ',37),(183,'SV175','Sinh viên 175','1998-06-24','Nam',37),(184,'SV176','Sinh viên 176','1998-06-25','Nữ',37),(185,'SV177','Sinh viên 177','1998-06-26','Nam',37),(186,'SV178','Sinh viên 178','1998-06-27','Nam',37),(187,'SV179','Sinh viên 179','1998-06-28','Nam',37),(188,'SV180','Sinh viên 180','1998-06-29','Nam',37),(189,'SV181','Sinh viên 181','1998-06-30','Nữ',37),(190,'SV182','Sinh viên 182','1998-07-01','Nam',37),(191,'SV183','Sinh viên 183','1998-07-02','Nam',37),(192,'SV184','Sinh viên 184','1998-07-03','Nữ',37),(193,'SV185','Sinh viên 185','1998-07-04','Nam',37),(194,'SV186','Sinh viên 186','1998-07-05','Nam',37),(195,'SV187','Sinh viên 187','1998-07-06','Nữ',37),(196,'SV188','Sinh viên 188','1998-07-07','Nam',37),(197,'SV189','Sinh viên 189','1998-07-08','Nam',37),(198,'SV190','Sinh viên 190','1998-07-09','Nam',37),(199,'SV191','Sinh viên 191','1998-07-10','Nam',37),(200,'SV192','Sinh viên 192','1998-07-11','Nữ',37),(201,'SV193','Sinh viên 193','1998-07-12','Nam',37),(202,'SV194','Sinh viên 194','1998-07-13','Nam',37),(203,'SV195','Sinh viên 195','1998-07-14','Nam',37),(204,'SV196','Sinh viên 196','1998-07-15','Nam',37),(205,'SV197','Sinh viên 197','1998-07-16','Nam',37),(206,'SV198','Sinh viên 198','1998-07-17','Nữ',37),(207,'SV199','Sinh viên 199','1998-07-18','Nam',37),(208,'SV200','Sinh viên 200','1998-07-19','Nữ',37),(209,'SV201','Sinh viên 201','1998-07-20','Nam',38),(210,'SV202','Sinh viên 202','1998-07-21','Nam',38),(211,'SV203','Sinh viên 203','1998-07-22','Nữ',38),(212,'SV204','Sinh viên 204','1998-07-23','Nữ',38),(213,'SV205','Sinh viên 205','1998-07-24','Nam',38),(214,'SV206','Sinh viên 206','1998-07-25','Nữ',38),(215,'SV207','Sinh viên 207','1998-07-26','Nữ',38),(216,'SV208','Sinh viên 208','1998-07-27','Nam',38),(217,'SV209','Sinh viên 209','1998-07-28','Nam',38),(218,'SV210','Sinh viên 210','1998-07-29','Nam',38),(219,'SV211','Sinh viên 211','1998-07-30','Nữ',38),(220,'SV212','Sinh viên 212','1998-07-31','Nam',38),(221,'SV213','Sinh viên 213','1998-08-01','Nữ',38),(222,'SV214','Sinh viên 214','1998-08-02','Nam',38),(223,'SV215','Sinh viên 215','1998-08-03','Nam',38),(224,'SV216','Sinh viên 216','1998-08-04','Nữ',38),(225,'SV217','Sinh viên 217','1998-08-05','Nữ',38),(226,'SV218','Sinh viên 218','1998-08-06','Nam',38),(227,'SV219','Sinh viên 219','1998-08-07','Nam',38),(228,'SV220','Sinh viên 220','1998-08-08','Nam',38),(229,'SV221','Sinh viên 221','1998-08-09','Nữ',38),(230,'SV222','Sinh viên 222','1998-08-10','Nam',38),(231,'SV223','Sinh viên 223','1998-08-11','Nữ',38),(232,'SV224','Sinh viên 224','1998-08-12','Nữ',38),(233,'SV225','Sinh viên 225','1998-08-13','Nam',38),(234,'SV226','Sinh viên 226','1998-08-14','Nữ',38),(235,'SV227','Sinh viên 227','1998-08-15','Nam',38),(236,'SV228','Sinh viên 228','1998-08-16','Nam',38),(237,'SV229','Sinh viên 229','1998-08-17','Nam',38),(238,'SV230','Sinh viên 230','1998-08-18','Nam',38),(239,'SV231','Sinh viên 231','1998-08-19','Nữ',38),(240,'SV232','Sinh viên 232','1998-08-20','Nam',38),(241,'SV233','Sinh viên 233','1998-08-21','Nam',38),(242,'SV234','Sinh viên 234','1998-08-22','Nữ',38),(243,'SV235','Sinh viên 235','1998-08-23','Nam',38),(244,'SV236','Sinh viên 236','1998-08-24','Nam',38),(245,'SV237','Sinh viên 237','1998-08-25','Nữ',38),(246,'SV238','Sinh viên 238','1998-08-26','Nam',38),(247,'SV239','Sinh viên 239','1998-08-27','Nam',38),(248,'SV240','Sinh viên 240','1998-08-28','Nam',38),(249,'SV241','Sinh viên 241','1998-08-29','Nam',38),(250,'SV242','Sinh viên 242','1998-08-30','Nữ',38),(251,'SV243','Sinh viên 243','1998-08-31','Nam',38),(252,'SV244','Sinh viên 244','1998-09-01','Nam',38),(253,'SV245','Sinh viên 245','1998-09-02','Nam',38),(254,'SV246','Sinh viên 246','1998-09-03','Nam',38),(255,'SV247','Sinh viên 247','1998-09-04','Nam',38),(256,'SV248','Sinh viên 248','1998-09-05','Nữ',38),(257,'SV249','Sinh viên 249','1998-09-06','Nam',38),(258,'SV250','Sinh viên 250','1998-09-07','Nữ',38),(259,'SV251','Sinh viên 251','1998-09-08','Nam',39),(260,'SV252','Sinh viên 252','1998-09-09','Nam',39),(261,'SV253','Sinh viên 253','1998-09-10','Nữ',39),(262,'SV254','Sinh viên 254','1998-09-11','Nữ',39),(263,'SV255','Sinh viên 255','1998-09-12','Nam',39),(264,'SV256','Sinh viên 256','1998-09-13','Nữ',39),(265,'SV257','Sinh viên 257','1998-09-14','Nữ',39),(266,'SV258','Sinh viên 258','1998-09-15','Nam',39),(267,'SV259','Sinh viên 259','1998-09-16','Nam',39),(268,'SV260','Sinh viên 260','1998-09-17','Nam',39),(269,'SV261','Sinh viên 261','1998-09-18','Nữ',39),(270,'SV262','Sinh viên 262','1998-09-19','Nam',39),(271,'SV263','Sinh viên 263','1998-09-20','Nữ',39),(272,'SV264','Sinh viên 264','1998-09-21','Nam',39),(273,'SV265','Sinh viên 265','1998-09-22','Nam',39),(274,'SV266','Sinh viên 266','1998-09-23','Nữ',39),(275,'SV267','Sinh viên 267','1998-09-24','Nữ',39),(276,'SV268','Sinh viên 268','1998-09-25','Nam',39),(277,'SV269','Sinh viên 269','1998-09-26','Nam',39),(278,'SV270','Sinh viên 270','1998-09-27','Nam',39),(279,'SV271','Sinh viên 271','1998-09-28','Nữ',39),(280,'SV272','Sinh viên 272','1998-09-29','Nam',39),(281,'SV273','Sinh viên 273','1998-09-30','Nữ',39),(282,'SV274','Sinh viên 274','1998-10-01','Nữ',39),(283,'SV275','Sinh viên 275','1998-10-02','Nam',39),(284,'SV276','Sinh viên 276','1998-10-03','Nữ',39),(285,'SV277','Sinh viên 277','1998-10-04','Nam',39),(286,'SV278','Sinh viên 278','1998-10-05','Nam',39),(287,'SV279','Sinh viên 279','1998-10-06','Nam',39),(288,'SV280','Sinh viên 280','1998-10-07','Nam',39),(289,'SV281','Sinh viên 281','1998-10-08','Nữ',39),(290,'SV282','Sinh viên 282','1998-10-09','Nam',39),(291,'SV283','Sinh viên 283','1998-10-10','Nam',39),(292,'SV284','Sinh viên 284','1998-10-11','Nữ',39),(293,'SV285','Sinh viên 285','1998-10-12','Nam',39),(294,'SV286','Sinh viên 286','1998-10-13','Nam',39),(295,'SV287','Sinh viên 287','1998-10-14','Nữ',39),(296,'SV288','Sinh viên 288','1998-10-15','Nam',39),(297,'SV289','Sinh viên 289','1998-10-16','Nam',39),(298,'SV290','Sinh viên 290','1998-10-17','Nam',39),(299,'SV291','Sinh viên 291','1998-10-18','Nam',39),(300,'SV292','Sinh viên 292','1998-10-19','Nữ',39),(301,'SV293','Sinh viên 293','1998-10-20','Nam',39),(302,'SV294','Sinh viên 294','1998-10-21','Nam',39),(303,'SV295','Sinh viên 295','1998-10-22','Nam',39),(304,'SV296','Sinh viên 296','1998-10-23','Nam',39),(305,'SV297','Sinh viên 297','1998-10-24','Nam',39),(306,'SV298','Sinh viên 298','1998-10-25','Nữ',39),(307,'SV299','Sinh viên 299','1998-10-26','Nam',39),(308,'SV300','Sinh viên 300','1998-10-27','Nữ',39),(309,'SV301','Sinh viên 301','1998-10-28','Nam',40),(310,'SV302','Sinh viên 302','1998-10-29','Nam',40),(311,'SV303','Sinh viên 303','1998-10-30','Nữ',40),(312,'SV304','Sinh viên 304','1998-10-31','Nữ',40),(313,'SV305','Sinh viên 305','1998-11-01','Nam',40),(314,'SV306','Sinh viên 306','1998-11-02','Nữ',40),(315,'SV307','Sinh viên 307','1998-11-03','Nữ',40),(316,'SV308','Sinh viên 308','1998-11-04','Nam',40),(317,'SV309','Sinh viên 309','1998-11-05','Nam',40),(318,'SV310','Sinh viên 310','1998-11-06','Nam',40),(319,'SV311','Sinh viên 311','1998-11-07','Nữ',40),(320,'SV312','Sinh viên 312','1998-11-08','Nam',40),(321,'SV313','Sinh viên 313','1998-11-09','Nữ',40),(322,'SV314','Sinh viên 314','1998-11-10','Nam',40),(323,'SV315','Sinh viên 315','1998-11-11','Nam',40),(324,'SV316','Sinh viên 316','1998-11-12','Nữ',40),(325,'SV317','Sinh viên 317','1998-11-13','Nữ',40),(326,'SV318','Sinh viên 318','1998-11-14','Nam',40),(327,'SV319','Sinh viên 319','1998-11-15','Nam',40),(328,'SV320','Sinh viên 320','1998-11-16','Nam',40),(329,'SV321','Sinh viên 321','1998-11-17','Nữ',40),(330,'SV322','Sinh viên 322','1998-11-18','Nam',40),(331,'SV323','Sinh viên 323','1998-11-19','Nữ',40),(332,'SV324','Sinh viên 324','1998-11-20','Nữ',40),(333,'SV325','Sinh viên 325','1998-11-21','Nam',40),(334,'SV326','Sinh viên 326','1998-11-22','Nữ',40),(335,'SV327','Sinh viên 327','1998-11-23','Nam',40),(336,'SV328','Sinh viên 328','1998-11-24','Nam',40),(337,'SV329','Sinh viên 329','1998-11-25','Nam',40),(338,'SV330','Sinh viên 330','1998-11-26','Nam',40),(339,'SV331','Sinh viên 331','1998-11-27','Nữ',40),(340,'SV332','Sinh viên 332','1998-11-28','Nam',40),(341,'SV333','Sinh viên 333','1998-11-29','Nam',40),(342,'SV334','Sinh viên 334','1998-11-30','Nữ',40),(343,'SV335','Sinh viên 335','1998-12-01','Nam',40),(344,'SV336','Sinh viên 336','1998-12-02','Nam',40),(345,'SV337','Sinh viên 337','1998-12-03','Nữ',40),(346,'SV338','Sinh viên 338','1998-12-04','Nam',40),(347,'SV339','Sinh viên 339','1998-12-05','Nam',40),(348,'SV340','Sinh viên 340','1998-12-06','Nam',40),(349,'SV341','Sinh viên 341','1998-12-07','Nam',40),(350,'SV342','Sinh viên 342','1998-12-08','Nữ',40),(351,'SV343','Sinh viên 343','1998-12-09','Nam',40),(352,'SV344','Sinh viên 344','1998-12-10','Nam',40),(353,'SV345','Sinh viên 345','1998-12-11','Nam',40),(354,'SV346','Sinh viên 346','1998-12-12','Nam',40),(355,'SV347','Sinh viên 347','1998-12-13','Nam',40),(356,'SV348','Sinh viên 348','1998-12-14','Nữ',40),(357,'SV349','Sinh viên 349','1998-12-15','Nam',40),(358,'SV350','Sinh viên 350','1998-12-16','Nữ',40),(359,'SV351','Sinh viên 351','1998-12-17','Nam',41),(360,'SV352','Sinh viên 352','1998-12-18','Nam',41),(361,'SV353','Sinh viên 353','1998-12-19','Nữ',41),(362,'SV354','Sinh viên 354','1998-12-20','Nữ',41),(363,'SV355','Sinh viên 355','1998-12-21','Nam',41),(364,'SV356','Sinh viên 356','1998-12-22','Nữ',41),(365,'SV357','Sinh viên 357','1998-12-23','Nữ',41),(366,'SV358','Sinh viên 358','1998-12-24','Nam',41),(367,'SV359','Sinh viên 359','1998-12-25','Nam',41),(368,'SV360','Sinh viên 360','1998-12-26','Nam',41),(369,'SV361','Sinh viên 361','1998-12-27','Nữ',41),(370,'SV362','Sinh viên 362','1998-12-28','Nam',41),(371,'SV363','Sinh viên 363','1998-12-29','Nữ',41),(372,'SV364','Sinh viên 364','1998-12-30','Nam',41),(373,'SV365','Sinh viên 365','1998-12-31','Nam',41),(374,'SV366','Sinh viên 366','1999-01-01','Nữ',41),(375,'SV367','Sinh viên 367','1999-01-02','Nữ',41),(376,'SV368','Sinh viên 368','1999-01-03','Nam',41),(377,'SV369','Sinh viên 369','1999-01-04','Nam',41),(378,'SV370','Sinh viên 370','1999-01-05','Nam',41),(379,'SV371','Sinh viên 371','1999-01-06','Nữ',41),(380,'SV372','Sinh viên 372','1999-01-07','Nam',41),(381,'SV373','Sinh viên 373','1999-01-08','Nữ',41),(382,'SV374','Sinh viên 374','1999-01-09','Nữ',41),(383,'SV375','Sinh viên 375','1999-01-10','Nam',41),(384,'SV376','Sinh viên 376','1999-01-11','Nữ',41),(385,'SV377','Sinh viên 377','1999-01-12','Nam',41),(386,'SV378','Sinh viên 378','1999-01-13','Nam',41),(387,'SV379','Sinh viên 379','1999-01-14','Nam',41),(388,'SV380','Sinh viên 380','1999-01-15','Nam',41),(389,'SV381','Sinh viên 381','1999-01-16','Nữ',41),(390,'SV382','Sinh viên 382','1999-01-17','Nam',41),(391,'SV383','Sinh viên 383','1999-01-18','Nam',41),(392,'SV384','Sinh viên 384','1999-01-19','Nữ',41),(393,'SV385','Sinh viên 385','1999-01-20','Nam',41),(394,'SV386','Sinh viên 386','1999-01-21','Nam',41),(395,'SV387','Sinh viên 387','1999-01-22','Nữ',41),(396,'SV388','Sinh viên 388','1999-01-23','Nam',41),(397,'SV389','Sinh viên 389','1999-01-24','Nam',41),(398,'SV390','Sinh viên 390','1999-01-25','Nam',41),(399,'SV391','Sinh viên 391','1999-01-26','Nam',41),(400,'SV392','Sinh viên 392','1999-01-27','Nữ',41),(401,'SV393','Sinh viên 393','1999-01-28','Nam',41),(402,'SV394','Sinh viên 394','1999-01-29','Nam',41),(403,'SV395','Sinh viên 395','1999-01-30','Nam',41),(404,'SV396','Sinh viên 396','1999-01-31','Nam',41),(405,'SV397','Sinh viên 397','1999-02-01','Nam',41),(406,'SV398','Sinh viên 398','1999-02-02','Nữ',41),(407,'SV399','Sinh viên 399','1999-02-03','Nam',41),(408,'SV400','Sinh viên 400','1999-02-04','Nữ',41),(409,'SV401','Sinh viên 401','1999-02-05','Nam',42),(410,'SV402','Sinh viên 402','1999-02-06','Nam',42),(411,'SV403','Sinh viên 403','1999-02-07','Nữ',42),(412,'SV404','Sinh viên 404','1999-02-08','Nữ',42),(413,'SV405','Sinh viên 405','1999-02-09','Nam',42),(414,'SV406','Sinh viên 406','1999-02-10','Nữ',42),(415,'SV407','Sinh viên 407','1999-02-11','Nữ',42),(416,'SV408','Sinh viên 408','1999-02-12','Nam',42),(417,'SV409','Sinh viên 409','1999-02-13','Nam',42),(418,'SV410','Sinh viên 410','1999-02-14','Nam',42),(419,'SV411','Sinh viên 411','1999-02-15','Nữ',42),(420,'SV412','Sinh viên 412','1999-02-16','Nam',42),(421,'SV413','Sinh viên 413','1999-02-17','Nữ',42),(422,'SV414','Sinh viên 414','1999-02-18','Nam',42),(423,'SV415','Sinh viên 415','1999-02-19','Nam',42),(424,'SV416','Sinh viên 416','1999-02-20','Nữ',42),(425,'SV417','Sinh viên 417','1999-02-21','Nữ',42),(426,'SV418','Sinh viên 418','1999-02-22','Nam',42),(427,'SV419','Sinh viên 419','1999-02-23','Nam',42),(428,'SV420','Sinh viên 420','1999-02-24','Nam',42),(429,'SV421','Sinh viên 421','1999-02-25','Nữ',42),(430,'SV422','Sinh viên 422','1999-02-26','Nam',42),(431,'SV423','Sinh viên 423','1999-02-27','Nữ',42),(432,'SV424','Sinh viên 424','1999-02-28','Nữ',42),(433,'SV425','Sinh viên 425','1999-03-01','Nam',42),(434,'SV426','Sinh viên 426','1999-03-02','Nữ',42),(435,'SV427','Sinh viên 427','1999-03-03','Nam',42),(436,'SV428','Sinh viên 428','1999-03-04','Nam',42),(437,'SV429','Sinh viên 429','1999-03-05','Nam',42),(438,'SV430','Sinh viên 430','1999-03-06','Nam',42),(439,'SV431','Sinh viên 431','1999-03-07','Nữ',42),(440,'SV432','Sinh viên 432','1999-03-08','Nam',42),(441,'SV433','Sinh viên 433','1999-03-09','Nam',42),(442,'SV434','Sinh viên 434','1999-03-10','Nữ',42),(443,'SV435','Sinh viên 435','1999-03-11','Nam',42),(444,'SV436','Sinh viên 436','1999-03-12','Nam',42),(445,'SV437','Sinh viên 437','1999-03-13','Nữ',42),(446,'SV438','Sinh viên 438','1999-03-14','Nam',42),(447,'SV439','Sinh viên 439','1999-03-15','Nam',42),(448,'SV440','Sinh viên 440','1999-03-16','Nam',42),(449,'SV441','Sinh viên 441','1999-03-17','Nam',42),(450,'SV442','Sinh viên 442','1999-03-18','Nữ',42),(451,'SV443','Sinh viên 443','1999-03-19','Nam',42),(452,'SV444','Sinh viên 444','1999-03-20','Nam',42),(453,'SV445','Sinh viên 445','1999-03-21','Nam',42),(454,'SV446','Sinh viên 446','1999-03-22','Nam',42),(455,'SV447','Sinh viên 447','1999-03-23','Nam',42),(456,'SV448','Sinh viên 448','1999-03-24','Nữ',42),(457,'SV449','Sinh viên 449','1999-03-25','Nam',42),(458,'SV450','Sinh viên 450','1999-03-26','Nữ',42),(459,'SV451','Sinh viên 451','1999-03-27','Nam',43),(460,'SV452','Sinh viên 452','1999-03-28','Nam',43),(461,'SV453','Sinh viên 453','1999-03-29','Nữ',43),(462,'SV454','Sinh viên 454','1999-03-30','Nữ',43),(463,'SV455','Sinh viên 455','1999-03-31','Nam',43),(464,'SV456','Sinh viên 456','1999-04-01','Nữ',43),(465,'SV457','Sinh viên 457','1999-04-02','Nữ',43),(466,'SV458','Sinh viên 458','1999-04-03','Nam',43),(467,'SV459','Sinh viên 459','1999-04-04','Nam',43),(468,'SV460','Sinh viên 460','1999-04-05','Nam',43),(469,'SV461','Sinh viên 461','1999-04-06','Nữ',43),(470,'SV462','Sinh viên 462','1999-04-07','Nam',43),(471,'SV463','Sinh viên 463','1999-04-08','Nữ',43),(472,'SV464','Sinh viên 464','1999-04-09','Nam',43),(473,'SV465','Sinh viên 465','1999-04-10','Nam',43),(474,'SV466','Sinh viên 466','1999-04-11','Nữ',43),(475,'SV467','Sinh viên 467','1999-04-12','Nữ',43),(476,'SV468','Sinh viên 468','1999-04-13','Nam',43),(477,'SV469','Sinh viên 469','1999-04-14','Nam',43),(478,'SV470','Sinh viên 470','1999-04-15','Nam',43),(479,'SV471','Sinh viên 471','1999-04-16','Nữ',43),(480,'SV472','Sinh viên 472','1999-04-17','Nam',43),(481,'SV473','Sinh viên 473','1999-04-18','Nữ',43),(482,'SV474','Sinh viên 474','1999-04-19','Nữ',43),(483,'SV475','Sinh viên 475','1999-04-20','Nam',43),(484,'SV476','Sinh viên 476','1999-04-21','Nữ',43),(485,'SV477','Sinh viên 477','1999-04-22','Nam',43),(486,'SV478','Sinh viên 478','1999-04-23','Nam',43),(487,'SV479','Sinh viên 479','1999-04-24','Nam',43),(488,'SV480','Sinh viên 480','1999-04-25','Nam',43),(489,'SV481','Sinh viên 481','1999-04-26','Nữ',43),(490,'SV482','Sinh viên 482','1999-04-27','Nam',43),(491,'SV483','Sinh viên 483','1999-04-28','Nam',43),(492,'SV484','Sinh viên 484','1999-04-29','Nữ',43),(493,'SV485','Sinh viên 485','1999-04-30','Nam',43),(494,'SV486','Sinh viên 486','1999-05-01','Nam',43),(495,'SV487','Sinh viên 487','1999-05-02','Nữ',43),(496,'SV488','Sinh viên 488','1999-05-03','Nam',43),(497,'SV489','Sinh viên 489','1999-05-04','Nam',43),(498,'SV490','Sinh viên 490','1999-05-05','Nam',43),(499,'SV491','Sinh viên 491','1999-05-06','Nam',43),(500,'SV492','Sinh viên 492','1999-05-07','Nữ',43),(501,'SV493','Sinh viên 493','1999-05-08','Nam',43),(502,'SV494','Sinh viên 494','1999-05-09','Nam',43),(503,'SV495','Sinh viên 495','1999-05-10','Nam',43),(504,'SV496','Sinh viên 496','1999-05-11','Nam',43),(505,'SV497','Sinh viên 497','1999-05-12','Nam',43),(506,'SV498','Sinh viên 498','1999-05-13','Nữ',43),(507,'SV499','Sinh viên 499','1999-05-14','Nam',43),(508,'SV500','Sinh viên 500','1999-05-15','Nữ',43);
/*!40000 ALTER TABLE `student` ENABLE KEYS */;
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
