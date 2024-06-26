<?php
header('Content-Type: text/html; charset=utf-8');
class User
{
    private $id;
    private $username;
    private $email;
    private $avatar;

    function __construct($id, $username, $email, $avatar)
    {
        $this->id = $id;
        $this->username = $username;
        $this->email = $email;
        $this->avatar = $avatar;
    }
    function getId()
    {
        return $this->id;
    }
    function getName()
    {
        return $this->username;
    }

    function getEmail()
    {
        return $this->email;
    }
    function getAvatar()
    {
        return $this->avatar;
    }

    static function addUser($username, $email, $password, $avatar)
    {
        global $mysqli;
        $email = mb_strtolower(trim($email));
        $password = trim($password);
        $password = password_hash($password, PASSWORD_DEFAULT);

        $result = $mysqli->query("SELECT * FROM `users` WHERE `email`='$email'");

        if ($result->num_rows != 0) {
            return json_encode(["result" => "exist"]);
        } else {
            $mysqli->query("INSERT INTO `users`(`username`, `email`, `password`, `avatar`) VALUES ('$username', '$email', '$password', '$avatar')");
            return json_encode(["result" => "success"]);
        }
    }

    static function signIn($email, $password) {
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

// const signOut = async (req, res) => {
//   res.clearCookie(COOKIE_NAME);
//   req.session.destroy((err) => {
//     if (err) return res.sendStatus(500);
//     return res.sendStatus(200);
//   });
// };
//
// const checkAuth = async (req, res) => {
//   try {
//     const user = await User.findByPk(req.session.user.id);
//     return res.json({ id: user.id, name: user.name });
//   } catch (error) {
//     return res.sendStatus(500);
//   }
// };

    static function getUser($user_id) {
        global $mysqli;
        $result = $mysqli->query("SELECT * FROM `users` WHERE `id`='$user_id'");
        $result = $result->fetch_assoc();
        return json_encode($result);
    }

    static function getUsers() {
        global $mysqli;
        $result = $mysqli->query("SELECT `user_id`, `email`, `username`, `avatar`,  FROM `users` WHERE 1");

        while($row = $result->fetch_assoc()) {
            $users[] = $row;
        }
        return json_encode($users);
    }

    static function getFavorite($user_id){
        global $mysqli;
            //?  выбери всех через favorites таблицу по id
        $result = $mysqli->query("SELECT * FROM `content` WHERE `id`='$user_id'");

        while ($row = $result->fetch_assoc()) {
            $favorite_content[] = $row;
        }
        return json_encode($favorite_content);
    }
}
