
<?php
    require_once "Model.php";

    class Search extends Model {
        public function __construct() {
            parent::__construct("serching_users");
        }
        public function add_to_table($id) {
            if ($this->db_new->get_connection() == true) {
                $new_table = $this->db_new->db_connection->query("SELECT user_id FROM serching_users;");
                $arr = $new_table->fetch(PDO::FETCH_ASSOC);
                if($arr['user_id']) {
                  $new_table = $this->db_new->db_connection->query("SELECT full_name, avatar_url FROM users WHERE id = ".$arr['id'] .";");
                  $array = $new_table->fetch(PDO::FETCH_ASSOC);
                  return array('name'=>$array['full_name'], 'url'=>$array['avatar_url'], 'hod'=> 1);
                } else {
                    $sql = "INSERT INTO serching_users (user_id, socket) VALUES (:user_id, :socket)";
                    $sth = $this->db_new->db_connection->prepare($sql);
                    $sth->execute(array(":user_id" => $id,
                                        ":socket"  => 505));
                    return false;
                }
            }
            return false;
        }
    }
?>