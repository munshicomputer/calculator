var input = document.getElementById("input")
var e = document.getElementById("e")
var point = document.getElementById("point")
var zero = document.getElementById("zero")

var sum = document.getElementById("sum")
var subtract = document.getElementById("subtract")
var multiplie = document.getElementById("multiplie")
var divided = document.getElementById("divided")
var moduls = document.getElementById("moduls")

var clean = document.getElementById("clean")
var clean = document.getElementById("clean")
var clean = document.getElementById("clean")
var clean = document.getElementById("clean")
var clean = document.getElementById("clean")
var clean = document.getElementById("clean")

function allclr() {
    input.value = "0";
}

function dis(val) {
    if (input.value == 0) {
        input.value = val;
    } else {
        input.value += val;
    }
}

function solve() {
    var x = input.value;
    var y = eval(x);
    input.value = y;
}

function clr() {
    if (input.value == 0) {
        input.value = val;
    } else {
        var str = input.value;
        var newsrt = str.substring(0, str.lengtn - 1);
        if (newstr == "") {
            input.value = 0;
        } else {
            input.value = newstr;
        }
    }
}