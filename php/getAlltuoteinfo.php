<?php

include 'DBController.php';
$db_handle = new DBController();

mysqli_set_charset($db_handle->db(), 'utf8');
// do some validation here to ensure id is safe
$result = $db_handle->db()->query("SELECT * FROM tuotetyyppi ORDER BY tuotetunnus ASC");

while ($row = mysqli_fetch_assoc($result)) {
    //array_push($images,$row);
    $productinfo[] = json_encode($row);
}
$encoded = json_encode($productinfo);
echo $encoded;
?>