// var wrapper = document.querySelector(".sliders");
// var carousel = document.querySelector(".slide");
var images = document.querySelectorAll("img");
// var btn = document.querySelectorAll("span");
var prev = document.querySelector("#prev");
var next = document.querySelector("#next");

images.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});
let counter = 0;

var slideImage = () => {
  images.forEach((e) => {
    e.style.transform = `translateX(-${counter * 100}%)`;
  });
};

var prev = () => {
  if (counter > 0) {
    counter--;
    slideImage();
    console.log(counter);
  }
};
var next = () => {
  if (counter <= images.length - 2) {
    counter++;
    slideImage();
    console.log(counter);
  }
};
