<?php
include 'DBController.php';
$db_handle = new DBController();

//Muokkaa arvot niin että kommenteissa olevat arvot tulevat voimaan
$ID = $_POST["remail"];
$PASS = $_POST["rpass"];
$PASS2 = $_POST["rpass2"];
$ADDR = $_POST["address"];
// Preparing statement
$sql = "INSERT INTO kayttaja (Sahkoposti, Salasana, Osoite) VALUES (?, ?, ?)";

// Check that password was given right
if ($PASS == $PASS2) {
    if (!($prepare = $db_handle->db()->prepare($sql))) {
        echo "Preparation failed";
    }
    // Make authentication key so that password is not saved on the server
    $AUTH = base64_encode($ID.$PASS);
    $prepare->bind_param("sss", $ID, $AUTH, $ADDR);
    if (!($prepare->execute())) {
        echo "shit database";
    }
    echo "Käyttäjä rekisteröity osoitteella $ID";
    header("Location: ../frontend/kirjaudu2.html");
}
else {
    echo "Rekisteröinti ei onnistunut";
}
?>
