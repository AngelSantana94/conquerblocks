import '../sass/main.scss'
import { setupCounter } from './counter.js'



const cta = document.querySelector('.master-footer-cta');
const footer = document.querySelector('footer');

function updateCTA() {
  const footerTop = footer.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (footerTop <= windowHeight) {
    // Ya está tocando el footer → fijar posición antes de que lo tape
    cta.style.position = 'absolute';
    cta.style.bottom = `${footer.offsetHeight}px`;
  } else {
    // Aún hay espacio → seguir pegado abajo
    cta.style.position = 'fixed';
    cta.style.bottom = '0';
  }
}


    document.addEventListener("DOMContentLoaded", () => {
      const cards = document.querySelectorAll(".course-card");
  
      cards.forEach((card) => {
        const link = card.querySelector(".course-card__link");
        if (link) {
          card.style.cursor = "pointer";
          card.addEventListener("click", () => {
            window.location.href = link.href;
          });
        }
      });
    });

    document.addEventListener("DOMContentLoaded", () => {
    const principalNav = document.querySelector(".principal-nav");
    const hamburger    = document.querySelector(".hamburger");
    const toggles      = document.querySelectorAll(".nav__toggle");
  
    hamburger.addEventListener("click", () => {
      principalNav.classList.toggle("is-open"); // abre/cierra panel
    });
  
    toggles.forEach(btn => {
      btn.addEventListener("click", () => {
        btn.closest(".nav__item").classList.toggle("nav__item--open");
      });
    });
  
    // (opcional) cerrar al hacer clic fuera
    document.addEventListener("click", (e) => {
      if (!principalNav.contains(e.target) && principalNav.classList.contains("is-open")) {
        principalNav.classList.remove("is-open");
      }
    });
  });

window.addEventListener('scroll', updateCTA);
window.addEventListener('resize', updateCTA);

updateCTA(); // ejecutar al inicio










