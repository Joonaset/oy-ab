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

            olproducts.setAttribute("class", "productol")
            div.setAttribute("class","tuoteboxi");
            details.setAttribute("id", "details")
            img.setAttribute("src",tuote.Kuva);
            img.setAttribute("width",200);
            img.setAttribute("height",200);

            h1.innerText = tuote.Nimi;

            price.setAttribute("class","price");
            price.innerText = tuote.Hinta;

            details.innerText = "Tuotekuvaus";

            button.innerText = "Add to Cart";
            button.setAttribute("onclick","addCart("+tuote+")");

            var list = document.createElement("li");

            list.appendChild(div);
            olproducts.appendChild(list);


        });
        document.getElementById("varaosat-lista").appendChild(olproducts);
    };

    this.makeTarvikkeet = function (tuotteet) {

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

            olproducts.setAttribute("class", "productol")
            div.setAttribute("class","tuoteboxi");
            details.setAttribute("id", "details")
            img.setAttribute("src",tuote.Kuva);
            img.setAttribute("width",200);
            img.setAttribute("height",200);

            h1.innerText = tuote.Nimi;

            price.setAttribute("class","price");
            price.innerText = tuote.Hinta;

            details.innerText = "Tuotekuvaus";

            button.innerText = "Add to Cart";
            button.setAttribute("onclick","addCart("+tuote+")");

            var list = document.createElement("li");

            list.appendChild(div);
            olproducts.appendChild(list);


        });
        document.getElementById("tarvikkeet-lista").appendChild(olproducts);
    };
    this.makeMuut = function (tuotteet) {

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

            olproducts.setAttribute("class", "productol");
            div.setAttribute("class","tuoteboxi");
            details.setAttribute("id", "details");
            img.setAttribute("src",tuote.Kuva);
            img.setAttribute("width",200);
            img.setAttribute("height",200);

            h1.innerText = tuote.Nimi;

            price.setAttribute("class","price");
            price.innerText = tuote.Hinta;

            details.innerText = "Tuotekuvaus";

            button.innerText = "Add to Cart";
            button.setAttribute("onclick","addCart("+tuote+")");

            var list = document.createElement("li");

            list.appendChild(div);
            olproducts.appendChild(list);


        });
        document.getElementById("muut-lista").appendChild(olproducts);
    };

}
