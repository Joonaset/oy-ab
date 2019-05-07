<?php
include 'DBController.php';
$db_handle = new DBController();
?>
<!DOCTYPE html>
<html>

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="style.css" rel="stylesheet" type="text/css">
</head>

<body>

<div id="gridview">
    <div class="heading">Product Gallery for Shopping Cart</div>
    <?php
    $query = $db_handle->db()->query("SELECT * FROM tuotetyyppi ORDER BY tuotetunnus ASC");
    if (! empty($query)) {
        foreach ($query as $key => $value) {
            ?>
            <div class="image">
                <img src="<?php echo $query[$key]["kuva"] ; ?>" />
                <div class="product-info">
                    <div class="product-title"><?php echo $query[$key]["nimi"] ; ?></div>
                    <ul>
                        <?php
                        for($i=1;$i<=5;$i++) {
                            $selected = "";
                            if(!empty($query[$key]["average_rating"]) && $i<=$query[$key]["average_rating"]) {
                                $selected = "selected";
                            }
                            ?>
                            <li class='<?php echo $selected; ?>'>★</li>
                        <?php }  ?>
                    </ul>
                    <div class="product-category"><?php echo $query[$key]["kuvaus"] ; ?>

                    </div>
                    <div class="add-to-cart">
                        <div><?php echo $query[$key]["hinta"] ; ?> EUR</div>
                        <div><img src="icon-cart.png" /></div>
                    </div>
                </div>
            </div>
            <?php
        }
    }
    ?>
</div>
</body>
</html>
