let input = require('fs').readFileSync('/dev/stdin').toString().trim();

// let input = "71"

let orgNum = Number(input)
let num = Number(input);
let result;
let count = 0;
while(true) {
    // num이 1자리 일때
    if(Number(num) < 10) {
        num = "0" + Number(num).toString();
    }
    // console.log(num)
    // num이 2자리일때
    let numArr = num.toString().split('');
    let sum = Number(numArr[0]) + Number(numArr[1]); // num의 합계
    // console.log(sum)
    if(Number(sum) < 10) {
        sum = "0" + Number(sum).toString();
    }

    let sumArr = sum.toString().split('');

    num = numArr[1].toString() + sumArr[1].toString() 
    // console.log(num)
    count++;

    // break;
    if(Number(num) === orgNum) {
        console.log(count);
        break;
    }
}

// 더 좋은 코드
// let input = Number(require('fs').readFileSync('/dev/stdin').toString());

// let num = input;
// let sum;
// let i = 0;

// while (true) {
//   i++;

//   sum = Math.floor(num / 10) + num % 10;
//   num = (num % 10) * 10 + sum % 10; 

//   if (input === num) {
//     break;
//   } 
// }

// console.log(i);