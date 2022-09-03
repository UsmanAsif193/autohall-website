// // Carousel
// const CarouselContainer = document.querySelectorAll("_2zQnf");
// console.log(CarouselContainer);
// // _3qDGo;

// // for (let index = 0; index < CarouselContainer.length; index++) {
// //   const element = CarouselContainer[index];
// //   if(parent.)
// // }

// // const slides = document.querySelectorAll(".slide");

// // loop through slides and set each slides translateX property to index * 100%
// CarouselContainer.forEach((slide, indx) => {
//   console.log(slide, "hello");
//   slide.style.transform = `translateX(${indx * 100}%)`;
// });

// let curSlide = 0;

// // select next slide button
// const nextSlide = document.querySelector("._3mewk");

// // add event listener and next slide functionality
// nextSlide.addEventListener("click", function () {
//   curSlide++;
//   console.log("first");

//   CarouselContainer.forEach((slide, indx) => {
//     console.log(slide);
//     slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
//   });
// });

"use strict";
// Select all slides
const slides = document.querySelectorAll("._3qDGo");
const currentImageSpan = document.querySelector("._3iRvY");
const currentImageDiv = currentImageSpan.querySelector("._1KEYJ");

// loop through slides and set each slides translateX
slides.forEach((slide, indx) => {
  slide.style.transition = "all 0.5s";
  slide.style.transform = `translateX(${indx * 100}%)`;
});

// select next slide button
const nextSlide = document.querySelector(".btn-next");

// current slide counter
let curSlide = 0;
// maximum number of slides
let maxSlide = slides.length - 1;

// add event listener and navigation functionality
nextSlide.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  currentImageDiv.innerHTML = curSlide + 1 + "/" + (maxSlide + 1);

  //   move slide by -100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

// select next slide button
const prevSlide = document.querySelector(".btn-prev");
prevSlide.style.transform = "rotate(180deg)";
// add event listener and navigation functionality
prevSlide.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }
  currentImageDiv.innerHTML = curSlide + 1 + "/" + (maxSlide + 1);

  //   move slide by 100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});
