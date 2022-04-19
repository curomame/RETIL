// 참고 사이트 https://brunch.co.kr/@swimjiy/15


const MAP = '배열의 각 요소에 대해, 주어지는 함수를 수행해서 새로운 배열을 "반환" 하는 매서드'

// ex> 섭씨=>화씨 숫자=>문자 등 일괄적용

// const number = [1,2,3,4,5];
// const numbersMap = number.map(item => item*2);

// console.log(numbersMap);

// [2,4,6,8,10]

// map은 실제로 3개의 매개 변수를 가지고 있음

// map((item[현재의 아이템],index[현재 아이템의 인덱스],map()을 호출한 원본 배열))

// const numbers = [1,2,3];
// const numbersMap = numbers.map((value, index, array) => {
//   console.log(value, index, array);
//   return value * 2
// })

// console.log(numbersMap);

// array에 원본 배열이 호출되어 들고 올 수 있는 것을 알았으니 따로 적용하기 좋을 듯.



const FILTER = '배열의 각 요소에 대해 주어진 함수의 결과값이 true인 요소를 모아 새로운 배열을 반환하는 매서드'

//map이 내부 함수의 리턴값이 문자, 숫자, 배열 등으로 다양하지만, filter는 오직 boolean 타입만 반환한다는 점이 특징
// 리턴값이 true인 경우에만 배열에 추가하기 때문에 '중복제거' 같은 조건에 맞는 특정 요소들을 새 배열에 넣고 싶은 경우에 사용하면 적합

// const fruit = ['Apple','Banana','Watermelon'];
// const fruitFilter = fruit.filter(item => item.length>5)

// console.log(fruitFilter);

//filter도 map과 같은 3개의 매개 변수를 가짐


const REDUCE = '배열의 각 요소에 대해 reducer 함수를 실행한다. 그리고 난 후 최종 결과값을 바로 반환한다.'

// const nums = [1,2,3,4];
// const nums = [3,4,5,6];
// const numsSum = nums.reduce((acc, cur) => {
//   console.log(acc, cur);
//   return acc + cur;
// })

// console.log(numsSum);

// 만약에 초기값이 없다면 배열의 0번째 인덱스가 acc에 들어가고 cur 값에 1번째 인덱스 값이 들어간다


//acc 는 계속 값을 누적해서 갖고 있다고 생각하기 accumulate?
//cur 은 현재값 current

//acc 는 reduce 함수를 수행하면서 생기는 값을 임시적으로 보관하는 형태


//만약 reduce 끝에 초기값을 설정할 수 있는데 설정시 이렇게 됨;

// const nums = [1,2,3,4];
// const numsSum = nums.reduce((acc, cur) => {
//   console.log(acc, cur);
//   return acc + cur;
// },10)

// console.log(numsSum);


//filter는 총 4개의 매개 변수를 가진다. acc와 cur을 제외하고는 필수요소가 아님

// const number = [1,2,3,4];
// const numberSum = number.reduce((acc, cur, curIndex, arr) => {
//   console.log(acc, cur, curIndex,arr);
//   return acc + cur;
// },10)

// console.log(numberSum);

//알고리즘 할때 도움될것 같음.