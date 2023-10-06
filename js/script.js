const images = document.querySelectorAll(".image-holder img");
const btns = document.querySelectorAll(".btn-radio button");
const imageHolder = document.querySelector(".image-holder");
const next = document.querySelector(".next");
const pre = document.querySelector(".pre");

let slide = 0;

let manualChange = function (slideN) {
  btns.forEach((bt) => {
    bt.classList.remove("active");
  });
  btns[slideN].classList.add("active");
  imageHolder.style.transition = "all 0.7s ease-out";
  imageHolder.style.transform = `translateX(-${slideN * 100}%)`;
};
btns.forEach((btn, i) => {
  btn.addEventListener("click", (e) => {
    manualChange(i);
    slide = i;
  });
});
next.addEventListener("click", (e) => {
  if (slide == 2) {
    slide = 0;
    manualChange(slide);
  } else if (slide < 2) {
    slide++;
    manualChange(slide);
  }
});
pre.addEventListener("click", (e) => {
  if (slide == 0) {
    slide = 2;
    manualChange(slide);
  } else if (slide > 0) {
    slide--;
    manualChange(slide);
  }
});
function autoSliding() {
  deleteInterval = setInterval(timer, 3000);
  function timer() {
    if (slide == 2) {
      slide = 0;
      manualChange(slide);
    } else if (slide < 2) {
      slide++;
      manualChange(slide);
    }
  }
}
autoSliding();
