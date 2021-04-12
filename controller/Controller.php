<?php
    require_once "ControllerInterface.php";
    require_once __DIR__.'/../view/View.php';

    class Controller implements ControllerInterface {
        private $view;

        function __construct() {
            $this->content = New View('../view/templates/main.html');
        }

        function execute() {
            $this->content->render();
        }
    }
?>
