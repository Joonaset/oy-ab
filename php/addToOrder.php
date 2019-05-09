<?php
include "DBController.php";
$db_handle = new DBController();

$sql = "Select * FROM tuote WHERE tuotetyyppi = ?";

$prepare = $db_handle->db()->prepare($sql);

$prepare->bind_param( $_POST['tuote']);

$prepare->execute();
$result = $prepare->get_result();

while ($row=mysqli_fetch_assoc($result)) {
    $product[] = json_encode($row);
}
$encoded = json_encod($product);
return $encode;
?>

