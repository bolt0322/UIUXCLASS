// 상세 보기 버튼을 찾아온다
// 상세 페이지 글을 찾아온다
// 버튼을 클릭하면

const viewBtn = document.querySelector("#view");
const detail = document.querySelector("#detial");

viewBtn.onclick = function () {
  detail.classList.toggle("hidden");
};
