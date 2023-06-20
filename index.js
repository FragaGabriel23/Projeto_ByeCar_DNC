// Carousel
const slider = document.querySelectorAll('.card');
const btnPrev = document.getElementById('prev');
const btnNext = document.getElementById('next');

let currentSlide = 0;
var modal = document.getElementById(`myModal${currentSlide}`)

const hideSlider = () => {
    slider.forEach(item => item.classList.remove('on'))
}

const showSlider = () => {
    slider[currentSlide].classList.add('on')
}

const nextSlider = () => {
    hideSlider()
    if (currentSlide === slider.length - 1) {
        currentSlide = 0
    } else {
        currentSlide++
    }
    showSlider()
    modal = document.getElementById(`myModal${currentSlide}`);
}

const prevSlider = () => {
    hideSlider()
    if (currentSlide === 0) {
        currentSlide = slider.length - 1
    } else {
        currentSlide--
    }
    showSlider()
    modal = document.getElementById(`myModal${currentSlide}`);
}

btnNext.addEventListener('click', () => { nextSlider() })
btnPrev.addEventListener('click', () => { prevSlider() })


// Modal
var btn = document.getElementById("myBtn");

btn.onclick = () => {
    modal.style.display = "block";
}

var fechar = () => {
    modal.style.display = "none";
}

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}