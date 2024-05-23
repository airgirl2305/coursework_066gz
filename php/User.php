<?php

class User
{

    private $name;
    private $surname;
    private $email;
    private $id;

    function __construct($id, $name, $surname, $email)
    {
        $this->id = $id;
        $this->name = $name;
        $this->surname = $surname;
        $this->email = $email;
    }
    function getId()
    {
        return $this->id;
    }
    function getName()
    {
        return $this->name;
    }
    function getSurname()
    {
        return $this->surname;
    }
    function getEmail()
    {
        return $this->email;
    }

    //Статический метод добавления пользователя в бд
    static function addUser($name, $surname, $email, $password)
    {
        global $mysqli;
        $email = mb_strtolower(trim($email));
        $password = trim($password);
        $password = password_hash($password, PASSWORD_DEFAULT);

        $result = $mysqli->query("SELECT * FROM `users` WHERE `email`='$email'");

        if ($result->num_rows != 0) {
            return json_encode(["result" => "exist"]);
        } else {
            $mysqli->query("INSERT INTO `users`(`name`, `surname`, `email`, `password`) VALUES ('$name', '$surname', '$email', '$password')");
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

    static function getUser($user_id) {
        global $mysqli;
        $result = $mysqli->query("SELECT * FROM `users` WHERE `id`='$user_id'");
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
