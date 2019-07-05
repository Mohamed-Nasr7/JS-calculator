var num;

function showRes(num) {
    "use strict";
    document.getElementById("txt").value += num;
}

function equal() {
    var res = document.getElementById("txt").value;
    if (res) {
        document.getElementById("txt").value = eval(res);
    }
}


function clr() {
    document.getElementById("txt").value = "";
}

function back() {
    var res = document.getElementById("txt").value;
    document.getElementById("txt").value = res.substr(0, res.length-1)
}


