<?php
$ID = $_POST['email'];
$PASS = $_POST['pass'];
$AUTH = base64_encode($ID.$PASS);


if ($ID == 'joonas@testi.fi' and $PASS == 'testi') {
    echo "Pääsit sisään \n";
}
else {
    echo "Väärä sähköposti tai salasana";
}
?>
