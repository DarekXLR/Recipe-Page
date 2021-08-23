const line1 = document.querySelector('.pos1')
const line2 = document.querySelector('.pos2')
const line3 = document.querySelector('.pos3')
const line4 = document.querySelector('.pos4')
const burger = document.querySelector('.burger')
burger.addEventListener("click", turn)

const turn = () => {
    burger.classList.toggle('active');
    line1.classList.toggle('active');
    line4.classList.toggle('active');
    line2.classList.toggle('active');
    line3.classList.toggle('active');
}