// *** 내가 짠 순서 ***
// 첫 번째 수 입력 받은 값을 저장하기
// 두 번째 수 입력 받은 값을 저장하기
// 입력받은 값들의 최대 공약수를 구하는 함수 만들기
// 계산하기 버튼을 누르면 그 값을 나타내기...?

// 1.사용자가 입력한 두 개의 숫자를 찾아온다
// 2.출력할 공간을 정의한다
// 3.계산하기 버튼을 클릭했을 때, result 공간에 값을 출력해준다
// 4.값을 출력시켜주기 위한 연산작업을 한다
// 5.최대공약수에 대한 개념 정의한다

// 내가 짠 코드
// const number1 = document.getElementById("number1").value;
// const number2 = document.getElementById("number2").value;

// const result = (a, b) => {
//   if ()
// }

// document.getElementById("result").inner

// 정답
const firstNum = document.querySelector("#number1");
const secondNum = document.querySelector("#number2");
const result = document.querySelector("#result");
const button = document.querySelector("form input[type='submit'");

// 최대공약수 개념
const getGCD = (firstNum, secondNum) => {
  const max = firstNum > secondNum ? firstNum : secondNum;
  // 재할당이 있어야 하니까 let
  let GCD = 0;
  for (let i = 1; i <= max; i++) {
    if (firstNum % i === 0 && secondNum % i === 0) {
      GCD = i;
    }
  }
  return GCD;
};

button.onclick = function (e) {
  e.preventDefault();
  result.innerText = getGCD(firstNum.value, secondNum.value);
};
