// 1.Height & Weight 값 정의한다
// 2.button & result 정의하기
// 3.button 이벤트 연산 작업하기
// H & W 값 활용 => 연산 => 할당
// 함수 & 조건문 연산작업
// result에 출력하기

// 가급적이면 전역 요소는 많이 만들지 않는 게 좋음.
const form = document.querySelector("form");

// formHandler가 너무 코드가 길어져서 display만 밖으로 끄집어냄.
const display = (bmi) => {
  const result = document.querySelector(".result");
  let group;
  if (bmi >= 30.0) {
    group = "중등도 비만";
  } else if (bmi >= 25.0) {
    group = "경도 비만";
  } else if (bmi >= 23.0) {
    group = "과체중";
  } else if (bmi >= 18.5) {
    group = "정상";
  } else {
    group = "저체중";
  }

  result.innerText = `${bmi} -> ${group}입니다.`;
};

// formHandler가 너무 코드가 길어져서 calculate만 밖으로 끄집어냄.
const calculate = (height, weight) => {
  return (weight / (height * height)).toFixed(1);
};

const formHandler = (e) => {
  e.preventDefault();
  const heightInput = document.querySelector("#height");
  const weightInput = document.querySelector("#weight");

  if (weightInput.value !== "" && heightInput.value !== "") {
    const height = heightInput.value / 100;
    const weight = weightInput.value;

    const bmi = calculate(height, weight);

    display(bmi);

    heightInput.value = "";
    weightInput.value = "";
  }
};

form.onsubmit = formHandler;
