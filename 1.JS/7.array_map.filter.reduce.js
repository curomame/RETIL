// map 배열의 각 요소에 대해 주어진 함수를 수행한 결과를 모아 새로운 배열을 반환하는 매서드
// ex> 섭씨=>화씨 숫자=>문자 등 일괄적용

// const number = [1,2,3,4,5];
// const numbersMap = number.map(item => item*2);

// console.log(numbersMap);

// [2,4,6,8,10]

// map은 실제로 3개의 매개 변수를 가지고 있음

// map((item[현재의 아이템],index[현재 아이템의 인덱스],map()을 호출한 원본 배열))

const numbers = [1,2,3];
const numbersMap = numbers.map((value, index, array) => {
  console.log(value, index, array);
  return value * 2
})

console.log(numbersMap);