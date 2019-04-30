//This script creates user object using form data.

function login() {
    'use strict';
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;

    var user = {
        email: email,
        pass: pass
    };

    var userstring = JSON.stringify(user);
    console.log(userstring);


    return false;

}
function ajaxFunction() {
    var ajaxRequest;
    try{
        ajaxRequest = new XMLHttpRequest();
    } catch (e){
        try {ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
        } catch(e){
            try {
                ajaxRequest = new ActiveXobject("Microsoft.XMLHTTP");
            } catch (e) {
                alert("Update Your Browser!");
            }
        }
    }

    ajaxRequest.onreadystatechange = function() {
        if(ajaxRequest.readyState == 4) {
            if (ajaxRequest.responseText == "yes") {
                return true;
            }

        }
    }
}

function init() {
    'use strict';
    var form = document.getElementById('loginForm');
    form.onsubmit = login;
}
window.onload = init;
