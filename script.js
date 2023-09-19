// get the slider container
const slider = document.querySelector(".items");

let isDown = false;
let pointA;
let scrollLeft;


function start(e) {
  isDown = true;
  e.preventDefault();

  pointA = e.pageX || e.touches[0].pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
}

function move(e) {
  if (!isDown) return;

  e.preventDefault();
  const pointB = e.pageX || e.touches[0].pageX - slider.offsetLeft;
  const distance = (pointB - pointA);
  slider.scrollLeft = (scrollLeft - distance);
}

function end() {
  isDown = false;
}

(() => {
  // event when the user press the mouse button over an element;
  slider.addEventListener("mousedown", start);

  // event when the user touch with the finger over an element;
  slider.addEventListener("touchstart", start);

  // event when the mouse move over an element;
  slider.addEventListener("mousemove", move);

  // event when the user touch and move the element;
  slider.addEventListener("touchmove", move);

  // event when the mouse pointer moves out of an element;
  slider.addEventListener("mouseleave", end);

  // event when the mouse button is released over an element;
  slider.addEventListener("mouseup", end);

  // event when the user removes the finger from an element;
  slider.addEventListener("touchend", end);
})();
