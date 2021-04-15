
<?php
    require_once "Model.php";

    class Search extends Model {
        public function __construct() {
            parent::__construct("searching_users");
        }
        public function add_to_table($login) {
            if ($this->db_new->get_connection() == true) {
                $new_table = $this->db_new->db_connection->query("SELECT user_login FROM searching_users;");
                $arr = $new_table->fetch(PDO::FETCH_ASSOC);
                if($arr['user_login']) {
                  $new_table = $this->db_new->db_connection->query("SELECT full_name, avatar_url FROM users WHERE login = ". $arr['user_login'] .";");
                  $array = $new_table->fetch(PDO::FETCH_ASSOC);
                  return array('name'=>$array['full_name'], 'url'=>$array['avatar_url'], 'order'=> 1);
                } else {
                    $sql = "INSERT INTO searching_users (user_login, socket) VALUES (:user_login, :socket)";
                    $sth = $this->db_new->db_connection->prepare($sql);
                    $sth->execute(array(":user_login" => $login,
                                        ":socket"  => "socket"));
                    return false;
                }
            }
            return false;
        }
    }
?>