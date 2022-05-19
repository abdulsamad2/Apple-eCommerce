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
const slideshow = () => {
  const div = document.querySelector(".change");

  setInterval(() => {
    a++;
    div.classList.remove("change");

    if (a < divs.length) {
      div.nextElementSibling.classList.add("change");
    } else {
      divs[0].classList.add("change");
      a = 1;
    }
  }, 1000);
};

slideshow();
