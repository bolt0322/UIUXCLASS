// 1. 가상 클래스 정하기! body랑 button에 class="dark"로 해놓고 style.css 쓰기 => 가상 클래스이기 때문에 html의 class는 지우기
// 2.

const body = document.querySelector("body");
const button = document.querySelector("button");

button.onclick = () => {
  // body.classList.toggle("dark");
  if (!body.classList.contains("dark")) {
    body.classList.add("dark");
    button.innerText = "라이트모드로 바꾸기";
  } else {
    body.classList.remove("dark");
    button.innerText = "다크모드로 바꾸기";
  }
};
