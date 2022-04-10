// 서버 = 데이터 요구하면 데이터를 보내주는 프로그램

// 요구사항
// 1. 원하는 데이터 url
// 2. url로 get요청

// => 데이터 전송

// get 요청
// 1. url 직접 입력
// 2. 버튼으로 get요청
// => 전부 브라우저가 새로 고침됨
// 3. AJAX로 get요청
// => 새로고침 없이 서버에세 GET요청 하는 조그마한 JS코드

// 장점 : 새로고침 없으니까 부드러움


// 만든 서버

//1번방식
//'짱긺'

//2번방식

fetch('https://~~.json')
  .then((res)=> {
    if(!res.ok){
      throw new Error('400 or 500 error') // 정확한 에러요청
    }

    return res.json();
  })
  .then((end)=>{
    console.log(end); // 파싱
  })
  .catch(()=>{
    console.log('error'); // 에러 신호
  })


async function 데이터가져오는함수(){
  var res = await fetch('http://~~.json');
  if(!res.ok){
    throw new Error('400 or 500 error') // 정확한 에러요청
  }
  var result = await res.json();
  console.log(result);
}

  데이터가져오는함수().catch(()=>{
    console.log('error!');
  })


//3번 방식 외부 라이브러리 사용
//react axios


// CORS

if (node_js) {
  var cors = require('cors');
  app.use(cors());
}