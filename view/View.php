<?php
    class View {
        function __construct($url) {
            $this->content = file_get_contents($url);
        }

        function render() {
            ob_start();
            echo $this->content;
        }
    }
?>