function navFunction(el) {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
    el.innerHTML = "  <i class='fa fa-times'></i>";
  } else {
    x.className = "topnav";
    el.innerHTML = "  <i class='fa fa-bars'></i>";

  }
}
