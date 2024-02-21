// 내가 쓴 정리
// click버튼을 누른 값을 받는다
// close버튼을 누른 값을 받는다
// .container가 display가 none에서 block이 된다

// 1.open 버튼 정의
// 2.close 버튼 정의
// 3.출력되어야 할 모달 페이지 정의

const clickOpen = document.querySelector(".open");
const clickClose = document.querySelector(".close");
const container = document.querySelector(".container");

// click을 클릭했을 때의 이벤트 함수
const openFnc = () => {
  clickOpen.style.display = "none";
  container.style.display = "flex";
};
// close를 클릭했을 때의 이벤트 함수
const closeFnc = () => {
  container.style.display = "none";
  clickOpen.style.display = "block";
};

clickOpen.onclick = openFnc;
clickClose.onclick = closeFnc;
