'use strict';
window.onload = function () {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var notparsed = xmlhttp.responseText;
            var parsed = JSON.parse(notparsed);
            var kuvat = [];
            var string = "Kuvat: ";
            parsed.forEach(obj => {
                //string = string + ' ' + obj.kuva;
                var parse = JSON.parse(obj);
                string = string + ' ' + parse.kuva;
                kuvat.push(parse.kuva);
            });
            document.getElementById("images").innerHTML = string;
            createProduct(kuvat);
        }
    };
    xmlhttp.open("GET", "../../php/getImage.php", true);
    xmlhttp.send();
};
//funktio joka luo kuvat sivulle ja tarkoitus laajentaa että luo vasemmalta oikealle kaikista tuotteista kuvat
function createProduct(kuvat) {

    kuvat.forEach(kuva => {
        var divelement = document.createElement("div");
        var imgelement = document.createElement("img");
        imgelement.setAttribute("src", kuva);
        divelement.appendChild(imgelement);
        document.getElementById("myForm").appendChild(divelement);
    });
};