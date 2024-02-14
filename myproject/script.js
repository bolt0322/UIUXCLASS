window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  const sectionTravel = document.querySelector("#travel");
  const headerHeight = header.offsetHeight;
  if (window.scrollY >= sectionTravel.offsetTop - headerHeight) {
    header.style.height = "0";
    header.style.overflow = "hidden";
  } else {
    header.style.height = "80px";
  }
});
