"use strict";

function buy_ice() {
    var input_var = document.getElementById("address_input").value
    document.getElementById("buy_button").style.border = "2px solid darkgrey"
    document.getElementById("buy_button").style.color = "darkgrey"
    
    if (input_var == "") {
        document.getElementById("message").innerHTML = "You need to write your address."
    }
    else {
        document.getElementById("address_input").value = ""
        document.getElementById("message").innerHTML = "Thank you for your purchase."
    }
    setTimeout(() => {document.getElementById("buy_button").style.border = "2px solid black"}, 50);
    setTimeout(() => {document.getElementById("buy_button").style.color = "black"}, 50);
}