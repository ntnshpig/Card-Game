<?php
    require_once __DIR__.'/../model/Users.php';

    class Router {
        public $params = array();
        function __construct() {
            foreach($_GET as $key => $val) {
                $this->params[$key] = $val;
            }
        }

        public function getParams() {
            $str = NULL;
            foreach($this->params as $key => $val) {
                $str .= "'" . $key . "': '" . $val . "' ";
            }
            $str = "{" . trim($str) . "}";
            echo $str;
        }

        function call_action($action) {
            if($action == "Sign In") {
                $user = new Users();
                if($user->sign_in($_POST['login'], $_POST['password'])) {
                    ob_clean();
                    $show = New View("view/templates/main.html");
                    $show->render();
                    echo '<script>
                            let status = document.querySelector(".user");
                            status.innerHTML = "Hello: ' . $_SESSION['name'] . '";
                            let msg = document.querySelector(".msg_in");
                            msg.innerHTML = "Enter succeed";
                            msg.style.color = "green";
                            document.getElementById("user_avatar").src = "'.$_SESSION['url'].'";
                        </script>';
                } else {
                    ob_clean();
                    $show = New View("view/templates/sign_in.html");
                    $show->render();
                    echo '<script>
                            let msg = document.querySelector(".msg");
                            msg.innerHTML = "Enter failed";
                            msg.style.color = "red";
                        </script>';
                }
            }
            if($action == "Remind password") {
                $user = new Users();
                if($user->remind_pass($_POST['login'])) {
                    echo '<script>
                            let msg = document.querySelector(".msg");
                            msg.innerHTML = "Send u a message";
                            msg.style.color = "green";
                        </script>';
                } else {
                    echo '<script>
                            let msg = document.querySelector(".msg");
                            msg.innerHTML = "Message failed";
                            msg.style.color = "red";
                        </script>';
                }
            }
            if($action == "Sign Up") {
                $user = new Users();
                if($user->sign_up($_POST['login'], $_POST['email'], $_POST['password'], $_POST['repeat'], $_POST['real_name'], $_POST['avatar_url'])){
                    ob_clean();
                    $show = New View("view/templates/main.html");
                    $show->render();
                    echo '<script>
                            let status = document.querySelector(".user");
                            status.innerHTML = "Hello: ' . $_SESSION['name'] . '";
                            document.getElementById("user_avatar").src = "'.$_SESSION['url'].'";
                            let msg = document.querySelector(".msg_in");
                            msg.innerHTML = "Registration succeed";
                            msg.style.color = "green";
                        </script>';
                } else {
                    ob_clean();
                    $show = New View("view/templates/sign_up.html");
                    $show->render();
                    echo '<script>
                            let msg = document.querySelector(".msg");
                            msg.innerHTML = "Registration failed";
                            msg.style.color = "red";
                        </script>';
                }
            }
        }

        public function call_router($page) {
            if($page == "Card collection"){
                ob_end_clean();
                $show = New View("view/templates/collection.html");
                $show->render();    
            } else if($page == "Back") {
                ob_end_clean();
                $show = New View("view/templates/main.html");
                $show->render();
                echo '<script>
                            let status = document.querySelector(".user");
                            status.innerHTML = "Hello: ' . $_SESSION['name'] . '";
                            document.getElementById("user_avatar").src = "'.$_SESSION['url'].'";
                        </script>';  
            } else if ($page == "Start battle"){
                // echo '<script>
                //             let status = document.querySelector(".user");
                //             status.innerHTML = "Hello: ' . $_SESSION['name'] . '";
                //             document.getElementById("user_avatar").src = "'.$_SESSION['url'].'";
                //         </script>';
                // $show = New View("view/templates/main.html");
                // $show->render();
            } else {
                ob_end_clean();
                $show = New View("view/templates/".$page.".html");
                $show->render();
            }
        }        
    }
?>