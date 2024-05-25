<?php
header("Access-Control-Allow-Origin: *");
session_start();

$url = explode("/", $_SERVER["REQUEST_URI"]);
require_once("php/db.php");

if ($url[1] == "sign-up") {
    echo User::addUser($_POST["username"], $_POST["email"], $_POST["password"], $_POST["avatar"]);
} else if ($url[1] == "sign-in") {
    echo User::signIn($_POST["email"], $_POST["password"]);
//     TODO export const checkAuth = () => `${host}/auth/check`;
    } else if ($url[1] == "sign-out") {
        echo User::signOut($_POST["email"], $_POST["password"]);
} else if ($url[1] == "getUser") { //*users/${id}`;
    echo User::getUser($_SESSION["id"]);
    } else if ($url[1] == "editUser") { //*users/${id}`;
        echo User::editUser($_SESSION["id"]);
} else if ($url[1] == "users") {
    echo User::getUsers();
    //! правильно
} else if ($url[1] == "getFavorite") {
    echo User::getFavorite($_SESSION["id"]);
} else if ($url[1] == "content") {
     echo Content::addContent();
 }

if (!empty($content)) require_once("template.php");
