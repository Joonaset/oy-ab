<?php
include "DBController.php";
$db_handle = new DBController();

$sql = "SELECT * FROM tuotetyyppi WHERE tuotetunnus = ?";

//prepared statements
$prepare = $db_handle->db()->prepare($sql);

//$_POST saa parametrin formista ja on näkymätön muille
$prepare->bind_param( $_POST['tuotetunnus']);

$prepare->execute();
$result = $prepare->get_result();

while ($row = mysqli_fetch_assoc($result)) {
    $productinfo[] = json_encode($row);
}

$encoded = json_encode($productinfo);
echo $encoded;
?>
