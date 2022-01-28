window.addEventListener("scroll", () => {
  if (window.scrollY < 200) {
    nav.style.top = "0";
  } else {
    nav.style.top = "-1600px";
  }
});

const sideBar = document.querySelector("#sideBar");
const closeBtn = document.querySelector(".outBtn");

btn.addEventListener("click", () => {
  sideBar.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
  sideBar.classList.remove("active");
});
