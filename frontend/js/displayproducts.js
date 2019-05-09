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

            tuote.lajitteleVaraosat();
            tuote.lajitteleTarvikkeet();
            tuote.lajitteleMuut();
            tuote.makeVaraosat(tuote.getVaraosat());
            tuote.makeTarvikkeet(tuote.getTarvikkeet());
            tuote.makeMuut(tuote.getMuut());
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
        var divbutton = document.createElement("div");
        var button = document.createElement("button");
        divbutton.appendChild(button);

        divbutton.setAttribute("id","addproduct");
        divbutton.setAttribute("class","");

        var a = [img,h1,price,details,divbutton];

        for (let i = 0; i < a.length; i++) {
            div.appendChild(a[i]);
        }
        price.setAttribute("class","price");
        olproducts.setAttribute("class", "productol")
        div.setAttribute("class","tuoteboxi");
        details.setAttribute("id", "details");
        divbutton.setAttribute("id", "button");
        img.setAttribute("src",tuote.Kuva);
        img.setAttribute("width",200);
        img.setAttribute("height",200);

        h1.innerText = tuote.Nimi;

        price.setAttribute("class","price");
        price.innerText = tuote.Hinta +"€";

        details.innerText = "Tuotekuvaus";

        button.innerText = "Add to Cart";
        button.setAttribute("onclick","addCart("+tuote.Tuotetunnus+","+JSON.stringify(tuote)+")");

        var list = document.createElement("li");

        list.appendChild(div);
        olproducts.appendChild(list);


    });
    document.getElementById("tuotteet").appendChild(olproducts);
};