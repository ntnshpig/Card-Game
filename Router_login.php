<?php
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Methods: *");
  header("Access-Control-Allow-Headers: *");

  require_once __DIR__.'/view/View.php';
  require_once __DIR__.'/model/connection/DatabaseConnection.php';
  require_once __DIR__.'/model/Model.php';
  require_once __DIR__.'/model/Users.php';

if ($_POST['login']) {
    echo $_POST['login'];
    echo $_POST['password'];
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
                let msg_hide = document.querySelector(".msg_hide");
                msg_hide.innerHTML = "' . $_SESSION['id'] . '";
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
//    $arr = array('a' => 1, 'b' => 2, 'c' => 3, 'd' => 4, 'e' => 5);
//    echo json_encode($arr);
}


// sign in 
