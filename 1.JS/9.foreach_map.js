// https://velog.io/@limes/Javascript-Array-Method-for-each-%EC%99%80-map%ED%95%A8%EC%88%98%EC%9D%98-%EC%B0%A8%EC%9D%B4

'for each'

//foreach() array요소를 제공된 함수로 한 번 실행
//콜백 함수를 인자로 받아, 배열의 각 요소에 콜백 함수 실행 그리고 아무값도 반환하지 않음

let arr = [1,2,3,4,5]
arr.forEach(function(v,i,arr) {
  console.log(v);
})

//forEach()메소드는 아무것도 리턴하지 않음.
//제공된 함수로 array요소를 호출
// 콜백을 통해 호출하는 어레이를 변경하는데 구문 밖으로 리턴값을 가져오지는 못함.

let newArr = arr.forEach(function(e,i){
  return e;
})

console.log(newArr) //undefinded


'Map'

// 모든 array 요소가 지정된 함수로 호출될 때 새로운 array를 생성함
// 기존의 배열을 이용해 새로운 배열을 생성할 때 사용
// 콜백함수를 인자로 받아, 배열의 각 요소에 대해 실행한 결과 값을 반환


let newArrMap = arr.map(function(v,i,arr){
  return v;
})

console.log(newArrMap);
//map의 경우 요소가 아닌 새로운 값을 만들어 return 자체를 반환



'차이점'

//for each는 데이터 변경이 아닌 새로운 작업에 유용
//map은 무언가 새로운 것들을 만들때 사용하면 좋음

//map()매소드는 array안에 새로운 요소들을 호출
//map은 메모리를 할당하고 리턴값 정하지만, foreach는 리턴값 버리고 항상 undefined를 리턴함.

