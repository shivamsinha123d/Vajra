// ===========================================
// Vajra Community EV Charging Platform
// app.js
// ===========================================

// Wait for page to load
document.addEventListener("DOMContentLoaded", () => {

    navbarEffect();
    smoothScroll();
    searchBox();
    revealAnimation();
    bookingCalculator();
    loginValidation();
    registerValidation();
    hostFormValidation();

});

// ===========================================
// Navbar Shadow on Scroll
// ===========================================

function navbarEffect(){

    const navbar = document.querySelector(".navbar");

    if(!navbar) return;

    window.addEventListener("scroll",()=>{

        if(window.scrollY > 50){

            navbar.style.boxShadow="0 12px 30px rgba(0,0,0,.12)";
            navbar.style.background="rgba(255,255,255,.96)";

        }
        else{

            navbar.style.boxShadow="none";
            navbar.style.background="rgba(255,255,255,.92)";

        }

    });

}

// ===========================================
// Smooth Scroll
// ===========================================

function smoothScroll(){

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

const target=document.querySelector(this.getAttribute("href"));

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

}

// ===========================================
// Search Button
// ===========================================

function searchBox(){

const searchInput=document.querySelector(".search-box input");
const searchButton=document.querySelector(".search-box button");

if(!searchInput || !searchButton) return;

searchButton.addEventListener("click",()=>{

const value=searchInput.value.trim();

if(value===""){

alert("Please enter a city or area.");

return;

}

window.location.href="find.html";

});

searchInput.addEventListener("keypress",(e)=>{

if(e.key==="Enter"){

e.preventDefault();

searchButton.click();

}

});

}

// ===========================================
// Scroll Animation
// ===========================================

function revealAnimation(){

const elements=document.querySelectorAll(".feature,.stat,.step,.card");

if(elements.length===0) return;

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0px)";

}

});

},{
threshold:0.15
});

elements.forEach(el=>{

el.style.opacity="0";
el.style.transform="translateY(40px)";
el.style.transition=".6s ease";

observer.observe(el);

});

}

// ===========================================
// Booking Price Calculator
// ===========================================

function bookingCalculator(){

const duration=document.querySelector("select");
const total=document.querySelector(".total span:last-child");

if(!duration || !total) return;

duration.addEventListener("change",()=>{

let price=280;

switch(duration.selectedIndex){

case 0:
price=140;
break;

case 1:
price=280;
break;

case 2:
price=560;
break;

case 3:
price=840;
break;

}

total.innerHTML="₹"+price;

});

}

// ===========================================
// Login Validation
// ===========================================

function loginValidation(){

const form=document.querySelector(".login-box form");

if(!form) return;

form.addEventListener("submit",(e)=>{

e.preventDefault();

const email=form.querySelector('input[type="email"]').value;
const password=form.querySelector('input[type="password"]').value;

if(email==="" || password===""){

alert("Please fill all fields.");

return;

}

alert("Login Successful! (Firebase integration pending)");

window.location.href="dashboard.html";

});

}

// ===========================================
// Register Validation
// ===========================================

function registerValidation(){

const register=document.querySelector(".register-box form");

if(!register) return;

register.addEventListener("submit",(e)=>{

e.preventDefault();

const passwords=register.querySelectorAll('input[type="password"]');

if(passwords[0].value!==passwords[1].value){

alert("Passwords do not match.");

return;

}

alert("Account Created Successfully!");

window.location.href="dashboard.html";

});

}

// ===========================================
// Host Form
// ===========================================

function hostFormValidation(){

const form=document.querySelector(".form-card form");

if(!form) return;

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("🎉 Charger Submitted Successfully!\n\nOur team will verify your charger before publishing.");

window.location.href="dashboard.html";

});

}

// ===========================================
// Reserve Buttons
// ===========================================

document.querySelectorAll(".reserve").forEach(btn=>{

btn.addEventListener("click",()=>{

localStorage.setItem("selectedCharger","22kW Fast Charger");

});

});

// ===========================================
// Book Now Button
// ===========================================

const book=document.querySelector(".book-btn");

if(book){

book.addEventListener("click",()=>{

alert("Booking Confirmed!\n\nPayment integration coming soon.");

});

}

// ===========================================
// Fake Earnings Counter
// ===========================================

const earning=document.querySelector(".earning h2");

if(earning){

let current=0;

const target=12800;

const interval=setInterval(()=>{

current+=200;

earning.innerHTML="₹"+current.toLocaleString()+" / Month*";

if(current>=target){

clearInterval(interval);

earning.innerHTML="₹12,800 / Month*";

}

},20);

}

// ===========================================
// Dark Mode (Future)
// ===========================================

function toggleDarkMode(){

document.body.classList.toggle("dark");

}

// ===========================================
// Console Message
// ===========================================

console.log(`
⚡ VAJRA EV CHARGING PLATFORM

Community Powered EV Charging

Frontend MVP Complete

Next Step:
✔ Firebase Authentication
✔ Firestore Database
✔ Google Maps API
✔ Razorpay Payments
✔ Real Booking System

Built with ❤️
`);