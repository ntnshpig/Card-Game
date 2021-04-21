<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: *");
    header("Access-Control-Allow-Headers: *");
    session_start();

    require_once __DIR__.'/controller/Controller.php';
    require_once __DIR__.'/view/View.php';
    require_once __DIR__.'/view/Router.php';
    // require_once __DIR__.'/model/connection/DatabaseConnection.php';
    // require_once __DIR__.'/model/Model.php';
    // require_once __DIR__.'/model/Users.php';

    if(!$_SESSION['page']) {
        $_SESSION['page'] = "sign_in";
        // $show = New View('view/templates/sign_in.html');
        // $show->render();
    }
    if(!$_SESSION['login']) {
        $show = New View('view/templates/sign_in.html');
        $show->render();
    } else {
        $show = New View('view/templates/main.html');
        $show->render();
        echo '<script src="view/templates/js/socket.js"></script>
                <script>
                sendData({login: \'' . $_SESSION['login'] . '\', action: \'get name\'}, (data)=>{
                    let status = document.querySelector(".user");
                    status.innerHTML = "Hello, ";
                    status.innerHTML += data;})
                </script>
                <script>
                sendData({login: \'' . $_SESSION['login'] . '\', action: \'get url\'}, (data)=>{
                    document.getElementById("user_avatar").src = data;})
                </script>';
    }

    /*if(!isset($_GET['moveto']) && !isset($_POST['moveto'])) {
        $show = New View('view/templates/' . $_SESSION['page'] . ".html");
        $show->render();
    }*/
    
    if(isset($_POST['moveto'])) {
        $router = new Router();
        $router->call_router($_POST['moveto']);
    }
    if(isset($_GET['moveto'])) {
        $router = new Router();
        $router->call_router($_GET['moveto']);
    }

    if(isset($_POST['action']) || isset($_POST['moveto'])) {
        $router = new Router();
        $router->call_action($_POST['action']);
    }

    if(isset($_POST['logout'])) {
        ob_end_clean();
        unset($_SESSION['login']);
        // unset($_SESSION['name']);
        unset($_SESSION['page']);
        // unset($_SESSION['url']);
        $show = New View('view/templates/sign_in.html');
        $show->render();
        session_destroy();
    }
?>