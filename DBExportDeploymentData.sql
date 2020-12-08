-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: calendar
-- ------------------------------------------------------
-- Server version	5.6.50-log

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
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `categoryid` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `relationid` int(11) NOT NULL,
  `childnum` int(11) NOT NULL,
  `_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,1,'School',1,1,'2020-12-02 17:01:52'),(2,2,'Sports',1,1,'2020-12-02 17:01:52'),(3,3,'Family Time',1,1,'2020-12-02 17:01:52'),(4,4,'Health',1,1,'2020-12-02 17:01:52'),(5,5,'Chores',1,1,'2020-12-02 17:01:52');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `events`
--

DROP TABLE IF EXISTS `events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `events` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `location` varchar(70) NOT NULL,
  `time` varchar(50) NOT NULL,
  `duedate` varchar(10) NOT NULL,
  `mandatorytask` tinyint(1) DEFAULT NULL,
  `completedtask` tinyint(1) DEFAULT NULL,
  `relationid` int(11) NOT NULL,
  `childnum` int(11) NOT NULL,
  `_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `events`
--

LOCK TABLES `events` WRITE;
/*!40000 ALTER TABLE `events` DISABLE KEYS */;
INSERT INTO `events` VALUES (1,'History Class','BHAM','9:00AM','12/01/2020',1,0,1,1,'2020-12-02 17:01:52'),(2,'Pickup Football Game','BHAM','3:00PM','12/01/2020',0,0,1,1,'2020-12-02 17:01:52'),(3,'Family Dinner','BHAM','5:30PM','12/01/2020',0,0,1,1,'2020-12-02 17:01:52'),(4,'Dentist Appointment','BHAM','8:00AM','12/01/2020',1,0,2,1,'2020-12-02 17:01:52'),(5,'Walk Dog','BHAM','5:00PM','12/01/2020',1,0,2,1,'2020-12-02 17:01:52');
/*!40000 ALTER TABLE `events` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `messages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `messageid` int(11) NOT NULL,
  `content` varchar(70) NOT NULL,
  `relationid` int(11) NOT NULL,
  `childnum` int(11) NOT NULL,
  `_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
INSERT INTO `messages` VALUES (1,1,'This is a child message1',1,1,'2020-12-02 17:01:53'),(2,2,'This is a child message2',1,1,'2020-12-02 17:01:53'),(3,3,'This is a child message3',1,1,'2020-12-02 17:01:53'),(4,4,'This is a child message4',1,1,'2020-12-02 17:01:53'),(5,5,'This is a child message5',1,1,'2020-12-02 17:01:53');
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reminders`
--

DROP TABLE IF EXISTS `reminders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reminders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `reminderid` int(11) NOT NULL,
  `content` varchar(70) NOT NULL,
  `relationid` int(11) NOT NULL,
  `childnum` int(11) NOT NULL,
  `_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reminders`
--

LOCK TABLES `reminders` WRITE;
/*!40000 ALTER TABLE `reminders` DISABLE KEYS */;
INSERT INTO `reminders` VALUES (1,1,'This is a child reminder1',1,1,'2020-12-02 17:01:52'),(2,2,'This is a child reminder2',1,1,'2020-12-02 17:01:52'),(3,3,'This is a child reminder3',1,1,'2020-12-02 17:01:52'),(4,4,'This is a child reminder4',1,1,'2020-12-02 17:01:52'),(5,5,'This is a child reminder5',1,1,'2020-12-02 17:01:52');
/*!40000 ALTER TABLE `reminders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(70) NOT NULL,
  `password` varchar(60) NOT NULL,
  `role` varchar(6) NOT NULL,
  `relationid` int(11) NOT NULL,
  `childnum` int(11) NOT NULL,
  `_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Tim','timgmail','pass1','parent',1,0,'2020-12-02 17:01:52'),(2,'Jake','jakegmail','pass2','parent',2,0,'2020-12-02 17:01:52'),(3,'Josh','joshgmail','pass3','child',1,1,'2020-12-02 17:01:52'),(4,'Will','willgmail','pass4','child',2,1,'2020-12-02 17:01:52'),(5,'Jane','janegmail','pass5','child',1,2,'2020-12-02 17:01:52'),(6,'Selina','selinagmail','pass6','child',1,3,'2020-12-02 17:01:52'),(7,'Franco','francogmail','pass7','child',2,2,'2020-12-02 17:01:52');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-02 11:20:56
