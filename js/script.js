let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
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

// Toggle
const navbarNav = document.querySelector ('.navbar-nav');
const hamburgerMenu = document.querySelector('#hamburger-menu');
// ketika
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

//Toggle class active search form
const searchForm = document.querySelector('.search-form'); 
const searchBox = document.querySelector('#search-box');
const searchButton = document.querySelector('#search-button');

document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
};

// Klik di luar side bar untuk hilangkan hamburger enu nav
document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
    if(!search.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }
});

document.getElementById('search-box').addEventListener('input', function() {
    let input = document.getElementById('search-box').value.toLowerCase(); 
    let cards = document.getElementsByClassName('carscard'); 
    

    for (let i = 0; i < cards.length; i++) {
        let cardTitle = cards[i].getElementsByTagName('h1')[0].textContent.toLowerCase(); 
        
        if (cardTitle.includes(input)) {
            cards[i].style.display = ""; 
        } else {
            cards[i].style.display = "none"; 
        }
    }
});