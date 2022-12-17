
function list() {

}

function home() {

}

function plus() {
    
}



var pathname = window.location.pathname;
switch(pathname) {
    case "/WPA/Memento/home.html" :
        document.getElementById("indicator-home").style.visibility = "visible";
        break;
    case "/WPA/Memento/list.html" :
        document.getElementById("indicator-list").style.visibility = "visible";
        break;
    case "/WPA/Memento/plus.html" :
        document.getElementById("indicator-plus").style.visibility = "visible";
        break;

}

let when = 'monthly';

function week() {
    when = 'weekly';
     document.getElementById('week').style.color = 'white';
     document.getElementById('month').style.color = 'gray';
     document.getElementById('year').style.color = 'gray';
     document.getElementById('week').style.background =  'rgba(51, 51, 51, 0.486)';
     document.getElementById('month').style.background = 'transparent';
     document.getElementById('year').style.background =  'transparent';

}
function month() {
    when = 'monthly';
    document.getElementById('month').style.color = 'white';
    document.getElementById('week').style.color = 'gray';
    document.getElementById('year').style.color = 'gray';
    document.getElementById('month').style.background = 'rgba(51, 51, 51, 0.486)';
    document.getElementById('week').style.background =  'transparent';
    document.getElementById('year').style.background =  'transparent';
}
function year() {
    when = 'yearly';
     document.getElementById('year').style.color = 'white';
     document.getElementById('month').style.color = 'gray';
     document.getElementById('week').style.color = 'gray';
     document.getElementById('year').style.background =  'rgba(51, 51, 51, 0.486)';
     document.getElementById('week').style.background =  'transparent';
     document.getElementById('month').style.background = 'transparent';
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

document.getElementById('list-sub-1').innerHTML  = "sub1.title";
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

