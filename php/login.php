<?php
// login.php returns true if credentials are found on database
include 'DBController.php';
$db_handle = new DBController();
$ID = $_POST['email'];
$PASS = $_POST['pass'];
$AUTH = base64_encode($ID.$PASS);
$sql = "SELECT * FROM kayttaja WHERE salasana = ?";
if (!($prepare = $db_handle->db()->prepare($sql))) { //Returns true if preparation does not work
}
$prepare->bind_param("s", $AUTH);
if (!($prepare->execute())) {
}
$result = $prepare->get_result();
while($row = mysqli_fetch_assoc($result)) {
    $user[] = json_encode($row);
    }
if (empty($user)) {
    echo "false";
}
else {
    echo "true";
}

?>
