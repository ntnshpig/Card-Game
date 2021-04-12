<?php
    class DatabaseConnection {
        public function __construct($host, $port, $username, $password, $database) {
            try {
                $this->db_connection = new PDO("mysql:host=$host;dbname=$database", $username, $password, array(PDO::ATTR_ERRMODE=>true, PDO::ERRMODE_EXCEPTION=>true));
            } catch (PDOException $e) {
                echo "<script>window.location.href = 'view/templates/404.html';</script>";
                die();
            }
        }
        public function __destruct(){
            $this->db_connection = NULL;
        }
        public function get_connection() {
            return isset($this->db_connection) ? true : false;
        }
    }
?>