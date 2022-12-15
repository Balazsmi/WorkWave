
function list() {

}

function home() {

}

function plus() {
    
}



var pathname = window.location.pathname;
switch(pathname) {
    case "/WPA/Memento/home.html" :
        document.getElementById("home").style.color = "var(--font)";
        break;
    case "/WPA/Memento/list.html" :
        document.getElementById("list").style.color = "var(--font)";
        break;
    case "/WPA/Memento/plus.html" :
        document.getElementById("plus").style.color = "var(--font)";
        break;

}


function week() {
    document.getElementsByClassName("week").style.background  = "gray";
    document.getElementsByClassName("month").style.background  = "transparent";
    document.getElementsByClassName("year").style.background  = "transparent";
}
function month() {
    document.getElementsByClassName("month").style.background  = "gray";
    document.getElementsByClassName("week").style.background  = "transparent";
    document.getElementsByClassName("year").style.background  = "transparent";
}
function year() {
    document.getElementsByClassName("year").style.background  = "gray";
    document.getElementsByClassName("week").style.background  = "transparent";
    document.getElementsByClassName("month").style.background  = "transparent";
}