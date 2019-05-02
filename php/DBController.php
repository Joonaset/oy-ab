<?php


class DBController
{
    private $db;

    private $username="test";
    private $password="qwerty1";
    private $servername="localhost";
    private $database="oy-ab";

    function __construct() {
        $this->db = new mysqli($this->servername, $this->username, $this->password);
        $this->db->select_db($this->database);
    }

    function db()  {
        return $this->db;
    }
}
?>