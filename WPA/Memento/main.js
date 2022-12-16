
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

function Sub(title, description, date, price, when) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.price = price;
    this.when = when;
  }


function add() {
    //create a new Subscription object
    const sub1 = new Sub(document.getElementById('title-input').value,
    document.getElementById('description-input').value,
    document.getElementById('date-input').value,
    document.getElementById('price-input').value,
    getWhen())

    //check if input is empty
    if(sub1.title !== "" && sub1.date !== "" && sub1.price !== ""){
        localStorage.setItem('sub1', JSON.stringify(sub1));
        document.getElementById('title-input').value = "";
        document.getElementById('description-input').value = "";
        document.getElementById('date-input').value = "";
        document.getElementById('price-input').value = "";
        month()
        //window.location = "home.html";
    }
}

