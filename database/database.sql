--creating database
CREATE DATABASE moviedb;

--using database
use moviedb;

--creating tables
CREATE TABLE users (
  id INT(11) AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(30) NOT NULL,
  password ,
  admin BOOLEAN,
  favorites
)

--show all tables
SHOW TABLES;

-- describe tables
describe users;