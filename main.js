const forward = document.querySelector(".forward-btn")
const back = document.querySelector(".back-btn")
const slides = document.querySelectorAll(".slide")

let index = 0
function nextSlide(){
    index++
    if(index > slides.length -1){
        index = 0;
    }
    slides.forEach((slide) => {
        slide.style.display='none';
    })
    slides[index].style.display = 'flex'
}

function prevSlide(){
    index--
    if(index < 0){
        index = slides.length -1;
    }
    slides.forEach((slide) => {
        slide.style.display='none';
    })
    slides[index].style.display = 'flex'
}

forward.addEventListener('click', nextSlide)
back.addEventListener('click', prevSlide)