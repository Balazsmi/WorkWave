
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

let when = 'monthly';

function week() {
    when = 'weekly';
     document.getElementById('week').style.backgroundColor  = '#e9e9e9';
    document.getElementById('month').style.backgroundColor = 'transparent';
     document.getElementById('year').style.backgroundColor  = 'transparent';
}
function month() {
    when = 'monthly';
    document.getElementById('month').style.backgroundColor = '#e9e9e9';
     document.getElementById('week').style.backgroundColor  = 'transparent';
     document.getElementById('year').style.backgroundColor  = 'transparent';
}
function year() {
    when = 'yearly';
     document.getElementById('year').style.backgroundColor  = '#e9e9e9';
     document.getElementById('week').style.backgroundColor  = 'transparent';
    document.getElementById('month').style.backgroundColor = 'transparent';
}
month();


function getWhen() {
    return when;
}




localStorage.clear();
function add() {
    let y = getWhen();
    let sub1 = {
        title: document.getElementById('title-input').value,
        description: document.getElementById('description-input').value,
        date: document.getElementById('date-input').value,
        price: document.getElementById('price-input').value,
        when: getWhen()
    }
    localStorage.setItem('sub1', JSON.stringify(sub1));

}

