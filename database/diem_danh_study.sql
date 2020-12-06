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
-- Table structure for table `study`
--

DROP TABLE IF EXISTS `study`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `study` (
  `id_student` int NOT NULL,
  `id_section_class` int NOT NULL,
  PRIMARY KEY (`id_student`,`id_section_class`),
  KEY `id_section_class` (`id_section_class`),
  CONSTRAINT `study_ibfk_1` FOREIGN KEY (`id_student`) REFERENCES `student` (`id`),
  CONSTRAINT `study_ibfk_2` FOREIGN KEY (`id_section_class`) REFERENCES `section_class` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `study`
--

LOCK TABLES `study` WRITE;
/*!40000 ALTER TABLE `study` DISABLE KEYS */;
INSERT INTO `study` VALUES (9,68),(10,68),(11,68),(12,68),(13,68),(14,68),(15,68),(16,68),(17,68),(18,68),(19,68),(20,68),(21,68),(22,68),(23,68),(24,68),(25,68),(26,68),(27,68),(28,68),(29,68),(30,68),(31,68),(32,68),(33,68),(34,68),(35,68),(36,68),(37,68),(38,68),(39,68),(40,68),(41,68),(42,68),(43,68),(44,68),(45,68),(46,68),(47,68),(48,68),(49,68),(50,68),(51,68),(52,68),(53,68),(54,68),(55,68),(56,68),(57,68),(58,68),(59,69),(60,69),(61,69),(62,69),(63,69),(64,69),(65,69),(66,69),(67,69),(68,69),(69,69),(70,69),(71,69),(72,69),(73,69),(74,69),(75,69),(76,69),(77,69),(78,69),(79,69),(80,69),(81,69),(82,69),(83,69),(84,69),(85,69),(86,69),(87,69),(88,69),(89,69),(90,69),(91,69),(92,69),(93,69),(94,69),(95,69),(96,69),(97,69),(98,69),(99,69),(100,69),(101,69),(102,69),(103,69),(104,69),(105,69),(106,69),(107,69),(108,69),(109,70),(110,70),(111,70),(112,70),(113,70),(114,70),(115,70),(116,70),(117,70),(118,70),(119,70),(120,70),(121,70),(122,70),(123,70),(124,70),(125,70),(126,70),(127,70),(128,70),(129,70),(130,70),(131,70),(132,70),(133,70),(134,70),(135,70),(136,70),(137,70),(138,70),(139,70),(140,70),(141,70),(142,70),(143,70),(144,70),(145,70),(146,70),(147,70),(148,70),(149,70),(150,70),(151,70),(152,70),(153,70),(154,70),(155,70),(156,70),(157,70),(158,70),(159,71),(160,71),(161,71),(162,71),(163,71),(164,71),(165,71),(166,71),(167,71),(168,71),(169,71),(170,71),(171,71),(172,71),(173,71),(174,71),(175,71),(176,71),(177,71),(178,71),(179,71),(180,71),(181,71),(182,71),(183,71),(184,71),(185,71),(186,71),(187,71),(188,71),(189,71),(190,71),(191,71),(192,71),(193,71),(194,71),(195,71),(196,71),(197,71),(198,71),(199,71),(200,71),(201,71),(202,71),(203,71),(204,71),(205,71),(206,71),(207,71),(208,71),(209,72),(210,72),(211,72),(212,72),(213,72),(214,72),(215,72),(216,72),(217,72),(218,72),(219,72),(220,72),(221,72),(222,72),(223,72),(224,72),(225,72),(226,72),(227,72),(228,72),(229,72),(230,72),(231,72),(232,72),(233,72),(234,72),(235,72),(236,72),(237,72),(238,72),(239,72),(240,72),(241,72),(242,72),(243,72),(244,72),(245,72),(246,72),(247,72),(248,72),(249,72),(250,72),(251,72),(252,72),(253,72),(254,72),(255,72),(256,72),(257,72),(258,72),(259,73),(260,73),(261,73),(262,73),(263,73),(264,73),(265,73),(266,73),(267,73),(268,73),(269,73),(270,73),(271,73),(272,73),(273,73),(274,73),(275,73),(276,73),(277,73),(278,73),(279,73),(280,73),(281,73),(282,73),(283,73),(284,73),(285,73),(286,73),(287,73),(288,73),(289,73),(290,73),(291,73),(292,73),(293,73),(294,73),(295,73),(296,73),(297,73),(298,73),(299,73),(300,73),(301,73),(302,73),(303,73),(304,73),(305,73),(306,73),(307,73),(308,73),(309,74),(310,74),(311,74),(312,74),(313,74),(314,74),(315,74),(316,74),(317,74),(318,74),(319,74),(320,74),(321,74),(322,74),(323,74),(324,74),(325,74),(326,74),(327,74),(328,74),(329,74),(330,74),(331,74),(332,74),(333,74),(334,74),(335,74),(336,74),(337,74),(338,74),(339,74),(340,74),(341,74),(342,74),(343,74),(344,74),(345,74),(346,74),(347,74),(348,74),(349,74),(350,74),(351,74),(352,74),(353,74),(354,74),(355,74),(356,74),(357,74),(358,74),(359,75),(360,75),(361,75),(362,75),(363,75),(364,75),(365,75),(366,75),(367,75),(368,75),(369,75),(370,75),(371,75),(372,75),(373,75),(374,75),(375,75),(376,75),(377,75),(378,75),(379,75),(380,75),(381,75),(382,75),(383,75),(384,75),(385,75),(386,75),(387,75),(388,75),(389,75),(390,75),(391,75),(392,75),(393,75),(394,75),(395,75),(396,75),(397,75),(398,75),(399,75),(400,75),(401,75),(402,75),(403,75),(404,75),(405,75),(406,75),(407,75),(408,75),(409,76),(410,76),(411,76),(412,76),(413,76),(414,76),(415,76),(416,76),(417,76),(418,76),(419,76),(420,76),(421,76),(422,76),(423,76),(424,76),(425,76),(426,76),(427,76),(428,76),(429,76),(430,76),(431,76),(432,76),(433,76),(434,76),(435,76),(436,76),(437,76),(438,76),(439,76),(440,76),(441,76),(442,76),(443,76),(444,76),(445,76),(446,76),(447,76),(448,76),(449,76),(450,76),(451,76),(452,76),(453,76),(454,76),(455,76),(456,76),(457,76),(458,77),(459,77),(460,77),(461,77),(462,77),(463,77),(464,77),(465,77),(466,77),(467,77),(468,77),(469,77),(470,77),(471,77),(472,77),(473,77),(474,77),(475,77),(476,77),(477,77),(478,77),(479,77),(480,77),(481,77),(482,77),(483,77),(484,77),(485,77),(486,77),(487,77),(488,77),(489,77),(490,77),(491,77),(492,77),(493,77),(494,77),(495,77),(496,77),(497,77),(498,77),(499,77),(500,77),(501,77),(502,77),(503,77),(504,77),(505,77),(506,77),(507,77),(9,78),(10,78),(11,78),(12,78),(13,78),(14,78),(15,78),(16,78),(17,78),(18,78),(19,78),(20,78),(21,78),(22,78),(23,78),(24,78),(25,78),(26,78),(27,78),(28,78),(29,78),(30,78),(31,78),(32,78),(33,78),(34,78),(35,78),(36,78),(37,78),(38,78),(39,78),(40,78),(41,78),(42,78),(43,78),(44,78),(45,78),(46,78),(47,78),(48,78),(49,78),(50,78),(51,78),(52,78),(53,78),(54,78),(55,78),(56,78),(57,78),(508,78),(58,79),(59,79),(60,79),(61,79),(62,79),(63,79),(64,79),(65,79),(66,79),(67,79),(68,79),(69,79),(70,79),(71,79),(72,79),(73,79),(74,79),(75,79),(76,79),(77,79),(78,79),(79,79),(80,79),(81,79),(82,79),(83,79),(84,79),(85,79),(86,79),(87,79),(88,79),(89,79),(90,79),(91,79),(92,79),(93,79),(94,79),(95,79),(96,79),(97,79),(98,79),(99,79),(100,79),(101,79),(102,79),(103,79),(104,79),(105,79),(106,79),(107,80),(108,80),(109,80),(110,80),(111,80),(112,80),(113,80),(114,80),(115,80),(116,80),(117,80),(118,80),(119,80),(120,80),(121,80),(122,80),(123,80),(124,80),(125,80),(126,80),(127,80),(128,80),(129,80),(130,80),(131,80),(132,80),(133,80),(134,80),(135,80),(136,80),(137,80),(138,80),(139,80),(140,80),(141,80),(142,80),(143,80),(144,80),(145,80),(146,80),(147,80),(148,80),(149,80),(150,80),(151,80),(152,80),(153,80),(154,80),(155,80),(156,80),(157,80),(158,81),(159,81),(160,81),(161,81),(162,81),(163,81),(164,81),(165,81),(166,81),(167,81),(168,81),(169,81),(170,81),(171,81),(172,81),(173,81),(174,81),(175,81),(176,81),(177,81),(178,81),(179,81),(180,81),(181,81),(182,81),(183,81),(184,81),(185,81),(186,81),(187,81),(188,81),(189,81),(190,81),(191,81),(192,81),(193,81),(194,81),(195,81),(196,81),(197,81),(198,81),(199,81),(200,81),(201,81),(202,81),(203,81),(204,81),(205,81),(206,81),(207,81),(208,82),(209,82),(210,82),(211,82),(212,82),(213,82),(214,82),(215,82),(216,82),(217,82),(218,82),(219,82),(220,82),(221,82),(222,82),(223,82),(224,82),(225,82),(226,82),(227,82),(228,82),(229,82),(230,82),(231,82),(232,82),(233,82),(234,82),(235,82),(236,82),(237,82),(238,82),(239,82),(240,82),(241,82),(242,82),(243,82),(244,82),(245,82),(246,82),(247,82),(248,82),(249,82),(250,82),(251,82),(252,82),(253,82),(254,82),(255,82),(256,82),(257,82),(258,83),(259,83),(260,83),(261,83),(262,83),(263,83),(264,83),(265,83),(266,83),(267,83),(268,83),(269,83),(270,83),(271,83),(272,83),(273,83),(274,83),(275,83),(276,83),(277,83),(278,83),(279,83),(280,83),(281,83),(282,83),(283,83),(284,83),(285,83),(286,83),(287,83),(288,83),(289,83),(290,83),(291,83),(292,83),(293,83),(294,83),(295,83),(296,83),(297,83),(298,83),(299,83),(300,83),(301,83),(302,83),(303,83),(304,83),(305,83),(306,83),(307,83),(308,84),(309,84),(310,84),(311,84),(312,84),(313,84),(314,84),(315,84),(316,84),(317,84),(318,84),(319,84),(320,84),(321,84),(322,84),(323,84),(324,84),(325,84),(326,84),(327,84),(328,84),(329,84),(330,84),(331,84),(332,84),(333,84),(334,84),(335,84),(336,84),(337,84),(338,84),(339,84),(340,84),(341,84),(342,84),(343,84),(344,84),(345,84),(346,84),(347,84),(348,84),(349,84),(350,84),(351,84),(352,84),(353,84),(354,84),(355,84),(356,84),(357,84),(358,85),(359,85),(360,85),(361,85),(362,85),(363,85),(364,85),(365,85),(366,85),(367,85),(368,85),(369,85),(370,85),(371,85),(372,85),(373,85),(374,85),(375,85),(376,85),(377,85),(378,85),(379,85),(380,85),(381,85),(382,85),(383,85),(384,85),(385,85),(386,85),(387,85),(388,85),(389,85),(390,85),(391,85),(392,85),(393,85),(394,85),(395,85),(396,85),(397,85),(398,85),(399,85),(400,85),(401,85),(402,85),(403,85),(404,85),(405,85),(406,85),(407,85),(408,86),(409,86),(410,86),(411,86),(412,86),(413,86),(414,86),(415,86),(416,86),(417,86),(418,86),(419,86),(420,86),(421,86),(422,86),(423,86),(424,86),(425,86),(426,86),(427,86),(428,86),(429,86),(430,86),(431,86),(432,86),(433,86),(434,86),(435,86),(436,86),(437,86),(438,86),(439,86),(440,86),(441,86),(442,86),(443,86),(444,86),(445,86),(446,86),(447,86),(448,86),(449,86),(450,86),(451,86),(452,86),(453,86),(454,86),(455,86),(456,86),(457,86),(458,87),(459,87),(460,87),(461,87),(462,87),(463,87),(464,87),(465,87),(466,87),(467,87),(468,87),(469,87),(470,87),(471,87),(472,87),(473,87),(474,87),(475,87),(476,87),(477,87),(478,87),(479,87),(480,87),(481,87),(482,87),(483,87),(484,87),(485,87),(486,87),(487,87),(488,87),(489,87),(490,87),(491,87),(492,87),(493,87),(494,87),(495,87),(496,87),(497,87),(498,87),(499,87),(500,87),(501,87),(502,87),(503,87),(504,87),(505,87),(506,87),(507,87),(508,87),(9,88),(10,88),(11,88),(12,88),(13,88),(14,88),(15,88),(16,88),(17,88),(18,88),(19,88),(20,88),(21,88),(22,88),(23,88),(24,88),(25,88),(26,88),(27,88),(28,88),(29,88),(30,88),(31,88),(32,88),(33,88),(34,88),(35,88),(36,88),(37,88),(38,88),(39,88),(40,88),(41,88),(42,88),(43,88),(44,88),(45,88),(46,88),(47,88),(48,88),(49,88),(50,88),(51,88),(52,88),(53,88),(54,88),(55,88),(56,88),(57,88),(58,88),(59,89),(60,89),(61,89),(62,89),(63,89),(64,89),(65,89),(66,89),(67,89),(68,89),(69,89),(70,89),(71,89),(72,89),(73,89),(74,89),(75,89),(76,89),(77,89),(78,89),(79,89),(80,89),(81,89),(82,89),(83,89),(84,89),(85,89),(86,89),(87,89),(88,89),(89,89),(90,89),(91,89),(92,89),(93,89),(94,89),(95,89),(96,89),(97,89),(98,89),(99,89),(100,89),(101,89),(102,89),(103,89),(104,89),(105,89),(106,89),(107,89),(108,89),(109,90),(110,90),(111,90),(112,90),(113,90),(114,90),(115,90),(116,90),(117,90),(118,90),(119,90),(120,90),(121,90),(122,90),(123,90),(124,90),(125,90),(126,90),(127,90),(128,90),(129,90),(130,90),(131,90),(132,90),(133,90),(134,90),(135,90),(136,90),(137,90),(138,90),(139,90),(140,90),(141,90),(142,90),(143,90),(144,90),(145,90),(146,90),(147,90),(148,90),(149,90),(150,90),(151,90),(152,90),(153,90),(154,90),(155,90),(156,90),(157,90),(158,90),(159,91),(160,91),(161,91),(162,91),(163,91),(164,91),(165,91),(166,91),(167,91),(168,91),(169,91),(170,91),(171,91),(172,91),(173,91),(174,91),(175,91),(176,91),(177,91),(178,91),(179,91),(180,91),(181,91),(182,91),(183,91),(184,91),(185,91),(186,91),(187,91),(188,91),(189,91),(190,91),(191,91),(192,91),(193,91),(194,91),(195,91),(196,91),(197,91),(198,91),(199,91),(200,91),(201,91),(202,91),(203,91),(204,91),(205,91),(206,91),(207,91),(208,91),(209,92),(210,92),(211,92),(212,92),(213,92),(214,92),(215,92),(216,92),(217,92),(218,92),(219,92),(220,92),(221,92),(222,92),(223,92),(224,92),(225,92),(226,92),(227,92),(228,92),(229,92),(230,92),(231,92),(232,92),(233,92),(234,92),(235,92),(236,92),(237,92),(238,92),(239,92),(240,92),(241,92),(242,92),(243,92),(244,92),(245,92),(246,92),(247,92),(248,92),(249,92),(250,92),(251,92),(252,92),(253,92),(254,92),(255,92),(256,92),(257,92),(258,92),(259,93),(260,93),(261,93),(262,93),(263,93),(264,93),(265,93),(266,93),(267,93),(268,93),(269,93),(270,93),(271,93),(272,93),(273,93),(274,93),(275,93),(276,93),(277,93),(278,93),(279,93),(280,93),(281,93),(282,93),(283,93),(284,93),(285,93),(286,93),(287,93),(288,93),(289,93),(290,93),(291,93),(292,93),(293,93),(294,93),(295,93),(296,93),(297,93),(298,93),(299,93),(300,93),(301,93),(302,93),(303,93),(304,93),(305,93),(306,93),(307,93),(308,93),(309,94),(310,94),(311,94),(312,94),(313,94),(314,94),(315,94),(316,94),(317,94),(318,94),(319,94),(320,94),(321,94),(322,94),(323,94),(324,94),(325,94),(326,94),(327,94),(328,94),(329,94),(330,94),(331,94),(332,94),(333,94),(334,94),(335,94),(336,94),(337,94),(338,94),(339,94),(340,94),(341,94),(342,94),(343,94),(344,94),(345,94),(346,94),(347,94),(348,94),(349,94),(350,94),(351,94),(352,94),(353,94),(354,94),(355,94),(356,94),(357,94),(358,94),(359,95),(360,95),(361,95),(362,95),(363,95),(364,95),(365,95),(366,95),(367,95),(368,95),(369,95),(370,95),(371,95),(372,95),(373,95),(374,95),(375,95),(376,95),(377,95),(378,95),(379,95),(380,95),(381,95),(382,95),(383,95),(384,95),(385,95),(386,95),(387,95),(388,95),(389,95),(390,95),(391,95),(392,95),(393,95),(394,95),(395,95),(396,95),(397,95),(398,95),(399,95),(400,95),(401,95),(402,95),(403,95),(404,95),(405,95),(406,95),(407,95),(408,95),(409,96),(410,96),(411,96),(412,96),(413,96),(414,96),(415,96),(416,96),(417,96),(418,96),(419,96),(420,96),(421,96),(422,96),(423,96),(424,96),(425,96),(426,96),(427,96),(428,96),(429,96),(430,96),(431,96),(432,96),(433,96),(434,96),(435,96),(436,96),(437,96),(438,96),(439,96),(440,96),(441,96),(442,96),(443,96),(444,96),(445,96),(446,96),(447,96),(448,96),(449,96),(450,96),(451,96),(452,96),(453,96),(454,96),(455,96),(456,96),(457,96),(458,96),(459,97),(460,97),(461,97),(462,97),(463,97),(464,97),(465,97),(466,97),(467,97),(468,97),(469,97),(470,97),(471,97),(472,97),(473,97),(474,97),(475,97),(476,97),(477,97),(478,97),(479,97),(480,97),(481,97),(482,97),(483,97),(484,97),(485,97),(486,97),(487,97),(488,97),(489,97),(490,97),(491,97),(492,97),(493,97),(494,97),(495,97),(496,97),(497,97),(498,97),(499,97),(500,97),(501,97),(502,97),(503,97),(504,97),(505,97),(506,97),(507,97),(508,97),(9,98),(10,98),(11,98),(12,98),(13,98),(14,98),(15,98),(16,98),(17,98),(18,98),(19,98),(20,98),(21,98),(22,98),(23,98),(24,98),(25,98),(26,98),(27,98),(28,98),(29,98),(30,98),(31,98),(32,98),(33,98),(34,98),(35,98),(36,98),(37,98),(38,98),(39,98),(40,98),(41,98),(42,98),(43,98),(44,98),(45,98),(46,98),(47,98),(48,98),(49,98),(50,98),(51,98),(52,98),(53,98),(54,98),(55,98),(56,98),(57,98),(58,98),(59,99),(60,99),(61,99),(62,99),(63,99),(64,99),(65,99),(66,99),(67,99),(68,99),(69,99),(70,99),(71,99),(72,99),(73,99),(74,99),(75,99),(76,99),(77,99),(78,99),(79,99),(80,99),(81,99),(82,99),(83,99),(84,99),(85,99),(86,99),(87,99),(88,99),(89,99),(90,99),(91,99),(92,99),(93,99),(94,99),(95,99),(96,99),(97,99),(98,99),(99,99),(100,99),(101,99),(102,99),(103,99),(104,99),(105,99),(106,99),(107,99),(108,99),(109,100),(110,100),(111,100),(112,100),(113,100),(114,100),(115,100),(116,100),(117,100),(118,100),(119,100),(120,100),(121,100),(122,100),(123,100),(124,100),(125,100),(126,100),(127,100),(128,100),(129,100),(130,100),(131,100),(132,100),(133,100),(134,100),(135,100),(136,100),(137,100),(138,100),(139,100),(140,100),(141,100),(142,100),(143,100),(144,100),(145,100),(146,100),(147,100),(148,100),(149,100),(150,100),(151,100),(152,100),(153,100),(154,100),(155,100),(156,100),(157,100),(158,100),(159,101),(160,101),(161,101),(162,101),(163,101),(164,101),(165,101),(166,101),(167,101),(168,101),(169,101),(170,101),(171,101),(172,101),(173,101),(174,101),(175,101),(176,101),(177,101),(178,101),(179,101),(180,101),(181,101),(182,101),(183,101),(184,101),(185,101),(186,101),(187,101),(188,101),(189,101),(190,101),(191,101),(192,101),(193,101),(194,101),(195,101),(196,101),(197,101),(198,101),(199,101),(200,101),(201,101),(202,101),(203,101),(204,101),(205,101),(206,101),(207,101),(208,101),(209,102),(210,102),(211,102),(212,102),(213,102),(214,102),(215,102),(216,102),(217,102),(218,102),(219,102),(220,102),(221,102),(222,102),(223,102),(224,102),(225,102),(226,102),(227,102),(228,102),(229,102),(230,102),(231,102),(232,102),(233,102),(234,102),(235,102),(236,102),(237,102),(238,102),(239,102),(240,102),(241,102),(242,102),(243,102),(244,102),(245,102),(246,102),(247,102),(248,102),(249,102),(250,102),(251,102),(252,102),(253,102),(254,102),(255,102),(256,102),(257,102),(258,102),(259,103),(260,103),(261,103),(262,103),(263,103),(264,103),(265,103),(266,103),(267,103),(268,103),(269,103),(270,103),(271,103),(272,103),(273,103),(274,103),(275,103),(276,103),(277,103),(278,103),(279,103),(280,103),(281,103),(282,103),(283,103),(284,103),(285,103),(286,103),(287,103),(288,103),(289,103),(290,103),(291,103),(292,103),(293,103),(294,103),(295,103),(296,103),(297,103),(298,103),(299,103),(300,103),(301,103),(302,103),(303,103),(304,103),(305,103),(306,103),(307,103),(308,103),(309,104),(310,104),(311,104),(312,104),(313,104),(314,104),(315,104),(316,104),(317,104),(318,104),(319,104),(320,104),(321,104),(322,104),(323,104),(324,104),(325,104),(326,104),(327,104),(328,104),(329,104),(330,104),(331,104),(332,104),(333,104),(334,104),(335,104),(336,104),(337,104),(338,104),(339,104),(340,104),(341,104),(342,104),(343,104),(344,104),(345,104),(346,104),(347,104),(348,104),(349,104),(350,104),(351,104),(352,104),(353,104),(354,104),(355,104),(356,104),(357,104),(358,104),(359,105),(360,105),(361,105),(362,105),(363,105),(364,105),(365,105),(366,105),(367,105),(368,105),(369,105),(370,105),(371,105),(372,105),(373,105),(374,105),(375,105),(376,105),(377,105),(378,105),(379,105),(380,105),(381,105),(382,105),(383,105),(384,105),(385,105),(386,105),(387,105),(388,105),(389,105),(390,105),(391,105),(392,105),(393,105),(394,105),(395,105),(396,105),(397,105),(398,105),(399,105),(400,105),(401,105),(402,105),(403,105),(404,105),(405,105),(406,105),(407,105),(408,105),(409,106),(410,106),(411,106),(412,106),(413,106),(414,106),(415,106),(416,106),(417,106),(418,106),(419,106),(420,106),(421,106),(422,106),(423,106),(424,106),(425,106),(426,106),(427,106),(428,106),(429,106),(430,106),(431,106),(432,106),(433,106),(434,106),(435,106),(436,106),(437,106),(438,106),(439,106),(440,106),(441,106),(442,106),(443,106),(444,106),(445,106),(446,106),(447,106),(448,106),(449,106),(450,106),(451,106),(452,106),(453,106),(454,106),(455,106),(456,106),(457,106),(458,106),(459,107),(460,107),(461,107),(462,107),(463,107),(464,107),(465,107),(466,107),(467,107),(468,107),(469,107),(470,107),(471,107),(472,107),(473,107),(474,107),(475,107),(476,107),(477,107),(478,107),(479,107),(480,107),(481,107),(482,107),(483,107),(484,107),(485,107),(486,107),(487,107),(488,107),(489,107),(490,107),(491,107),(492,107),(493,107),(494,107),(495,107),(496,107),(497,107),(498,107),(499,107),(500,107),(501,107),(502,107),(503,107),(504,107),(505,107),(506,107),(507,107),(508,107),(9,108),(10,108),(11,108),(12,108),(13,108),(14,108),(15,108),(16,108),(17,108),(18,108),(19,108),(20,108),(21,108),(22,108),(23,108),(24,108),(25,108),(26,108),(27,108),(28,108),(29,108),(30,108),(31,108),(32,108),(33,108),(34,108),(35,108),(36,108),(37,108),(38,108),(39,108),(40,108),(41,108),(42,108),(43,108),(44,108),(45,108),(46,108),(47,108),(48,108),(49,108),(50,108),(51,108),(52,108),(53,108),(54,108),(55,108),(56,108),(57,108),(58,108),(59,109),(60,109),(61,109),(62,109),(63,109),(64,109),(65,109),(66,109),(67,109),(68,109),(69,109),(70,109),(71,109),(72,109),(73,109),(74,109),(75,109),(76,109),(77,109),(78,109),(79,109),(80,109),(81,109),(82,109),(83,109),(84,109),(85,109),(86,109),(87,109),(88,109),(89,109),(90,109),(91,109),(92,109),(93,109),(94,109),(95,109),(96,109),(97,109),(98,109),(99,109),(100,109),(101,109),(102,109),(103,109),(104,109),(105,109),(106,109),(107,109),(108,109),(109,110),(110,110),(111,110),(112,110),(113,110),(114,110),(115,110),(116,110),(117,110),(118,110),(119,110),(120,110),(121,110),(122,110),(123,110),(124,110),(125,110),(126,110),(127,110),(128,110),(129,110),(130,110),(131,110),(132,110),(133,110),(134,110),(135,110),(136,110),(137,110),(138,110),(139,110),(140,110),(141,110),(142,110),(143,110),(144,110),(145,110),(146,110),(147,110),(148,110),(149,110),(150,110),(151,110),(152,110),(153,110),(154,110),(155,110),(156,110),(157,110),(158,110),(159,111),(160,111),(161,111),(162,111),(163,111),(164,111),(165,111),(166,111),(167,111),(168,111),(169,111),(170,111),(171,111),(172,111),(173,111),(174,111),(175,111),(176,111),(177,111),(178,111),(179,111),(180,111),(181,111),(182,111),(183,111),(184,111),(185,111),(186,111),(187,111),(188,111),(189,111),(190,111),(191,111),(192,111),(193,111),(194,111),(195,111),(196,111),(197,111),(198,111),(199,111),(200,111),(201,111),(202,111),(203,111),(204,111),(205,111),(206,111),(207,111),(208,111),(209,112),(210,112),(211,112),(212,112),(213,112),(214,112),(215,112),(216,112),(217,112),(218,112),(219,112),(220,112),(221,112),(222,112),(223,112),(224,112),(225,112),(226,112),(227,112),(228,112),(229,112),(230,112),(231,112),(232,112),(233,112),(234,112),(235,112),(236,112),(237,112),(238,112),(239,112),(240,112),(241,112),(242,112),(243,112),(244,112),(245,112),(246,112),(247,112),(248,112),(249,112),(250,112),(251,112),(252,112),(253,112),(254,112),(255,112),(256,112),(257,112),(258,112),(259,113),(260,113),(261,113),(262,113),(263,113),(264,113),(265,113),(266,113),(267,113),(268,113),(269,113),(270,113),(271,113),(272,113),(273,113),(274,113),(275,113),(276,113),(277,113),(278,113),(279,113),(280,113),(281,113),(282,113),(283,113),(284,113),(285,113),(286,113),(287,113),(288,113),(289,113),(290,113),(291,113),(292,113),(293,113),(294,113),(295,113),(296,113),(297,113),(298,113),(299,113),(300,113),(301,113),(302,113),(303,113),(304,113),(305,113),(306,113),(307,113),(308,113),(309,114),(310,114),(311,114),(312,114),(313,114),(314,114),(315,114),(316,114),(317,114),(318,114),(319,114),(320,114),(321,114),(322,114),(323,114),(324,114),(325,114),(326,114),(327,114),(328,114),(329,114),(330,114),(331,114),(332,114),(333,114),(334,114),(335,114),(336,114),(337,114),(338,114),(339,114),(340,114),(341,114),(342,114),(343,114),(344,114),(345,114),(346,114),(347,114),(348,114),(349,114),(350,114),(351,114),(352,114),(353,114),(354,114),(355,114),(356,114),(357,114),(358,114),(359,115),(360,115),(361,115),(362,115),(363,115),(364,115),(365,115),(366,115),(367,115),(368,115),(369,115),(370,115),(371,115),(372,115),(373,115),(374,115),(375,115),(376,115),(377,115),(378,115),(379,115),(380,115),(381,115),(382,115),(383,115),(384,115),(385,115),(386,115),(387,115),(388,115),(389,115),(390,115),(391,115),(392,115),(393,115),(394,115),(395,115),(396,115),(397,115),(398,115),(399,115),(400,115),(401,115),(402,115),(403,115),(404,115),(405,115),(406,115),(407,115),(408,115),(409,116),(410,116),(411,116),(412,116),(413,116),(414,116),(415,116),(416,116),(417,116),(418,116),(419,116),(420,116),(421,116),(422,116),(423,116),(424,116),(425,116),(426,116),(427,116),(428,116),(429,116),(430,116),(431,116),(432,116),(433,116),(434,116),(435,116),(436,116),(437,116),(438,116),(439,116),(440,116),(441,116),(442,116),(443,116),(444,116),(445,116),(446,116),(447,116),(448,116),(449,116),(450,116),(451,116),(452,116),(453,116),(454,116),(455,116),(456,116),(457,116),(458,116),(459,117),(460,117),(461,117),(462,117),(463,117),(464,117),(465,117),(466,117),(467,117),(468,117),(469,117),(470,117),(471,117),(472,117),(473,117),(474,117),(475,117),(476,117),(477,117),(478,117),(479,117),(480,117),(481,117),(482,117),(483,117),(484,117),(485,117),(486,117),(487,117),(488,117),(489,117),(490,117),(491,117),(492,117),(493,117),(494,117),(495,117),(496,117),(497,117),(498,117),(499,117),(500,117),(501,117),(502,117),(503,117),(504,117),(505,117),(506,117),(507,117),(508,117);
/*!40000 ALTER TABLE `study` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-11-30 16:59:50