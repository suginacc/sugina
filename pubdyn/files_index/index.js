"use strict";
var httpRequest;
var httpRequest2;

window.onload = function() {
    httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = handleResponse;
    httpRequest.open("GET", "/api/dictum", true);
    httpRequest.setRequestHeader("Content-type", "text/plain");
    httpRequest.send();

    httpRequest2 = new XMLHttpRequest();
    httpRequest2.onreadystatechange = handleResponse2;
    httpRequest2.open("GET", "/api/username", true);
    httpRequest2.setRequestHeader("Content-type", "text/plain");
    httpRequest2.send();

    function handleResponse() {
        if (httpRequest.readyState == 4 && httpRequest.status == 200)
            document.getElementById("p_dictum").innerText = httpRequest.responseText;
    }

    function handleResponse2() {
        if (httpRequest2.readyState == 4 && httpRequest2.status == 200) {
            var res = JSON.parse(httpRequest2.responseText);
            document.getElementById("ul_userinfo").innerHTML = !res ?
                "<li><a href=\"/auth/login\">Log In</a></li>" :
                "<li>Welcome, " + res + "</li>" +
                "<li><a href=\"/auth/logout\">Log Out</a></li>";
        }
    }
}
