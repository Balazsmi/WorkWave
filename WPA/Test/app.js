function show(id) {
  var contents = document.getElementsByClassName("content");
  for (var i = 0; i < contents.length; i++) {
    if (contents[i].getAttribute("id") === id) {
      contents[i].classList.add("active");
    } else {
      contents[i].classList.remove("active");
    }
  }
}
