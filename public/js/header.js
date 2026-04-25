const menuToggle = document.getElementById('menuToggle');
const rightMenu = document.querySelector('.right');

menuToggle.addEventListener('click', () => {
  rightMenu.classList.toggle('active');
});

console.log("Injected")