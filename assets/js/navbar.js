window.addEventListener("scroll", () => {
  console.log(window.scrollY);

  if (window.scrollY < 200) {
    nav.style.top = "0";
  } else {
    nav.style.top = "-600px";
  }
});
