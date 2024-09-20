const nav = document.querySelector("nav");
const listItems = document.querySelectorAll("nav #menus li");

window.onscroll = () => {
  let yaxis = window.scrollY;
  if (yaxis >= 100) {
    nav.style.boxShadow = "0 2px 10px 0px black";
    nav.style.transitionDuration = "200ms";
  } else {
    nav.style.boxShadow = "none";
  }
  console.log(yaxis);
};

console.log(listItems);

listItems.forEach((el) => {
  el.addEventListener("click", () => {
    for (let i = 0; i < listItems.length; i++) {
      listItems[i].classList.remove("focus");
    }
    el.classList.add("focus");
  });
});
