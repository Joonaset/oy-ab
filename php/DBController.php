<?php


class DBController
{
    private $db;

    private $username="test";
    private $password="qwerty1";
    private $servername="localhost";
    private $database="oy-ab";

    function __construct() {
        mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
        try {
            $this->db = new mysqli($this->servername, $this->username, $this->password);
            $this->db->set_charset('utf8');
            $this->db->select_db($this->database);
        } catch (Exception $e) {
            error_log($e->getMessage());
            exit('Error connecting to database');
        }
    }

    function db()  {
        return $this->db;
    }
}
?>
