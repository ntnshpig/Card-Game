CREATE DATABASE IF NOT EXISTS game;
CREATE USER IF NOT EXISTS 'game_server'@'localhost' IDENTIFIED WITH mysql_native_password BY 'securepass';
GRANT all privileges ON game . * to 'game_server'@'localhost';
FLUSH PRIVILEGES;

use game;
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    login VARCHAR(50) NOT NULL UNIQUE KEY,
    password VARCHAR(50) NOT NULL,
    full_name VARCHAR(60) NOT NULL,
    email_address VARCHAR(50) NOT NULL UNIQUE,
    avatar_url TEXT NULL
);
CREATE TABLE IF NOT EXISTS searching_users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_login VARCHAR(50) UNIQUE KEY,
    socket VARCHAR(50) UNIQUE KEY
);
