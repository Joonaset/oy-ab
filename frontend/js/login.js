//This script creates user object using form data.
'use strict'

function ajaxLogin() {
    console.log("Käynnistetään ajaxLogin");
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var params = "email="+email+"&pass="+pass;
    var ajaxRequest;
    ajaxRequest = new XMLHttpRequest();

    ajaxRequest.onreadystatechange = function() {
        if(ajaxRequest.readyState == 4) {
            var response = ajaxRequest.responseText;
            if (response == "true") {
                alert("logged in");
                localStorage.setItem("user", email);
            }
            else {
                alert("ei onnistunut");
                localStorage.setItem("user","");
            }

        }
    };
    console.log("sending request with values: "+ params);
    ajaxRequest.open("POST", "../php/login.php", true);
    ajaxRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    ajaxRequest.send(params);

}

function init() {
    var logbutton = document.getElementById('logsub');
    var statusdiv = document.getElementById("status");
    logbutton.onclick = ajaxLogin;
}
window.onload = init;
