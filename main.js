var m = document.getElementById("mt");

m.addEventListener("click", function() {
  document.body.classList.toggle("lite");

  if (document.body.classList.contains("lite"))
  {
    m.src = "img/sun.png"
  }
  else {
    m.src = "img/moon.png";
  }

})