
<?php
    require_once "Model.php";

    class Search extends Model {
        public function __construct() {
            parent::__construct("searching_users");
        }
        public function add_to_table($login) {
            if ($this->db_new->get_connection() == true) {
                $new_table = $this->db_new->db_connection->query("SELECT * FROM searching_users;");
                $arr = $new_table->fetchAll();
                print_r($arr);
                if($arr[0]['user_login'] && $arr[0]['user_login'] !== $login) {
                  $new_table = $this->db_new->db_connection->query("SELECT full_name, avatar_url FROM users WHERE login = ". $arr[0]['user_login'] .";");
                  $array = $new_table->fetch(PDO::FETCH_ASSOC);
                  $sql = "INSERT INTO searching_users (user_login, socket) VALUES (:user_login, :socket)";
                    $sth = $this->db_new->db_connection->prepare($sql);
                    $sth->execute(array(":user_login" => $login,
                                        ":socket"  => "socket3"));
                  return array('name'=>$array['full_name'], 'url'=>$array['avatar_url'], 'order'=> 1);
                } else if ($arr[1]['user_login'] && $arr[0]['user_login'] == $login){
                    $new_table = $this->db_new->db_connection->query("SELECT full_name, avatar_url FROM users WHERE login = ". $arr[1]['user_login'] .";");
                    $array = $new_table->fetch(PDO::FETCH_ASSOC);
                    $sql = "INSERT INTO searching_users (user_login, socket) VALUES (:user_login, :socket)";
                        $sth = $this->db_new->db_connection->prepare($sql);
                        $sth->execute(array(":user_login" => $login,
                                            ":socket"  => "socket1"));
                    return array('name'=>$array['full_name'], 'url'=>$array['avatar_url'], 'order'=> 2);
                } else if (!$arr['user_login']) {
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