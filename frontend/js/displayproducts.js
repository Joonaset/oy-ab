'use strict';
window.onload = function () {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var notparsed = xmlhttp.responseText;
            var parsed = JSON.parse(notparsed);
            var tuotteet = [];
            var string = "Kuvat: ";
            parsed.forEach(obj => {
                //string = string + ' ' + obj.kuva;
                var parse = JSON.parse(obj);
                string = string + ' ' + parse.kuva;
                tuotteet.push(parse);
            });
            //document.getElementById("images").innerHTML = string;
            createProduct(tuotteet);
            var tuote = new Tuotelajittelija(tuotteet);
            tuote.lajitteleTarvikkeet();
            tuote.lajitteleVaraosat();
            tuote.lajitteleMuut();
        }
    };
    xmlhttp.open("GET", "../php/getAlltuoteinfo.php", true);
    xmlhttp.send();
};
//funktio joka luo kuvat sivulle ja tarkoitus laajentaa että luo vasemmalta oikealle kaikista tuotteista kuvat
function createProduct(tuotteet) {

    var olproducts = document.createElement("ol");

    tuotteet.forEach(tuote => {
        var div = document.createElement("div");
        var img = document.createElement("img");
        var h1 = document.createElement("h1");
        var price = document.createElement("price");
        var details = document.createElement("p");
        var pforb = document.createElement("p");
        var button = document.createElement("button");
        pforb.appendChild(button);

        var a = [img,h1,price,details,pforb];

        for (let i = 0; i < a.length; i++) {
            div.appendChild(a[i]);
        }

        div.setAttribute("class","card");

        img.setAttribute("src",tuote.Kuva);
        img.setAttribute("width",200);
        img.setAttribute("height",200);

        h1.innerText = tuote.Nimi;

        price.setAttribute("class","price");
        price.innerText = tuote.Hinta;

        details.innerText = "Tuotekuvaus";

        button.innerText = "Add to Cart";

        var list = document.createElement("li");

        list.appendChild(div);
        olproducts.appendChild(list);


    });
    document.getElementById("tuotteet").appendChild(olproducts);
};