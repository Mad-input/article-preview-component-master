const btnShare = document.getElementById('btnShare');
const socialSection = document.querySelector('.social');

btnShare.addEventListener('click', ()=> {
  socialSection.classList.toggle('show-menu')
})