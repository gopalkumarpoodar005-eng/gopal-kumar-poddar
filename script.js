let slider = document.querySelector(".hero-slider");
let slides = document.querySelectorAll(".hero-slide");
let rightArrow = document.querySelector(".hero-arrow.right");
let leftArrow = document.querySelector(".hero-arrow.left");

let images = [
    "images/hero_image.jpg",
    "images/hero_image1.jpg",
    "images/hero_image2.jpg",
    "images/hero_image3.jpg",
    "images/hero_image4.jpg",
    "images/hero_image5.jpg",
     "images/hero_image6.jpg",
    "images/hero_image57.jpg"
];

let index = 0;

// initial images
slides[0].style.backgroundImage = `url(${images[0]})`;
slides[1].style.backgroundImage = `url(${images[1]})`;

function slideNext() {
    slider.style.transform = "translateX(-50%)";

    setTimeout(() => {
        index = (index + 1) % images.length;
        slides[0].style.backgroundImage = `url(${images[index]})`;
        slides[1].style.backgroundImage =
            `url(${images[(index + 1) % images.length]})`;

        slider.style.transition = "none";
        slider.style.transform = "translateX(0)";

        slider.offsetHeight; // force reflow
        slider.style.transition = "transform 0.6s ease-in-out";
    }, 600);
}

// arrows
rightArrow.addEventListener("click", slideNext);

leftArrow.addEventListener("click", () => {
    index = (index - 1 + images.length) % images.length;
    slides[0].style.backgroundImage = `url(${images[index]})`;
    slides[1].style.backgroundImage =
        `url(${images[(index + 1) % images.length]})`;
});

// auto slide
setInterval(slideNext, 2500);
