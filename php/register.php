<?php

$ID = $_POST["remail"];
$PASS = $_POST["rpass"];
$PASS2 = $_POST["rpass2"];

if ($PASS == $PASS2) {
    $AUTH = base64_encode($ID.$PASS);
    echo "Käyttäjä rekisteröity osoitteella $ID";
}
else {
    echo "Rekisteröinti ei onnistunut";
}

?>
