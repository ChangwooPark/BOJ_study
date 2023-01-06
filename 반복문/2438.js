let input = require('fs').readFileSync('/dev/stdin');

// let input = 5;

let star = "*";
for(let i = 1; i <= Number(input); i++){
    console.log(star);
    star += "*";
}
