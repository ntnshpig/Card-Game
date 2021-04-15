<?php

  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Methods: *");
  header("Access-Control-Allow-Headers: *");

  require_once __DIR__.'/view/View.php';
  require_once __DIR__.'/model/connection/DatabaseConnection.php';
  require_once __DIR__.'/model/Model.php';
  require_once __DIR__.'/model/Users.php';
  require_once __DIR__."/model/Search.php";

if ($_POST['action'] === 'sign in') {
    $user = new Users();
    if($user->sign_in($_POST['login'], $_POST['password'])) {
        ob_clean();
        $show = New View("view/templates/main.html");
        $show->render();
    } else {
        ob_clean();
        $show = New View("view/templates/sign_in.html");
        $show->render();
        // echo '<script>
        //         let msg = document.querySelector(".msg");
        //         msg.innerHTML = "Enter failed";
        //         msg.style.color = "red";
        //     </script>';
    }
} else if ($_POST['action'] === 'remind password') {
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
} else if ($_POST['action'] === 'sign up') {
    $user = new Users();
    if($user->sign_up($_POST['login'], $_POST['email'], $_POST['password'], $_POST['repeat'], $_POST['real_name'], $_POST['avatar_url'])){
        ob_clean();
        $show = New View("view/templates/main.html");
        $show->render();
        echo '<script>
                let status = document.querySelector(".user");
                status.innerHTML = "Hello: ' . $_POST['real_name'] . '";
                document.getElementById("user_avatar").src = "'. $_POST['avatar_url'] .'";
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
} else if ($_POST['action'] === 'get name') {
    $user = new Users();
    echo  $user->get_name($_POST['login']);
} else if ($_POST['action'] === 'get url') {
    $user = new Users();
    echo  $user->get_url($_POST['login']);
} else if ($_POST['action'] === "start battle") {
    $search = new Search();
    $i = 0;
    $tmp = $search->add_to_table($_POST['login']);
    while (!$tmp || $i > 60) {
        sleep(3);
        $i += 3;  
        $tmp = $search->add_to_table($_POST['login']);
    }
    $answer = $tmp['name'];
    $answer = $answer . " " . $tmp['url'];
    $answer = $answer . " " . $tmp['order'];
    echo $answer;
}
