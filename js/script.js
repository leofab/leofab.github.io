// Smooth scrolling animation

const about = document.querySelector('#sobre');
const aboutBtn = document.querySelector('.about');
const aboutBtn2 = document.querySelector('.about2');

aboutBtn.addEventListener('click', (e) => {
  e.preventDefault()
  about.scrollIntoView({
    behavior: "smooth"
  })
})
aboutBtn2.addEventListener('click', (e) => {
  e.preventDefault()
  about.scrollIntoView({
    behavior: "smooth"
  })
})