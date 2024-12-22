const boxes = document.querySelectorAll('.content-box'); // tämä hakee kaikki elementit joissa content-box luokat ja tallentaa boxes-muuttujaan
const observer = new IntersectionObserver((entries) => { // tämä ns havaitsee, että milloin elementti tulee näkyville
    entries.forEach(entry => { 
        if (entry.isIntersecting) { // elementin ollessa näkyvillä tulee appear luokka
            entry.target.classList.add('appear'); // appear luokka css-animaation aktivointia varten
        }
    });
});

    boxes.forEach(box => {
        observer.observe(box); // tämä käy jokaisen content-boxin läpi
    });

const navLinks = document.querySelectorAll('.navbar a.nav-link');

navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.classList.add('hover'); // lisää hover luokka hiiren ollessa linkin päällä
    });

    link.addEventListener('mouseleave', () => {
        link.classList.remove('hover'); // poistaa hover luokka, kun hiiri poistuu linkistä
    });
});

const navbarToggler = document.querySelector('.navbar-toggler');
const navbarNav = document.getElementById('navbarNav');

navbarToggler.addEventListener('click', () => {
    navbarToggler.setAttribute('aria-expanded', navbarNav.classList.toggle('show'));
});


