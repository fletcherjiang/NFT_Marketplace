-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: May 07, 2016 at 02:55 PM
-- Server version: 10.1.10-MariaDB
-- PHP Version: 5.6.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `trading`
--

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` int(11) DEFAULT NULL,
  `name` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `address` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `city` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `state` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `zip` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `name`, `address`, `city`, `state`, `zip`) VALUES
(1, 'Gerald Foster', '994 Transport Plaza', 'Ocala', 'FL', '34479'),
(2, 'Kevin Hawkins', '03231 Dwight Hill', 'Atlanta', 'GA', '30351'),
(3, 'Diana Davis', '35 Fairfield Parkway', 'Fargo', 'ND', '58122'),
(4, 'Heather Gonzalez', '1 4th Trail', 'Albuquerque', 'NM', '87105'),
(5, 'Terry Hart', '353 Messerschmidt Pass', 'Burbank', 'CA', '91520'),
(6, 'Nancy Gomez', '121 Southridge Lane', 'Valdosta', 'GA', '31605'),
(7, 'Beverly Wood', '21 Bluestem Trail', 'Washington', 'DC', '20557'),
(8, 'Fred Roberts', '9 Main Crossing', 'Gilbert', 'AZ', '85297'),
(9, 'Maria Cox', '1 Crest Line Pass', 'Albuquerque', 'NM', '87190'),
(10, 'Evelyn Warren', '8589 Macpherson Way', 'Flint', 'MI', '48505'),
(11, 'Shirley Vasquez', '0 Mallard Junction', 'Kansas City', 'MO', '64109'),
(12, 'Maria Fuller', '05402 Badeau Crossing', 'New Orleans', 'LA', '70149'),
(13, 'Deborah Parker', '45475 Hauk Drive', 'Toledo', 'OH', '43699'),
(14, 'Linda Frazier', '6 Rigney Road', 'Lynn', 'MA', '01905'),
(15, 'Randy Ray', '477 Arrowood Parkway', 'Tulsa', 'OK', '74184'),
(16, 'Anthony Tucker', '46 Redwing Center', 'Springfield', 'MO', '65810'),
(17, 'Lisa Hanson', '335 Mesta Terrace', 'Wilmington', 'DE', '19805'),
(18, 'Donna Stevens', '47837 Rusk Drive', 'Norfolk', 'VA', '23504'),
(19, 'Sarah Sims', '515 Talmadge Plaza', 'Chicago', 'IL', '60614'),
(20, 'Jeremy Black', '8409 Ridge Oak Circle', 'Topeka', 'KS', '66617'),
(21, 'Marie Cole', '196 Brentwood Pass', 'Lima', 'OH', '45807'),
(22, 'Dennis Freeman', '603 Leroy Junction', 'Kalamazoo', 'MI', '49048'),
(23, 'Kathy Gonzales', '8597 Fisk Crossing', 'Ogden', 'UT', '84403'),
(24, 'Laura Reid', '829 Jana Park', 'Shreveport', 'LA', '71151'),
(25, 'Jack Mitchell', '50354 Eliot Circle', 'Hayward', 'CA', '94544'),
(26, 'Terry Hicks', '47487 Loomis Park', 'Ashburn', 'VA', '22093'),
(27, 'Ashley Rose', '6 Forest Run Drive', 'Sparks', 'NV', '89436'),
(28, 'Elizabeth James', '1 John Wall Way', 'Hartford', 'CT', '06152'),
(29, 'Todd Edwards', '49393 Sage Place', 'Myrtle Beach', 'SC', '29579'),
(30, 'Rachel Kelley', '90 Fairfield Place', 'Wilmington', 'DE', '19810'),
(31, 'Dorothy Wright', '147 Orin Way', 'Washington', 'DC', '20067'),
(32, 'Sarah Wilson', '99 Oak Trail', 'Saint Cloud', 'MN', '56398'),
(33, 'Jessica Foster', '3958 Onsgard Trail', 'Edmond', 'OK', '73034'),
(34, 'Donna Burns', '45 Mandrake Plaza', 'South Bend', 'IN', '46634'),
(35, 'Jesse Riley', '8128 Green Ridge Alley', 'Springfield', 'IL', '62723'),
(36, 'Julie Dixon', '6752 Oak Valley Court', 'Tulsa', 'OK', '74103'),
(37, 'Ryan Gilbert', '2174 Blaine Pass', 'Shreveport', 'LA', '71130'),
(38, 'Janet Bailey', '5581 Algoma Terrace', 'San Jose', 'CA', '95133'),
(39, 'Denise Larson', '044 Killdeer Circle', 'Naperville', 'IL', '60567'),
(40, 'Victor Campbell', '99 Vahlen Place', 'Lima', 'OH', '45807'),
(41, 'Laura Cooper', '7967 Mallory Way', 'Ogden', 'UT', '84409'),
(42, 'Gerald Berry', '763 Vera Avenue', 'Spring', 'TX', '77388'),
(43, 'Henry Rice', '206 Schlimgen Parkway', 'Dallas', 'TX', '75387'),
(44, 'Margaret Greene', '9118 Susan Drive', 'Metairie', 'LA', '70005'),
(45, 'Theresa Richardson', '66 Grover Pass', 'Riverside', 'CA', '92519'),
(46, 'Robin Smith', '3922 Iowa Trail', 'Norfolk', 'VA', '23551'),
(47, 'Annie Montgomery', '3880 Monterey Center', 'Saint Petersburg', 'FL', '33705'),
(48, 'Ernest Morgan', '41165 Melby Center', 'Raleigh', 'NC', '27621'),
(49, 'Sara Oliver', '050 Lawn Terrace', 'Stockton', 'CA', '95298'),
(50, 'Juan Graham', '27 Green Ridge Center', 'Phoenix', 'AZ', '85072'),
(51, 'Victor Fernandez', '53 Service Park', 'Salt Lake City', 'UT', '84140'),
(52, 'Robin Chavez', '387 Dayton Plaza', 'Huntington Beach', 'CA', '92648'),
(53, 'James Mendoza', '14 Twin Pines Center', 'Beaumont', 'TX', '77713'),
(54, 'Russell Wells', '0 Buhler Terrace', 'New York City', 'NY', '10090'),
(55, 'Bruce Stanley', '91 Corry Park', 'Akron', 'OH', '44393'),
(56, 'Jessica Marshall', '84 Fulton Road', 'Wichita', 'KS', '67260'),
(57, 'Paul Simpson', '2 Eggendart Drive', 'Mesa', 'AZ', '85205'),
(58, 'Nicholas Patterson', '77660 Cambridge Street', 'Austin', 'TX', '78759'),
(59, 'Mildred Martin', '1054 Sycamore Parkway', 'Flint', 'MI', '48550'),
(60, 'Lois Hanson', '614 North Junction', 'Denver', 'CO', '80270'),
(61, 'Mark Brooks', '0043 Sugar Way', 'Chicago', 'IL', '60697'),
(62, 'Jacqueline Dixon', '21392 Marquette Hill', 'Indianapolis', 'IN', '46207'),
(63, 'Dennis Shaw', '0113 Garrison Street', 'New York City', 'NY', '10184'),
(64, 'Gregory Wheeler', '04 Rutledge Pass', 'Philadelphia', 'PA', '19178'),
(65, 'Kenneth Stewart', '79240 Fordem Lane', 'Lincoln', 'NE', '68583'),
(66, 'Ernest Murphy', '954 Dorton Trail', 'Kansas City', 'MO', '64160'),
(67, 'Samuel Hart', '08690 Stone Corner Alley', 'Topeka', 'KS', '66667'),
(68, 'Kevin Hernandez', '36495 Mcbride Center', 'Miami', 'FL', '33245'),
(69, 'Jeremy Nelson', '15 Sachtjen Hill', 'Iowa City', 'IA', '52245'),
(70, 'Ernest Hall', '85309 Debs Park', 'Mobile', 'AL', '36610'),
(71, 'Bobby Hawkins', '8316 Kedzie Place', 'El Paso', 'TX', '88558'),
(72, 'Frank Mason', '927 Farragut Trail', 'Detroit', 'MI', '48232'),
(73, 'Ronald Reed', '5 Debra Center', 'El Paso', 'TX', '79984'),
(74, 'Johnny Stone', '27410 Mockingbird Hill', 'Roanoke', 'VA', '24020'),
(75, 'Kathy Diaz', '83490 Sauthoff Parkway', 'El Paso', 'TX', '79968'),
(76, 'Russell Powell', '332 Larry Center', 'Washington', 'DC', '20215'),
(77, 'Barbara Reynolds', '37 Kingsford Lane', 'New Orleans', 'LA', '70165'),
(78, 'Evelyn Morrison', '79284 Old Gate Junction', 'Sandy', 'UT', '84093'),
(79, 'Diane Griffin', '6 Ridgeview Place', 'San Francisco', 'CA', '94142'),
(80, 'Russell Bowman', '63979 Trailsway Park', 'Washington', 'DC', '20425'),
(81, 'Robin Duncan', '5045 Gerald Circle', 'Hialeah', 'FL', '33018'),
(82, 'Amy Fields', '04444 Ilene Parkway', 'Saint Joseph', 'MO', '64504'),
(83, 'Teresa Morgan', '016 Blackbird Lane', 'Waco', 'TX', '76796'),
(84, 'Jeremy Hansen', '3 North Court', 'Houston', 'TX', '77271'),
(85, 'Paula George', '6 Gina Plaza', 'Spokane', 'WA', '99210'),
(86, 'Philip Smith', '40 Dakota Point', 'Phoenix', 'AZ', '85072'),
(87, 'Ralph Gutierrez', '2 Forest Parkway', 'Van Nuys', 'CA', '91411'),
(88, 'Johnny West', '3917 Monica Pass', 'New Orleans', 'LA', '70179'),
(89, 'Steve Turner', '7 Carioca Avenue', 'Sarasota', 'FL', '34233'),
(90, 'Helen Fuller', '55511 Oak Valley Center', 'San Antonio', 'TX', '78240'),
(91, 'Joseph Cole', '672 Bellgrove Drive', 'Wilmington', 'DE', '19810'),
(92, 'Ernest Morris', '4119 Pepper Wood Pass', 'Littleton', 'CO', '80161'),
(93, 'Jerry Dean', '141 Del Sol Crossing', 'Sacramento', 'CA', '95838'),
(94, 'Earl Payne', '53 Dapin Drive', 'Tallahassee', 'FL', '32304'),
(95, 'Keith Snyder', '00 Green Ridge Terrace', 'Columbia', 'SC', '29203'),
(96, 'Frances Ramirez', '914 Golden Leaf Alley', 'Stamford', 'CT', '06905');

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

CREATE TABLE `items` (
  `id` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `seller_id` int(11) DEFAULT NULL,
  `Category` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `Exchange` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `idescription` varchar(500) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`id`, `name`, `seller_id`, `Category`, `Exchange`, `idescription`) VALUES
(1, 'Brand New iMac Computer', 28, '', '', ''),
(2, 'used diaper from my sister', 28, '', '', ''),
(3, 'Fresh apple pie', 34, '', '', ''),
(4, 'New gym socks', 41, '', '', ''),
(5, 'Weedwacker only slightly used', 65, '', '', ''),
(6, 'New ipad stolen from best buy', 78, '', '', ''),
(7, 'Book about having babies', 78, '', '', ''),
(8, 'Woman jeans', 23, '', '', ''),
(9, 'traditional carpet', 58, '', '', ''),
(10, 'shows', 76, '', '', ''),
(11, 'beer', 1, '', '', ''),
(12, 'box of frogs', 37, '', '', ''),
(13, 'laptop', 2, '', '', ''),
(14, 'bed', 85, '', '', ''),
(15, 'thumbelina', 70, '', '', ''),
(16, 'stove', 83, '', '', ''),
(17, 'shampoing', 6, '', '', ''),
(18, 'stove', 11, '', '', ''),
(19, 'microwave', 6, '', '', ''),
(20, 'computer', 1, '', '', ''),
(21, 'awesome alien computer', 14, '', '', ''),
(22, 'new curtain for bedroom', 94, '', '', ''),
(23, '3 boxes of frogs', 6, '', '', ''),
(24, 'newspaper', 86, '', '', ''),
(25, 'pan', 24, '', '', ''),
(26, 'baby coat', 52, '', '', ''),
(27, 'supercomputer', 86, '', '', ''),
(28, 'Shufflester', 10, '', '', ''),
(29, 'refrigerator', 20, '', '', ''),
(30, 'gold necklace', 52, '', '', ''),
(31, '7 boxes of frogs', 6, '', '', ''),
(32, '48 boxes of frogs', 68, '', '', ''),
(33, 'used car', 12, '', '', ''),
(34, 'gold earring', 5, '', '', ''),
(35, 'scarf', 71, '', '', ''),
(36, 'hairdryer', 12, '', '', ''),
(37, 'play station', 12, '', '', ''),
(38, 'bikini', 12, '', '', ''),
(39, 'air conditioner ', 12, '', '', ''),
(40, 'baby seat', 13, '', '', ''),
(41, 'baby soap', 74, '', '', ''),
(42, 'baby bottle', 18, '', '', ''),
(43, 'Twitterlist', 92, '', '', ''),
(44, 'Jayo', 75, '', '', ''),
(45, 'Jatri', 33, '', '', ''),
(46, 'Wikizz', 80, '', '', ''),
(47, 'Twitterbridge', 10, '', '', ''),
(48, 'Agimba', 7, '', '', ''),
(49, 'Meevee', 90, '', '', ''),
(50, 'Fivebridge', 5, '', '', ''),
(51, 'Jaxworks', 60, '', '', ''),
(52, 'Realpoint', 64, '', '', ''),
(53, 'Skipstorm', 64, '', '', ''),
(54, 'Thoughtbridge', 29, '', '', ''),
(55, 'Cogibox', 84, '', '', ''),
(56, 'Skinix', 25, '', '', ''),
(57, 'Thoughtworks', 93, '', '', ''),
(58, 'Twitternation', 100, '', '', ''),
(59, 'Youopia', 38, '', '', ''),
(60, 'Eamia', 21, '', '', ''),
(61, 'Zoombeat', 94, '', '', ''),
(62, 'Quatz', 79, '', '', ''),
(63, 'Mudo', 99, '', '', ''),
(64, 'Rhybox', 26, '', '', ''),
(65, 'Babbleblab', 62, '', '', ''),
(66, 'Zoozzy', 54, '', '', ''),
(67, 'Wikizz', 15, '', '', ''),
(68, 'Zoombox', 15, '', '', ''),
(69, 'Reallinks', 26, '', '', ''),
(70, 'Shufflester', 93, '', '', ''),
(71, 'Jetpulse', 37, '', '', ''),
(72, 'Minyx', 84, '', '', ''),
(73, 'Photojam', 53, '', '', ''),
(74, 'Photofeed', 17, '', '', ''),
(75, 'Yamia', 81, '', '', ''),
(76, 'Jabbertype', 2, '', '', ''),
(77, 'Mynte', 60, '', '', ''),
(78, 'Devbug', 86, '', '', ''),
(79, 'Einti', 52, '', '', ''),
(80, 'Yabox', 32, '', '', ''),
(81, 'Skynoodle', 43, '', '', ''),
(82, 'Skynoodle', 63, '', '', ''),
(83, 'Bluezoom', 40, '', '', ''),
(84, 'Topicware', 3, '', '', ''),
(85, 'Rooxo', 45, '', '', ''),
(86, 'Gabtype', 31, '', '', ''),
(87, 'Rooxo', 16, '', '', ''),
(88, 'Jatri', 55, '', '', ''),
(89, 'Yabox', 56, '', '', ''),
(90, 'Linkbuzz', 67, '', '', ''),
(91, 'Centimia', 25, '', '', ''),
(92, 'Devify', 65, '', '', ''),
(93, 'Yambee', 14, '', '', ''),
(94, 'Oyope', 2, '', '', ''),
(95, 'Buzzshare', 92, '', '', ''),
(96, 'Muxo', 4, '', '', ''),
(97, 'Flipbug', 89, '', '', ''),
(98, 'Ainyx', 52, '', '', ''),
(99, 'Topicblab', 50, '', '', ''),
(104, 'hdjhydj', NULL, 'computer', 'tjytk', 'rdhgdj');

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `sender` int(11) NOT NULL,
  `receiver` int(11) NOT NULL,
  `subject` varchar(80) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `body` varchar(500) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `date_sent` datetime NOT NULL,
  `status` varchar(20) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(10) NOT NULL,
  `fname` varchar(20) NOT NULL,
  `lname` varchar(20) NOT NULL,
  `username` varchar(20) NOT NULL,
  `email` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `fname`, `lname`, `username`, `email`, `password`) VALUES
(1, 'abc', 'xyz', 'abc123', 'abc@gmail.com', 'abc123'),
(3, 'd', 'd', 'd', 'd@d.com', 'd'),
(4, 'uday', 'reddy', 'uday', 'udayreddz@gmail.com', 'dony'),
(5, 'nirmit', 'gupta', 'nirmit123', 'namo21395@gmail.com', '1234'),
(6, 'asa', 'ccc', 'cccco', 'sdcsc@an.com', 'jnj'),
(7, 'bjkb', 'bob', 'jbkj', 'ob@nl.com', 'kjbk'),
(8, 'kbb', 'iugb', 'kbu', 'n@n.n', 'kjuo'),
(9, 'sdcl', 'ljblk', 'jvk', 'bkjb@bk.bvk', 'bkk'),
(10, 'jbk', 'bkjbk', 'vjhv', 'jgk@ed.c', 'hvj'),
(11, 'kbjk', 'bkj', 'hvb', 'b@b.com', 'bkb'),
(12, 'kbkj', 'hblo', 'ih', 'ihoh@m.n', 'blkj'),
(14, 'jbkj', 'lkbl', 'nirmit1234', 'a@a.bom', 'nirmit'),
(15, 'jbjb', 'bkjb', 'nirmit1', 'b@b.cn', ',bn,'),
(16, 'bkd', 'kbo', 'bk', 'b@b.ii', 'bkjb'),
(17, 'bk', 'kjbk', 'jbkb', 'jbl@cb.com', 'jbk'),
(18, 'lblb', 'bolb', 'jbkjb', 'nbiob@ankc.com', 'jbljb'),
(19, 'kernp', 'opo', 'ihpih', 'pj@ani.co', 'mnlk'),
(20, 'mkzxbj', 'bjkb', 'bob', 'jbl@bjb.b', 'bobo'),
(21, 'knp', 'pjpp', 'jbkbj', 'a@dtdy.c', 'boio');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`id`);
ALTER TABLE `items` ADD FULLTEXT KEY `name` (`name`);

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `items`
--
ALTER TABLE `items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=105;
--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
