<?php

include 'DBController.php';
$db_handle = new DBController();

//mysqli_set_charset($db_handle->db(), 'utf8');
$sql = "SELECT * FROM tuotetyyppi ORDER BY tuotetunnus ASC";
// do some validation here to ensure id is safe
$prepare = $db_handle->db()->prepare($sql);
$prepare->execute();
$result = $prepare->get_result();

while ($row = mysqli_fetch_assoc($result)) {
    //array_push($images,$row);
    $productinfo[] = json_encode($row);
}
$encoded = json_encode($productinfo);
echo $encoded;
?>