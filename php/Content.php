<?php
header('Content-Type: text/html; charset=utf-8');
class Content
{
    private $id;
    private $title;
    private $email;
    private $avatar;

    function __construct($id, $title, $email, $avatar)
    {
        $this->id = $id;
        $this->title = $title;
        $this->email = $email;
        $this->avatar = $avatar;
    }
    function getId()
    {
        return $this->id;
    }
    function getTitle()
    {
        return $this->title;
    }

    function getEmail()
    {
        return $this->email;
    }
    function getAvatar()
    {
        return $this->avatar;
    }
    //Статический метод добавления пользователя в бд
    static function addUser($title, $email, $password, $avatar)
    {
        global $mysqli;
        $email = mb_strtolower(trim($email));
        $password = trim($password);
        $password = password_hash($password, PASSWORD_DEFAULT);

        $result = $mysqli->query("SELECT * FROM `users` WHERE `email`='$email'");

        if ($result->num_rows != 0) {
            return json_encode(["result" => "exist"]);
        } else {
            $mysqli->query("INSERT INTO `users`(`title`, `email`, `password`, `avatar`) VALUES ('$title', '$email', '$password', '$avatar')");
            return json_encode(["result" => "success"]);
        }
    }

// ================= TASK authorisation with a static class method ================= //
    static function authUser($email, $password) {
        global $mysqli;

        $email = mb_strtolower(trim($email)); // as should be in the db
        $password = trim($password);

        $result = $mysqli->query("SELECT * FROM `users` WHERE `email`='$email'");
        $result = $result->fetch_assoc();

        if (password_verify($password, $result["password"])) {
            $_SESSION["id"] = $result["id"];
            return json_encode(["result" => "ok"]);
        } else {
            return json_encode(["result" => "denied"]);
        }

    }
// ================= TASK authorisation with a static class method ================= //

    static function getPic($content_id) {
        global $mysqli;
        $result = $mysqli->query("SELECT * FROM `content` WHERE `id`='$content_id'");
        $result = $result->fetch_assoc();
        return json_encode($result);
    }

    static function getUsers() {
        global $mysqli;
        $result = $mysqli->query("SELECT `name`, `surname`, `email`, `id` FROM `users` WHERE 1");

        while($row = $result->fetch_assoc()) {
            $users[] = $row;
        }
        return json_encode($users);
    }
}
