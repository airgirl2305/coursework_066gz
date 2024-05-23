<?php
header("Access-Control-Allow-Origin: *"); // разрешаем обращение к любому ресурсу
session_start();

$url = explode("/", $_SERVER["REQUEST_URI"]);
require_once("php/db.php");

if ($url[1] == "signin") {
    $content = file_get_contents("pages/signin.php");
} else if ($url[1] == "signup") {
    $content = file_get_contents("pages/signup.php");
}else if ($url[1] == "regUser") {
    echo User::addUser($_POST["name"], $_POST["surname"], $_POST["email"], $_POST["password"]);
} else if ($url[1] == "authUser") {
    echo User::authUser($_POST["email"], $_POST["password"]);
} else if ($url[1] == "getUser") {
    echo User::getUser($_SESSION["id"]);
} else if ($url[1] == "getUsers") {
    echo User::getUsers();
} else {
    $content = file_get_contents("pages/index.php");
}
if (!empty($content)) require_once("template.php");
