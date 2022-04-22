//코어 모듈

'read line - 터미널을 통해 사용자의 입력을 받아오는 모듈'

'15552 - 빠른'

const readline = require('readline');
const rl = readline.createInterface({
  input : process.stdin,
  output : process.stdout
});


rl.question("what is your name ?",(answer)=>{
  console.log(`Hello ${answer}`)
  rl.close();
})