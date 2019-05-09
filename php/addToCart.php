<?php
//addToOrder takes 'user' and 'tuote' as POST parameters. It adds the item to users order.
include "DBController.php";
$db_handle = new DBController();

function getBasket() {
    $sql = "SELECT * from kayttaja WHERE email = ?";
    $prepare = $db_handle->db()->prepare($sql);
    $prepare->bind_param($_POST['user']);
    $prepare->execute();
    $result = $prepare->get_result();
    if ($result->num_rows == 0) {
        return false;
    }

    return $ordernumber;
}



function getItem() { //getItem selects item from database by POST 'tuote' ID and returns it
    $sql = "SELECT Tuotetunnus FROM tuote WHERE tuotetyyppi = ?";
    $prepare = $db_handle->db()->prepare($sql);
    $prepare->bind_param($POST['tuote']);
    $result = $prepare->get_result();
    return $result;
}


$sql = "INSERT INTO tilaus VALUES(tilausnumero, tuotetunnus) VALUES(? , ?)";
if (!getBasket()) {
    echo "Kirjaudu sisään ensin";
    return false;
}
$prepare = $db_handle->db()->prepare($sql);
$prepare->bind_param(getBasket, getItem);
$prepare->execute();

while ($row=mysqli_fetch_assoc($result)) {
    $product[] = json_encode($row);
}
?>

