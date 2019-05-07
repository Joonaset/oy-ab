<?php
include 'DBController.php';
$db_handle = new DBController();

$ID = $_POST["remail"];
$PASS = $_POST["rpass"];
$PASS2 = $_POST["rpass2"];
$ADDR = $_POST["address"];

if ($PASS == $PASS2) {
    $AUTH = base64_encode($ID.$PASS);
//    $query = $dbhandle->db()->query("INSERT INTO kayttaja (Sahkoposti, Salasana, Osoite) VALUES ($ID, $ID.$PASS, $ADDR))";
    echo "<script><\script>";
    echo "Käyttäjä rekisteröity osoitteella $ID";
}
else {
    echo "Rekisteröinti ei onnistunut";
}

?>
