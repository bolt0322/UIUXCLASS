// window.addEventListener("scroll", function () {
//   const header = document.querySelector("header");
//   // const headerContents = this.document.querySelector(".header_contents span");
//   const sectionPage01 = document.querySelector(".page1");
//   const headerHeight = header.offsetHeight;

//   const page01Offset = sectionPage01.offsetTop - headerHeight;

//   if (window.scrollY >= page01Offset) {
//     header.style.opacity = 0.1;
//   } else {
//     header.style.opacity = 1;
//   }
// });

// 스크롤하기 전 텍스트 white, background는 opacity 0
// 스크롤 후 텍스트 black, background는 opacity 0.5에 흰색
function headerChange() {
  const header = document.querySelector("header");
  const scroll = window.scrollY;

  if (scroll > 0) {
    header.style.transition = "all 0.2s ease";
    header.style.backgroundColor = "rgba(250, 250, 245, 0.6)";
    header.style.borderBottom = "1px solid #e0deda";
    element.style.color = "black";
  } else {
    header.style.transition = "all 0.2s ease";
    header.style.backgroundColor = "rgba(250, 250, 245, 0)";
    header.style.borderBottom = "none";
  }
}

window.addEventListener("scroll", headerChange);
