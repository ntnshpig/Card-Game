
<?php
    require_once "Model.php";

    class Users extends Model {
        public function __construct() {
            parent::__construct("users");
        }

        public function sign_in($login, $password) {
            if ($this->db_new->get_connection() == true) {
                $new_table = $this->db_new->db_connection->query("SELECT id, password, full_name, avatar_url FROM " . $this->table . " WHERE login = '" . $login . "';");
                $arr = $new_table->fetch(PDO::FETCH_ASSOC);
                if(password_verify($password, $arr["password"])) {
                    return true;
                } else {
                    return false;
                }
            }
        }

        public function get_name($login) {
            if ($this->db_new->get_connection() == true) {
                $new_table = $this->db_new->db_connection->query("SELECT id, full_name FROM " . $this->table . " WHERE login = '" . $login . "';");
                $arr = $new_table->fetch(PDO::FETCH_ASSOC);
                return $arr["full_name"];
            }
        }

        public function get_url($login) {
            if ($this->db_new->get_connection() == true) {
                $new_table = $this->db_new->db_connection->query("SELECT id, avatar_url FROM " . $this->table . " WHERE login = '" . $login . "';");
                $arr = $new_table->fetch(PDO::FETCH_ASSOC);
                return $arr["avatar_url"];
            }
        }

        public function get_id($login) {
            if ($this->db_new->get_connection() == true) {
                $new_table = $this->db_new->db_connection->query("SELECT id, avatar_url FROM " . $this->table . " WHERE login = '" . $login . "';");
                $arr = $new_table->fetch(PDO::FETCH_ASSOC);
                return $arr["id"];
            }
        }

        public function sign_up($login, $email, $password, $repeat, $name, $url) {
            if ($this->db_new->get_connection() == true) {
                $new_table = $this->db_new->db_connection->query("SELECT id, login FROM " . $this->table . " WHERE login = '" . $login . "' or " . " email_address = '" . $email . "';");
                $arr = $new_table->fetch(PDO::FETCH_ASSOC);
                if($arr || ($password != $repeat)) {
                    return false;
                } else {
                    $sql = "INSERT INTO users (login, email_address, password, full_name, avatar_url) VALUES (:login, :email_address, :password, :full_name, :avatar_url)";
                    $sth = $this->db_new->db_connection->prepare($sql);
                    $pass = crypt($password, 'salt');
                    $sth->execute(array(":login" => $login,
                                        ":email_address"  => $email,
                                        ":password" => $pass,
                                        ":full_name" => $name,
                                        ":avatar_url" => $url));
                    $_SESSION['name'] = $name;
                    $_SESSION['url'] = $url;
                    $tmp_sql = "SELECT id FROM users WHERE login=" . $login . ";";
                    $arr = $new_table->fetch(PDO::FETCH_ASSOC);
                    $_SESSION['id'] = $arr['id'];
                    return true;
                }
            }
            return false;
        }
        public function remind_pass($login) {
            if ($this->db_new->get_connection() == true) {
                $new_table = $this->db_new->db_connection->query("SELECT password, email_address, full_name FROM " . $this->table . " WHERE login = '" . $login . "';");
                $array = $new_table->fetch(PDO::FETCH_ASSOC);
                if($array && $array['password'] && $array['email_address']) {
                    mail($array['email_address'], "Reminder", "Dear " . $array['full_name'] . ".\nThis is your password reminder.\nYour password is: " . $array['password'] . "\nHave a nice day and save our world!");
                    return true;
                }
                return false;
            }
        }
    }
?>