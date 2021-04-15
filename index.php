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

    $show = New View('view/templates/sign_in.html');
    $show->render();

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
        // unset($_SESSION['name']);
        unset($_SESSION['page']);
        // unset($_SESSION['url']);
        $show = New View('view/templates/sign_in.html');
        $show->render();
        session_destroy();
    }
?>