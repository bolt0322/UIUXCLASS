const items = document.querySelectorAll(".navi li");
const photo = document.querySelector(".photo");

items.forEach((items) => {
  items.addEventListener("moseover", function () {
    const changeImage = this.getAttribute("data-image");
    console.log(changeImage);
    photo.style.backgroundImage = `url(${changeImage})`;
  });
  items.addEventListener("mouseleave", function () {
    const changeImage = this.getAttribute("data-image");
    photo.style.backgroundImage = "";
  });
});
