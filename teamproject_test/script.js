window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  // const headerContents = this.document.querySelector(".header_contents span");
  const sectionPage01 = document.querySelector(".page1");
  const headerHeight = header.offsetHeight;

  const page01Offset = sectionPage01.offsetTop - headerHeight;

  if (window.scrollY >= page01Offset) {
    header.style.opacity = 0.1;
  } else {
    header.style.opacity = 1;
  }
});
