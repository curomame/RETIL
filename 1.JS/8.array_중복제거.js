// https://hianna.tistory.com/422 참고하였음

'1.set객체 이용하기'

// javascript의 set객체를 이요하면 중복없는 데이터 표현이 가능


// const dupArr = [1, 2, 3, 1, 2];

// const set = new Set(dupArr);

// const uniqueArr = [...set]; //...함수에 대해 다시 작성하기.

// console.log(Array.isArray(uniqueArr));
// console.log(uniqueArr);

'2. indexOf(), filter()'

// const dupArr = [1, 2, 3, 1, 2];

// const uniqueArr = dupArr.filter((element, index) => {
//     return dupArr.indexOf(element) === index;
// });

// console.log(Array.isArray(uniqueArr));
// console.log(uniqueArr);

'3.forEach(), includes()'

// const dupArr = [1, 2, 3, 1, 2];

// let uniqueArr = [];
// dupArr.forEach((element) => {
//     if (!uniqueArr.includes(element)) {
//         uniqueArr.push(element);
//     }
// });

// console.log(Array.isArray(uniqueArr));
// console.log(uniqueArr);



let myset = [1,2,3,4]
const a = new Set(myset)

const b = [...a]
const c = [a]

console.log(b);
console.log(c);

//이렇게 새로 정렬하지 않으면 a에는 set이라는 이상한 Set(4) { 1, 2, 3, 4 } 가 생기는데 이게 프로미스라고 하는건가???!!! 잘 몰르겠응
//그래서 이걸다시 배열에 넣어줘야 쓸수 있고 ...은 원래 거에 더해서 a거를 쭉쭉쭉 넣어달란 말이오
//만약 아래처럼 그냥 그렇게 해서 c하면 똑같이 set(4)같은 이상한 객체같은게 튀어나와서 ... 적어야 하는데 이건 아직 이해 못해서 나중에 다시 써야지