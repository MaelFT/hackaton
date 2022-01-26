window.addEventListener("scroll", () => {
  console.log(window.scrollY);

  if (window.scrollY < 200) {
    nav.style.top = "0";
  } else {
    nav.style.top = "-600px";
  }
});

const sideBar = document.querySelector("#side-bar");
const content = document.querySelector(".content");

btn.addEventListener("click", () => {
  sideBar.classList.toggle("active");
});

content.addEventListener("click", () => {
  sideBar.classList.remove("active");
});
