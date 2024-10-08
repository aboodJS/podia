const nav = document.querySelector("nav");
const listItems = document.querySelectorAll("nav #menus li");
const subMenus = document.querySelectorAll(".sub-menu");
const subDivs = document.getElementsByClassName(".sub-menu div");

window.onscroll = () => {
  let yaxis = window.scrollY;
  if (yaxis >= 100) {
    nav.style.boxShadow = "0 2px 10px 0px black";
  } else {
    nav.style.boxShadow = "none";
  }
  console.log(yaxis);
};

listItems.forEach((el) => {
  el.addEventListener("click", () => {
    el;
  });
});
