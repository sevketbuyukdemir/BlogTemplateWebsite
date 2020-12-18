/* Set other page link */
function pageRedirect(pageLink) {
  window.location.replace(pageLink);
}

/* Set the width of the side navigation to 250px */
function openNavAbout() {
    closeNavs();
    document.getElementById("mySidenavAbout").style.width = "250px";
}

/* Set the width of the side navigation to 250px */
function openNavActivityFields() {
    closeNavs();
    document.getElementById("mySidenavActivityFields").style.width = "250px";
}

/* Set the width of the side navigation to 250px */
function openNavMediaCenter() {
    closeNavs();
    document.getElementById("mySidenavMediaCenter").style.width = "250px";
}

/* Set the width of the side navigation to 250px */
function openNavContact() {
  closeNavs();
  document.getElementById("mySidenavContact").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNavs() {
    document.getElementById("mySidenavAbout").style.width = "0";
    document.getElementById("mySidenavActivityFields").style.width = "0";
    document.getElementById("mySidenavMediaCenter").style.width = "0";
    document.getElementById("mySidenavContact").style.width = "0";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// 1000 ms = 1 second. Every three seconds slider display next slide.
setInterval(function(){ 
    currentSlide(slideIndex);
    slideIndex++;
 }, 3000);

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
