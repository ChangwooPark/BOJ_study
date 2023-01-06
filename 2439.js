// let input = require('fs').readFileSync('/dev/stdin');

let input = 5;

let star = "";
let space = "";

for(let i = 1; i <= input; i++){
    
    star += "*";
    
    for(let j = input; j >= 0; j--) {
        if(i < j){
            space += " ";
        }
    }

    console.log(space + star);
    space = "";
    
}

