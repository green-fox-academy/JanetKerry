-- MySQL dump 10.13  Distrib 8.0.17, for Win64 (x86_64)
--
-- Host: localhost    Database: test2
-- ------------------------------------------------------
-- Server version	8.0.17

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
-- Table structure for table `absences`
--

DROP TABLE IF EXISTS `absences`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `absences` (
  `student_id` int(10) unsigned NOT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`student_id`,`date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `absences`
--

LOCK TABLES `absences` WRITE;
/*!40000 ALTER TABLE `absences` DISABLE KEYS */;
INSERT INTO `absences` VALUES (7,'2014-08-29'),(8,'2014-08-27');
/*!40000 ALTER TABLE `absences` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `classes`
--

DROP TABLE IF EXISTS `classes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `classes` (
  `name` varchar(30) NOT NULL,
  `class_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`class_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `classes`
--

LOCK TABLES `classes` WRITE;
/*!40000 ALTER TABLE `classes` DISABLE KEYS */;
INSERT INTO `classes` VALUES ('English',1),('Speech',2),('Literature',3),('Algebra',4),('Geometry',5),('Trigonometry',6),('Calculus',7),('Earth Science',8),('Biology',9),('Chemistry',10),('Physics',11),('History',12),('Art',13),('Gym',14);
/*!40000 ALTER TABLE `classes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `scores`
--

DROP TABLE IF EXISTS `scores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `scores` (
  `student_id` int(10) unsigned NOT NULL,
  `test_id` int(10) unsigned NOT NULL,
  `score` int(11) NOT NULL,
  PRIMARY KEY (`test_id`,`student_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `scores`
--

LOCK TABLES `scores` WRITE;
/*!40000 ALTER TABLE `scores` DISABLE KEYS */;
INSERT INTO `scores` VALUES (1,1,15),(2,1,15),(3,1,14),(4,1,15),(5,1,14),(6,1,13),(7,1,13),(8,1,14),(9,1,15),(10,1,15),(1,2,14),(2,2,14),(3,2,14),(4,2,14),(5,2,13),(6,2,13),(7,2,13),(9,2,13),(10,2,13),(1,3,28),(2,3,26),(3,3,26),(4,3,25),(5,3,26),(6,3,24),(7,3,25),(8,3,26),(9,3,28),(10,3,26),(1,4,29),(2,4,28),(3,4,26),(4,4,27),(5,4,27),(6,4,26),(7,4,27),(8,4,23),(9,4,27),(10,4,27),(1,5,15),(2,5,14),(3,5,13),(4,5,15),(5,5,13),(6,5,13),(7,5,13),(8,5,12),(9,5,14),(10,5,12),(1,6,27),(2,6,26),(3,6,26),(4,6,27),(5,6,27),(6,6,26),(8,6,24),(9,6,27),(10,6,22);
/*!40000 ALTER TABLE `scores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `students`
--

DROP TABLE IF EXISTS `students`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `students` (
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `email` varchar(60) DEFAULT NULL,
  `street` varchar(50) NOT NULL,
  `city` varchar(40) NOT NULL,
  `state` char(2) NOT NULL DEFAULT 'PA',
  `zip` mediumint(8) unsigned NOT NULL,
  `phone` varchar(20) NOT NULL,
  `birth_date` date NOT NULL,
  `sex` enum('M','F') NOT NULL,
  `date_entered` timestamp NULL DEFAULT NULL,
  `lunch_cost` float DEFAULT NULL,
  `student_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`student_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students`
--

LOCK TABLES `students` WRITE;
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
INSERT INTO `students` VALUES ('Sanyi','Jani','sanyijani@gmail.com','240 Main St','Budapest','Hu',40501,'3630451662','1984-08-15','M','2019-08-11 11:02:28',3.52,3),('Harry','Truman','htruman@aol.com','202 South St','Vancouver','WA',98660,'792-223-9810','1946-01-24','M','2019-08-11 14:05:32',3.5,4),('Shelly','Johnson','sjohnson@aol.com','9 Pond Rd','Sparks','NV',89431,'792-223-6734','1970-12-12','F','2019-08-11 14:07:29',3.5,5),('Bobby','Briggs','bbriggs@aol.com','14 12th St','San Diego','CA',92101,'792-223-6178','1967-05-24','M','2019-08-11 14:08:08',3.5,6),('Donna','Hayward','dhayward@aol.com','120 16th St','Davenport','IA',52801,'792-223-2001','1970-03-24','F','2019-08-11 14:08:47',3.5,7),('Audrey','Horne','ahorne@aol.com','342 19th St','Detroit','MI',48222,'792-223-2001','1965-02-01','F','2019-08-11 14:09:24',3.5,8),('James','Hurley','jhurley@aol.com','2578 Cliff St','Queens','NY',11427,'792-223-1890','1967-01-02','M','2019-08-11 14:10:00',3.5,9),('Lucy','Moran','lmoran@aol.com','178 Dover St','Hollywood','CA',90078,'792-223-9678','1954-11-27','F','2019-08-11 14:10:20',3.5,10),('Tommy','Hill','thill@aol.com','672 High Plains','Tucson','AZ',85701,'792-223-1115','1951-12-21','M','2019-08-11 14:10:48',3.5,11),('Andy','Brennan','abrennan@aol.com','281 4th St','Jacksonville','NC',28540,'792-223-8902','1960-12-27','M','2019-08-11 14:11:24',3.5,12);
/*!40000 ALTER TABLE `students` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tests`
--

DROP TABLE IF EXISTS `tests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tests` (
  `date` date NOT NULL,
  `type` enum('T','Q') NOT NULL,
  `maxscore` int(11) NOT NULL,
  `class_id` int(10) unsigned NOT NULL,
  `test_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`test_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tests`
--

LOCK TABLES `tests` WRITE;
/*!40000 ALTER TABLE `tests` DISABLE KEYS */;
INSERT INTO `tests` VALUES ('2014-08-25','Q',15,1,1),('2014-08-27','Q',15,1,2),('2014-08-29','T',30,1,3),('2014-08-29','T',30,2,4),('2014-08-27','Q',15,4,5),('2014-08-29','T',30,4,6);
/*!40000 ALTER TABLE `tests` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-08-11 23:19:15
