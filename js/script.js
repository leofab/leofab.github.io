// Smooth scrolling animation

const about = document.querySelector('#sobre');
const aboutBtns = document.querySelectorAll('.about');


aboutBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    about.scrollIntoView({
      behavior: 'smooth'
    })
  })
});