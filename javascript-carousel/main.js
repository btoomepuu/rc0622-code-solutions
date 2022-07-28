const slider = document.querySelector('.slider');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const slides = document.querySelectorAll('.slide');
const slideIcons = document.querySelectorAll('.slide-icon');
const numberOfSlides = slides.length;
var slideNumber = 0;

// image slider next button
nextBtn.addEventListener('click', () => {
  slides.forEach(slide => {
    slide.classList.remove('active');
  });

  slideIcons.forEach(slideIcon => {
    slideIcon.classList.remove('active');
  });

  slideNumber++;

  if (slideNumber > (numberOfSlides - 1)) {
    slideNumber = 0;
  }

  slideIcons[slideNumber].classList.add('active');
  slides[slideNumber].classList.add('active');
});

// image slider previous
prevBtn.addEventListener('click', () => {
  slides.forEach(slide => {
    slide.classList.remove('active');
  });

  slideIcons.forEach(slideIcon => {
    slideIcon.classList.remove('active');
  });

  slideNumber--;

  if (slideNumber < 0) {
    slideNumber = numberOfSlides - 1;
  }

  slideIcons[slideNumber].classList.add('active');
  slides[slideNumber].classList.add('active');

});

// image slider auto play
var playSlider;

var repeater = () => {
  playSlider = setInterval(function () {
    slides.forEach(slide => {
      slide.classList.remove('active');
    });

    slideIcons.forEach(slideIcon => {
      slideIcon.classList.remove('active');
    });

    slideNumber++;

    if (slideNumber > (numberOfSlides - 1)) {
      slideNumber = 0;
    }

    slideIcons[slideNumber].classList.add('active');
    slides[slideNumber].classList.add('active');
  }, 3000);
};
repeater();

// stop image slider auto play on mouse over

slider.addEventListener('mouseover', () => {
  clearInterval(playSlider);
});

// start image slider autoplay on mouse out
slider.addEventListener('mouseout', () => {
  repeater();
});
