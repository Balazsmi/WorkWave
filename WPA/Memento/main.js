
function list() {
    document.getElementById("indicator-list").style.visibility = "visible";
    document.getElementById("indicator-home").style.visibility = "hidden";
    document.getElementById("indicator-plus").style.visibility = "hidden";
    document.getElementById("plus-div").style.visibility = "hidden";
    document.getElementById("home-div").style.visibility = "hidden";
    document.getElementById("list-div").style.visibility = "visible";
}

function home() {
    document.getElementById("indicator-home").style.visibility = "visible";
    document.getElementById("indicator-plus").style.visibility = "hidden";
    document.getElementById("indicator-list").style.visibility = "hidden";
    document.getElementById("plus-div").style.visibility = "hidden";
    document.getElementById("home-div").style.visibility = "visible";
    document.getElementById("list-div").style.visibility = "hidden";
}

function plus() {
    month()
    document.getElementById("indicator-plus").style.visibility = "visible";
    document.getElementById("indicator-list").style.visibility = "hidden";
    document.getElementById("indicator-home").style.visibility = "hidden";
    document.getElementById("plus-div").style.visibility = "visible";
    document.getElementById("home-div").style.visibility = "hidden";
    document.getElementById("list-div").style.visibility = "hidden";
}


list()



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

function clear() {
    document.getElementById('title-input').value = "";
    document.getElementById('description-input').value = "";
    document.getElementById('date-input').value = "";
    document.getElementById('price-input').value = "";
}

function add() {

    let sub1 = new Sub(
        document.getElementById('title-input').value,
        document.getElementById('description-input').value,
        document.getElementById('date-input').value,
        document.getElementById('price-input').value,
        getWhen())

    //check if input is empty
    if(sub1.title !== "" && sub1.date !== "" && sub1.price !== ""){
        
        localStorage.setItem('sub1', JSON.stringify(sub1));
        document.getElementById("list-sub-1").innerHTML = sub1.title;
        document.getElementById("price-tag").innerHTML = sub1.price + ' $';
        clear();

    }
}

