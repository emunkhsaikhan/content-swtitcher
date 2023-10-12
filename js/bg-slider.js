const slides = document.querySelectorAll('.bgSlide');
var counter = 0;
slides.forEach(
    (bgSlide, index) => {
        bgSlide.style.left = `${index * 100}%`
    }
)

const goPrev = () => {
    counter--;
    slideImage();
}
const goNext = () => {
    counter++;
    slideImage();
}

const slideImage = () => {
    slides.forEach(
        (bgSlide) => {
            bgSlide.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}