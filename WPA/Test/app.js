const listIcon = document.getElementById("list-icon");
const homeIcon = document.getElementById("home-icon");
const createIcon = document.getElementById("create-icon");

const listContent = document.getElementById("list");
const homeContent = document.getElementById("home");
const createContent = document.getElementById("create");

homeIcon.classList.add("active");
homeContent.classList.add("active");

listIcon.addEventListener("click", function() {
  homeIcon.classList.remove("active");
  createIcon.classList.remove("active");
  listIcon.classList.add("active");
  
  homeContent.classList.remove("active");
  createContent.classList.remove("active");
  listContent.classList.add("active");
});

homeIcon.addEventListener("click", function() {
  listIcon.classList.remove("active");
  createIcon.classList.remove("active");
  homeIcon.classList.add("active");
  
  listContent.classList.remove("active");
  createContent.classList.remove("active");
  homeContent.classList.add("active");
});

createIcon.addEventListener("click", function() {
  listIcon.classList.remove("active");
  homeIcon.classList.remove("active");
  createIcon.classList.add("active");
  
  listContent.classList.remove("active");
  homeContent.classList.remove("active");
  createContent.classList.add("active");
});


function showHomeContent() {
  var homeContent = document.getElementById("homeContent");
  homeContent.style.display = "block";
}

showHomeContent();