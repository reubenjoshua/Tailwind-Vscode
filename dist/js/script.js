const toggleBtn = document.querySelector('.burgir');
const drop = document.querySelector('.options__nav');

toggleBtn.addEventListener('click', () =>{
    drop.classList.toggle('h-[24.8rem]');
});