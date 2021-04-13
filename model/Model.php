<?php
    require_once __DIR__.'/connection/DatabaseConnection.php';

    abstract class Model {
        public function __construct($table) {
            $this->setTabel($table);
            $this->setConnection();
        }

        protected function setTabel($table) {
            $this->table = $table;
        }

        public function setConnection() {
            //first param is IP of Mac with database
            $this->db_new = new DatabaseConnection('127.0.0.1', null, "game_server", "securepass", "game");
        }

    }
?>