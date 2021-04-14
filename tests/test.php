<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: *");

if (isset($_POST['name'])) {
  echo $_POST['name'];
}