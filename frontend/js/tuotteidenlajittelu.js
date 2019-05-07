function Tuotelajittelija(tuotteet) {
    this.tuotteet = tuotteet;
    this.varaosat =  [];
    this.tarvikkeet = [];
    this.muut = [];

    this.lajitteleVaraosat = function () {
        this.tuotteet.forEach(obj =>{
            if (obj.Kuvaus === "Varaosa") {
                this.varaosat.push(obj);
            }
            else {

            }
        });
    };
    this.lajitteleTarvikkeet = function () {
        this.tuotteet.forEach(obj =>{
            if (obj.Kuvaus === "Tyokalu" || obj.Kuvaus === "Iso kone") {
                this.tarvikkeet.push(obj);
            }
            else{

            }
        });
    };
    this.lajitteleMuut = function () {
        this.tuotteet.forEach(obj =>{
            if (obj.Kuvaus === "Muut tuotteet") {
                this.muut.push(obj);
            }
            else {

            }
        });
    };
    this.getVaraosat = function () {
        return this.varaosat;
    };
    this.getTarvikkeet = function () {
        return this.tarvikkeet;
    };
    this.getMuut = function () {
        return this.muut;
    };

    this.makeVaraosat = function (tuotteet) {
        var olproducts = document.createElement("ol");
        tuotteet.forEach(tuote => {
            var listproducts = document.createElement("li");
            var divelistproducts = document.createElement("div");
            var spane = document.createElement("span");

            var divlistproductinfo = document.createElement("div");

            //divlistproductinfo <-- a <-- div <-- div <-- div <-- img

            var athumbnaillink = document.createElement("a");

            var divthumbnail = document.createElement("div");
            var divthumbnailcontainer = document.createElement("div");
            var img = document.createElement("img");
            img.setAttribute("src", tuote.Kuva);
            img.setAttribute("width", 198);
            img.setAttribute("height", 202);

            divthumbnailcontainer.appendChild(img);
            divthumbnail.appendChild(divthumbnailcontainer);
            athumbnaillink.appendChild(divthumbnail);

            //divlistproductinfo <-- div <-- a div <-- div <-- span
            var divproductinfo = document.createElement("div");
            var aproductinfolink = document.createElement("a");
            aproductinfolink.innerText = tuote.Nimi;
            var divproductprice = document.createElement("div");
            var divprice = document.createElement("div");
            var spanprice = document.createElement("span");
            spanprice.innerText = tuote.Hinta;

            divprice.appendChild(spanprice);
            divproductprice.appendChild(divprice);
            divproductinfo.appendChild(aproductinfolink);
            divproductinfo.appendChild(divproductprice);

            //next
            divlistproductinfo.appendChild(athumbnaillink);
            divlistproductinfo.appendChild(divproductinfo);

            divelistproducts.appendChild(divlistproductinfo);
            listproducts.appendChild(divelistproducts);
            olproducts.appendChild(listproducts);
        });
        document.getElementById("varaosat-lista").appendChild(olproducts);
    };

    this.makeTarvikkeet = function (tuotteet) {
        var olproducts = document.createElement("ol");
        tuotteet.forEach(tuote => {
            var listproducts = document.createElement("li");
            var divelistproducts = document.createElement("div");
            var spane = document.createElement("span");

            var divlistproductinfo = document.createElement("div");

            //divlistproductinfo <-- a <-- div <-- div <-- div <-- img

            var athumbnaillink = document.createElement("a");

            var divthumbnail = document.createElement("div");
            var divthumbnailcontainer = document.createElement("div");
            var img = document.createElement("img");
            img.setAttribute("src", tuote.Kuva);
            img.setAttribute("width", 198);
            img.setAttribute("height", 202);

            divthumbnailcontainer.appendChild(img);
            divthumbnail.appendChild(divthumbnailcontainer);
            athumbnaillink.appendChild(divthumbnail);

            //divlistproductinfo <-- div <-- a div <-- div <-- span
            var divproductinfo = document.createElement("div");
            var aproductinfolink = document.createElement("a");
            aproductinfolink.innerText = tuote.Nimi;
            var divproductprice = document.createElement("div");
            var divprice = document.createElement("div");
            var spanprice = document.createElement("span");
            spanprice.innerText = tuote.Hinta;

            divprice.appendChild(spanprice);
            divproductprice.appendChild(divprice);
            divproductinfo.appendChild(aproductinfolink);
            divproductinfo.appendChild(divproductprice);

            //next
            divlistproductinfo.appendChild(athumbnaillink);
            divlistproductinfo.appendChild(divproductinfo);

            divelistproducts.appendChild(divlistproductinfo);
            listproducts.appendChild(divelistproducts);
            olproducts.appendChild(listproducts);
        });
        document.getElementById("tarvikkeet-lista").appendChild(olproducts);
    };
    this.makeMuut = function (tuotteet) {
        var olproducts = document.createElement("ol");
        tuotteet.forEach(tuote => {
            var listproducts = document.createElement("li");
            var divelistproducts = document.createElement("div");
            var spane = document.createElement("span");

            var divlistproductinfo = document.createElement("div");

            //divlistproductinfo <-- a <-- div <-- div <-- div <-- img

            var athumbnaillink = document.createElement("a");

            var divthumbnail = document.createElement("div");
            var divthumbnailcontainer = document.createElement("div");
            var img = document.createElement("img");
            img.setAttribute("src", tuote.Kuva);
            img.setAttribute("width", 198);
            img.setAttribute("height", 202);

            divthumbnailcontainer.appendChild(img);
            divthumbnail.appendChild(divthumbnailcontainer);
            athumbnaillink.appendChild(divthumbnail);

            //divlistproductinfo <-- div <-- a div <-- div <-- span
            var divproductinfo = document.createElement("div");
            var aproductinfolink = document.createElement("a");
            aproductinfolink.innerText = tuote.Nimi;
            var divproductprice = document.createElement("div");
            var divprice = document.createElement("div");
            var spanprice = document.createElement("span");
            spanprice.innerText = tuote.Hinta;

            divprice.appendChild(spanprice);
            divproductprice.appendChild(divprice);
            divproductinfo.appendChild(aproductinfolink);
            divproductinfo.appendChild(divproductprice);

            //next
            divlistproductinfo.appendChild(athumbnaillink);
            divlistproductinfo.appendChild(divproductinfo);

            divelistproducts.appendChild(divlistproductinfo);
            listproducts.appendChild(divelistproducts);
            olproducts.appendChild(listproducts);
        });
        document.getElementById("muut-lista").appendChild(olproducts);
    };

}
