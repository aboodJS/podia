const lis = document.querySelectorAll("#options > li");
const dropOpts = document.querySelectorAll(".dropdown-opt");
const dropmenus = document.querySelectorAll(".dropmenu");
const nav = document.querySelector("nav");

lis.forEach((elem) => {
  elem.addEventListener("click", () => {
    elem.classList.toggle("focus");
  });
});

dropOpts.forEach((elem, i) => {
  elem.addEventListener("click", () => {
    dropmenus[i].classList.toggle("show");
  });
});

window.onscroll = () => {
  let scrollFromTop = window.scrollY;
  console.log(scrollFromTop);
  if (scrollFromTop > 50) {
    nav.style.boxShadow = `0 0 2px 2px black`;
    nav.style.transitionDuration = "150ms";
  } else {
    nav.style.boxShadow = ``;
  }
};
