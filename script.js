var navLinks = document.getElementById("navLinks");
function showMenu()
{
    navLinks.style.right = "0";
}
function hideMenu()
{
    navLinks.style.right = "-200px";
}
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("college");
  var dots = document.getElementsByClassName("demo");
  
  if (n > slides.length)
  {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}
function myMap()
 {
  var mapProp = {
    center: new google.maps.LatLng(20.295789712650425, 85.82384761330974),
    zoom: 10,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}