<?php
$servername = "localhost";
$username = "test";
$password = "qwerty1";
$dbname = "oyab";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Query that gets all products from SQL
$product_array = $conn->query("SELECT * FROM tuotetyyppi ORDER BY tuotetunnus ASC");
if (!empty($product_array)) {
    foreach($product_array as $key=>$value){
        ?>
        <div class="product-item">
            <form method="post" action="index.php?action=add&code=<?php echo $product_array[$key]["kuvaus"]; ?>">
                <div class="product-image"><img src="<?php echo $product_array[$key]["kuva"]; ?>"></div>
                <div class="product-tile-footer">
                    <div class="product-title"><?php echo $product_array[$key]["nimi"]; ?></div>
                    <div class="product-price"><?php echo "$".$product_array[$key]["hinta"]; ?></div>
                    <div class="cart-action"><input type="text" class="product-quantity" name="quantity" value="1" size="2" /><input type="submit" value="Add to Cart" class="btnAddAction" /></div>
                </div>
            </form>
        </div>
        <?php
    }
}
?>
