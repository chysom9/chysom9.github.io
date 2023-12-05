let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
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
  captionText.innerHTML = dots[slideIndex-1].alt;
}

function showMessage(){
  let first = document.getElementById("First_Name").value
  let last = document.getElementById("Last_Name").value
  let email = document.getElementById("email").value
  let field = document.getElementById("field")
  field.innerHTML = ""
  let response = document.createElement('p');
  response.innerText = `Thank you for the Message ${first} ${last}, I will Make Sure to get to you through your email: ${email}`
  response.className = "response"
  field.append(response);
  
  


  
}