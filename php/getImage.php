<?php

include 'DBController.php';
$db_handle = new DBController();

// do some validation here to ensure id is safe
$sql = "SELECT kuva FROM tuotetyyppi ORDER BY tuotetunnus DESC";
$prepare = $db_handle->db()->prepare($sql);
$prepare->execute();
$result = $prepare->get_result();
while ($row = mysqli_fetch_assoc($result)) {
    //array_push($images,$row);
    $images[] = json_encode($row);
}
$encoded = json_encode($images);
echo $encoded;
?>