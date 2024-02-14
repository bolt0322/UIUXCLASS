//숫자형 / 문자열 / 논리형 / 객체 / 배열 / 심벌 / 함수

// 객체 > 배열
// let arr = [1, 2, 3, 4];
// let arrStr = ["a", "b", "c"];
// let arr01 = [];

// index & length
// JS : "객체 지향" 프로그래밍 언어 <=> 절차 지향 언어
// length는 함수 x. 속성

// console.log(arr[3]);
// console.log(arrStr.length);

// 유일무이한 값을 저장하고 관리하고 싶은 경우 사용!
// let var1 = Symbol();
// let var2 = Symbol();

// 비교 연산자 => 서로다른 피연산자를 비교할 때 사용하는 연산자!
// console.log(var1 === var2);

// e-commerce = 쇼핑몰
// 회원들의 개인정보 => 심볼 사용
// let id = Symbol(); //Sysmbol이 할당되어진 id
// const member01 = {
//   name: "Kim",
//   [id]: 12345, //Symbol()
// };
// member01.id = 6789;
// // console.log(member01);

// const member02 = {
//   name: "Kim",
//   id: 12345, //단순 id
// };
// console.log(member02);

// const member02 = {
//   name: "Park",
//   id: "abc",
// };

// let grade = Symbol("grade"); //grade이라는 식별자 안에 라벨을 넣어줌
// member01[grade] = "VIP"; //member01 안에 grade를 넣음
// // console.log(member01);

// //이건 익명 함수
// const fnc = function () {
//   console.log("test");
// };

//함수는 원래 이렇게 작성하는 것이 기본문법
// function fnc01 {
// }

//prompt() : 사용자에게 어떤 값을 받아올 수 있도록 해주는 함수!
//사용자가 아무리 숫자를 입력 => 문자열로 형변환
//문자열 "+" 숫자형 => 문자열. 오직 더하기 연산자에만!!

//Number() : 매개변수로 들어오는 값을 무조건 숫자로 형변환!
// let str = "20";
// let num = 10;
// let result = Number(str) + num; //의도적 형변환
// console.log(result);

// let result01 = str - num;
// console.log(result01);

// console.log(Number(false));
// console.log(Number("Hi!")); //NaN : 숫자로 치환할 수 없음.

//Number() VS parseInt() VS parseFloat()
//가장 큰 개념.최강자 VS 그다음 ㄱ
// const userAge = parseInt(prompt("당신의 나이를 입력하세요!"));
// console.log(typeof userAge);

// 소괄호 안에 들어온 값을 무조건 다 숫자로 바꿀 수 없음!! 숫자를 정수로 바꿔 주는 역할
// console.log(parseInt(false));

// /소괄호 안에 들어온 값을 실수의 형태로 바꿔주는 역할
// const userHot = parseFloat(prompt("당신의 체온을 입력해주세요!"));
// console.log(userHot);

//숫자 => 문자로 형변환
//쇼핑몰의 10만개 의류 => 바코드 => 문자형식으로 관리
// let num = 10;
// console.log(typeof num.toString());

// null & undefined
// 문자 => 숫자 : Number() **
// 숫자 => 문자 : String() **
// 문자 & 숫자 => d
// console.log(Boolean("hi!"));

// 사용자에게 화씨온도를 받아서 섭씨온도로 변환시킨 후 웹브라우저 화면에 섭씨온도를 출력!
// 공식 : 섭씨온도 = (화씨온도 -32) / 1.8
// 단, 소수점도 출력되어야 함
const degree = Number(prompt("화씨온도를 입력하세요"));
const degreeJ = ((degree - 32) / 1.8).toFixed(1);
document.write(`화씨 ${degree}도는 섭씨 ${degreeJ}입니다`);
