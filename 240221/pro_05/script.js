// 내가 쓴 과정
// 사용자가 입력한 텍스트를 찾아온다
// 등록 버튼을 클릭했을 때 텍스트를 li 안에 넣는다
// ul태그에 리스트를 출력한다

// 1.사용자가 입력하는 값을 찾아오기 위해 입력창 정의
// 2.사용자가 클릭할 버튼에 정의
// 3.버튼을 클릭했을 때 이벤트에 대한 기능 정의
// 4.li태그를 DOM에서 생성한 후,입력창을 통해서 전달받은 값을 li태그에 삽입 => ul태그의 자식 요소로 사용해야 함
// 5.사용자가 입력한 값을 출력할 공간에 대한 정의

// 1, 2, 5.
const form = document.querySelector("form");
const input = document.querySelector("form input[type='text']");
const ul = document.querySelector("ul");

const formFnc = (e) => {
  if (input.value !== "") {
    e.preventDefault();
    const li = document.createElement("li"); /*html에 li 만들기*/
    ul.appendChild(li); /*li를 ul의 자식요소로 만들기*/
    li.innerText = input.value; /*value는 이벤트가 일어날때만...??*/
    input.value = ""; /*등록 버튼 누른 후 입력 창 리셋*/
  }
};

// 등록 버튼 누르면 formFnc 이벤트 실행
form.onsubmit = formFnc;
