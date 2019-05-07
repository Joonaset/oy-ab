<?php
include 'DBController.php';
$db_handle = new DBController();

$ID = "testaaja@testi.fi";//$_POST['email'];
$PASS = "sali";//$_POST['pass'];
$AUTH = base64_encode($ID.$PASS);

$sql = "SELECT * FROM kayttaja WHERE Salasana = ?";
if (!($prepare = $db_handle->db()->prepare($sql))) { //Returns true if preparation does not work
    echo "Preparation failed";
}
$prepare->bind_param("s", $AUTH);
if (!($prepare->execute())) {
    echo "MySQLi execution failed";
}
$result = $prepare->get_result();
if ($result->num_rows === 0) {
    echo "Väärä salasana";
    return false;
}
while ($row = mysqli_fetch_assoc($result)) {
    $user[] = json_encode($row);
}

$encoded = json_encode($user);
print $encoded;
echo "Olet kirjautunut sisään";
return true;


?>
