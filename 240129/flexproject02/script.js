const btn = document.querySelector(".menu-toggle-btn");
const gnb = document.querySelector(".gnb");
console.log(gnb);

btn.addEventListener("click", () => {
  gnb.classList.toggle("active");
});
