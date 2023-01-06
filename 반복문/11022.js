// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input = ["5", "1 1", "2 3", "3 4", "9 8", "5 2"];


for (let i = 1; i <= input[0]; i++) {
    let numbers = input[i].split(' ');
    
    console.log(`Case #${i}: ${Number(numbers[0])} + ${Number(numbers[1])} = ${Number(numbers[0]) + Number(numbers[1])}`);
}

