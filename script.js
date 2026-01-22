let nextBtn = document.querySelector('#next');
let prevBtn = document.querySelector('#prev');
let items = document.querySelectorAll('.list .item');
let dots = document.querySelectorAll('.indicators .dot');
let numberDisplay = document.querySelector('.indicators .numbers');

let active = 0;
let totalItems = items.length;

nextBtn.onclick = () => {
    active = active + 1 >= totalItems ? 0 : active + 1;
    updateCarousel();
}

prevBtn.onclick = () => {
    active = active - 1 < 0 ? totalItems - 1 : active - 1;
    updateCarousel();
}

function updateCarousel() {
    let oldItemActive = document.querySelector('.item.active');
    if (oldItemActive) oldItemActive.classList.remove('active');

    items[active].classList.add('active');

    let oldDotActive = document.querySelector('.dot.active');
    if (oldDotActive) oldDotActive.classList.remove('active');
    dots[active].classList.add('active');

    numberDisplay.innerText = String(active + 1).padStart(2, '0');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => { nextBtn.click() }, 5000);
}

let refreshInterval = setInterval(() => {
    nextBtn.click();
}, 5000);
