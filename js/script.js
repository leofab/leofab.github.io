// Smooth scrolling animation

const about = document.querySelector('#sobre');
const aboutBtns = document.querySelectorAll('.about');


aboutBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    about.scrollIntoView({
      behavior: 'smooth'
    });
    headerEl.classList.toggle("nav-open");
  })
});

///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);