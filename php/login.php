<?php
// login.php returns json format of
include 'DBController.php';
$db_handle = new DBController();
$ID = $_POST['email'];
$PASS = $_POST['pass'];
$AUTH = base64_encode($ID.$PASS);
$sql = "SELECT * FROM kayttaja WHERE Salasana = ?";
if (!($prepare = $db_handle->db()->prepare($sql))) { //Returns true if preparation does not work
}
$prepare->bind_param("s", $AUTH);
if (!($prepare->execute())) {
}
$result = $prepare->get_result();
if ($result->num_rows === 0) {
    echo "Väärä käyttäjätunnus tai salasana";
    return false;
}
while ($row = mysqli_fetch_assoc($result)) {
    $user[] = json_encode($row);
}
$encoded = json_encode($user);
echo "<script>localStorage.setItem('user', $ID)</script>";
echo "Kirjauduttu sisään";
header("Location:../frontend/etusivu.html");
return $encoded;
?>
