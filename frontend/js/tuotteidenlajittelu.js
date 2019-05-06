function Tuotelajittelija(tuotteet) {
    this.tuotteet = tuotteet;
    this.varaosat =  [];
    this.tarvikkeet = [];
    this.muut = [];

    this.lajitteleVaraosat = function () {
        this.tuotteet.forEach(obj =>{
            if (obj.Kuvaus == "Varaosa") {
                this.varaosat.push(obj);
            }
            else {

            }
        });
    };
    this.lajitteleTarvikkeet = function () {
        this.tuotteet.forEach(obj =>{
            if (obj.Kuvaus == "Tyokalu" || obj.kuvaus == "Iso kone") {
                this.tarvikkeet.push(obj);
            }
            else{

            }
        });
    };
    this.lajitteleMuut = function () {
        this.tuotteet.forEach(obj =>{
            if (obj.Kuvaus == "Muut tuotteet") {
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
}