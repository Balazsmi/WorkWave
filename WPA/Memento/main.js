function listPage() {
    document.getElementById("list").style.color = "var(--pink)";
    document.getElementById("list").style.scale = "2";
    document.getElementById("plus").style.color = "var(--font)";
    document.getElementById("plus").style.scale = "1.5";
    document.getElementById("home").style.color = "var(--font)";
    document.getElementById("home").style.scale = "1.5";
}


function homePage() {
    document.getElementById("home").style.color = "var(--blue)";
    document.getElementById("home").style.scale = "2";
    document.getElementById("list").style.color = "var(--font)";
    document.getElementById("list").style.scale = "1.5";
    document.getElementById("plus").style.color = "var(--font)";
    document.getElementById("plus").style.scale = "1.5";
}


function plusPage() {
    document.getElementById("plus").style.color = "var(--green)";
    document.getElementById("plus").style.scale = "2";
    document.getElementById("list").style.color = "var(--font)";
    document.getElementById("list").style.scale = "1.5";
    document.getElementById("home").style.color = "var(--font)";
    document.getElementById("home").style.scale = "1.5";
}