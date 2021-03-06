<?php
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
                $_SESSION['login'] = $_POST['login'];
                echo '<script src="view/templates/js/socket.js"></script>
                <script>
                sendData({login: \'' . $_POST['login'] . '\', password: \'' . $_POST['password'] .
                    '\', action: \'sign in\'}, (data)=>{document.body.innerHTML = data;})
                </script>
                <script>
                sendData({login: \'' . $_POST['login'] . '\', action: \'get name\'}, (data)=>{
                    let status = document.querySelector(".user");
                    if (status !== null) {
                        status.innerHTML = "Hello, ";
                        status.innerHTML += data;
                        let msg = document.querySelector(".msg_in");
                        msg.innerHTML = "Enter succeed";
                        msg.style.color = "green";
                    }
                })
                </script>
                <script>
                sendData({login: \'' . $_POST['login'] . '\', action: \'get url\'}, (data)=>{
                    if (document.getElementById("user_avatar") !== null) {
                        document.getElementById("user_avatar").src = data;
                    } else {
                        let msg = document.querySelector(".msg");
                        msg.innerHTML = "Enter failed";
                        msg.style.color = "red";
                    }
                })
                </script>';
            }
            if($action == "Sign Up") {
                $_SESSION['login'] = $_POST['login'];
                echo '<script src="view/templates/js/socket.js"></script>
                <script>
                sendData({login: \'' . $_POST['login'] . '\', email: \'' . $_POST['email'] .
                    '\', password: \'' . $_POST['password'] . '\', repeat: \'' . $_POST['repeat'] . 
                    '\', real_name: \'' . $_POST['real_name'] . '\', avatar_url: \'' . $_POST['avatar_url'] .
                    '\', action: \'sign up\'}, (data)=>{ document.body.innerHTML = data; })
                </script>
                <script>
                    sendData({login: \'' . $_POST['login'] . '\', action: \'get name\'}, (data)=>{
                    let status = document.querySelector(".user");
                        if (status !== null) {
                            status.innerHTML = "Hello, ";
                            status.innerHTML += data;
                            let msg = document.querySelector(".msg_in");
                            msg.innerHTML = "Enter succeed";
                            msg.style.color = "green";
                        }
                    })
                </script>
                <script>
                    sendData({login: \'' . $_POST['login'] . '\', action: \'get url\'}, (data)=>{
                        if (document.getElementById("user_avatar") !== null) {
                            document.getElementById("user_avatar").src = data;
                        } else {
                            let msg = document.querySelector(".msg");
                            msg.innerHTML = "Sign Up failed";
                            msg.style.color = "red";
                        }
                    })
                </script>';
            }
            if ($action == "Start battle"){
                ob_end_clean();
                $_SESSION['stop'] = 0;
                $show = New View("view/templates/main.html");
                $show->render();
                echo '<script>
                    document.querySelector(".upper").style.display = "none";
                    document.querySelector(".profile").style.display = "none";
                    document.querySelector(".searching").style.display = "flex";
                </script>';
                echo '<script src="view/templates/js/socket.js"></script>
                <script>
                sendData({login: \'' . $_SESSION['login'] . '\', action: \'start battle\'}, (data)=>{
                    var arr = data.split(" "); 
                    if (arr[0] === "Success") {
                        document.body.innerHTML = data;
                    } else if (' . $_SESSION['stop'] . ' == 0) {
                        document.querySelector(".upper").style.display = "flex";
                        document.querySelector(".profile").style.display = "flex";
                        document.querySelector(".searching").style.display = "none";
                    }
                })
                </script>';
            }
        }

        public function call_router($page) {
            if($page == "Card collection"){
                ob_end_clean();
                $show = New View("view/templates/collection.html");
                $show->render();    
            } else if ($page == "Battle with Bot") {
                ob_end_clean();
                $show = New View("view/templates/battle.html");
                $show->render(); 
                echo '<script src="view/templates/js/socket.js"></script>
                <script>
                sendData({login: \'' . $_SESSION['login'] . '\', action: \'get url\'}, (data)=>{
                    document.querySelector(".hero_avatar").src = data;})
                    document.querySelector(".hero_name").innerHTML = \''. $_SESSION['login'] .'\';
                </script>';

            } else if($page == "Back" || $page == "Stop searching" || $page == "Give Up") {
                ob_end_clean();
                if ($page == "Stop searching") {
                    $_SESSION['stop'] = 1;
                }
                $show = New View("view/templates/main.html");
                $show->render();
                echo '<script src="view/templates/js/socket.js"></script>
                <script>
                sendData({login: \'' .  $_SESSION['login'] . '\', action: \'get name\'}, (data)=>{
                    let status = document.querySelector(".user");
                    status.innerHTML = "Hello, ";
                    status.innerHTML += data;})
                </script>
                <script>
                sendData({login: \'' . $_SESSION['login'] . '\', action: \'get url\'}, (data)=>{
                    document.getElementById("user_avatar").src = data;})
                </script>';  
            } else {
                ob_end_clean();
                $show = New View("view/templates/".$page.".html");
                $show->render();
            }
        }        
    }
?>
