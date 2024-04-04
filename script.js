let openHam = document.querySelector('#openHam')
let closeHam = document.querySelector('#closeHam')
let navigationItems = document.querySelector('#navigation-items')

const hamburgerEvent = (navigation, close, open)  => {
    navigationItems.style.display = navigation;
    closeHam.style.display = close;
    openHam.style.display = open;
}     

openHam.addEventListener('click', () => hamburgerEvent("flex", "block", "none"));
closeHam.addEventListener('click', () => hamburgerEvent("none", "none", "block"));

// Carousell
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 8000); // Change image every 8 seconds
}


// Contact
function validate() { 
    let name = 
        document.getElementById("name").value; 
    let subject = 
        document.getElementById("subject").value; 
    let phone = 
        document.getElementById("phone").value; 
    let email = 
        document.getElementById("email").value; 
    let message = 
        document.getElementById("message").value; 
    let error_message = 
        document.getElementById("error_message"); 
  
    error_message.style.padding = "10px"; 
  
    let errors = []; 
  
    if (name.length < 5) { 
        errors.push("Please Enter a valid Name");} 
    if (subject.length < 10) { 
        errors.push("Please Enter a Correct Subject");} 
    if (isNaN(phone) || phone.length != 10) { 
        errors.push("Please Enter a valid Phone Number");} 
    if (email.indexOf("@") == -1 || email.length < 6) { 
        errors.push( 
            "Please Enter a valid Email");} 
    if (message.length <= 40) { 
        errors.push( 
            "Please Enter More Than 40 Characters");} 
  
    if (errors.length > 0) { 
        error_message.innerHTML = 
            errors.join("<br>"); 
        return false;} 
    else { 
        alert( 
            "Form Submitted Successfully!"); 
        return true;}}




