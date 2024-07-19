const lis = document.querySelectorAll("#options li");

lis.forEach((elem) => {
  elem.addEventListener("click", () => {
    elem.classList.toggle("focus");
  });
});
