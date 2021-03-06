// cube
let y = 0;
let x = 0;
let z = 0;
const cube = document.querySelector(".cube");

document
  .querySelector(".top-x-control")
  .addEventListener("click", function (e) {
    e.preventDefault();
    x += 20;
    cube.style.transform = `rotateX(${x}deg)`;
  });
document
  .querySelector(".bottom-x-control")
  .addEventListener("click", function (e) {
    e.preventDefault();
    x -= 20;
    cube.style.transform = `rotateX(${x}deg)`;
  });

document
  .querySelector(".left-y-control")
  .addEventListener("click", function (e) {
    e.preventDefault();
    x -= 20;

    cube.style.transform = `rotateY(${x}deg)rotateY(${y})`;
  });

const playPause = () => {
  setInterval(() => {
    y++;
    cube.style.transform = `rotateY(${y}deg)`;
  }, 100);
};
// playPause();

// end of cube
// slidshow

const slideshowDivs = () => {
  for (let i = 1; i <= 5; i++) {
    const div = document.createElement("div");
    div.style.backgroundImage = `url(images/slideshow/section-1-bg-${i}.jpg)`;
    i === 1 && div.classList.add("change");
    document.querySelector(".slideshow").appendChild(div);
  }
};

// end of slideshow

slideshowDivs();

const divs = document.querySelectorAll(".slideshow div");
let a = 1;
const slidshow = () => {
  setInterval(() => {
    a++;
    const div = document.querySelector(".slideshow .change");
    div.classList.remove("change");
    if (a < divs.length) {
      div.nextElementSibling.classList.add("change");
    } else {
      divs[0].classList.add("change");
      a = 1;
    }
  }, 10000);
};

slidshow();
