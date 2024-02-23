// 1.제목 & 저자 값을 찾아온다
// -input > .value

// 2.이벤트가 작동하도록 해주는 저장하기 버튼 정의
// button => click   or   form => submit(*이게 정석에 가까움)
// **e.preventDefault()

// 3.찾아온 값을 출력해주도록 도와주는 이벤트 함수 필요!
// addEventListener

// 4.출력할 공간에 대해 정의
// querySelector

// 5.삭제하기 버튼 정의
// createElement, appendChild

// 6.삭제하기 버튼이 복수의 갯수로 생성 => 반복문을 사용해서 클릭한 삭제버튼을 찾아오기 위해서 (*클래스 함수 VS 화살표 함수)

// 7.삭제하기 버튼 클릭 시, 목록삭제 이벤트 함수
// parentNode, removeChild

const form = document.querySelector("form");

const bookList = document.querySelector("#bookList");
const save = document.querySelector("input[type='submit']");

// const formList = (e) => {
//   e.preventDefault();
//   if (title.value !== "" && author.value !== "") {
//     const li = document.createElement("li");
//     list.appendChild(li);

//     li.innerText = `${title.value} - ${author.value}`;

//     title.value = "";
//     author.value = "";
//   }
// };
// // form.onsubmit = formList;
// form.addEventListener("submit", formList);

// // span태그로 삭제버튼 만들기
// // 삭제버튼을 li 안에 넣기
// //
// const li = document.querySelector("#bookList li");

// const deleteBtns = document.createElement("span");
// li.appendChild(deleteBtns);
// deleteBtns;

save.addEventListener("click", (e) => {
  const title = document.querySelector("#title");
  const author = document.querySelector("#author");

  e.preventDefault();

  const li = document.createElement("li");
  li.innerHTML = `${title.value} - ${author.value} <span>삭제</span>`;
  bookList.appendChild(li);
  title.value = "";
  author.vaule = "";

  const delButtons = document.querySelectorAll("span");
  for (let delButton of delButtons) {
    delButton.addEventListener("click", function () {
      this.parentNode.parentNode.removeChild(this.parentNode);
    });
  }
});
