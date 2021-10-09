"use strict";

window.onload = function(){
    var square =  document.getElementById("board").querySelectorAll("div");

    square.forEach(function(item)
    {
        item.setAttribute("class","square");
    });

   
};