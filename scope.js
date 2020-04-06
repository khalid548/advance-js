let bonus = 31;

function sum(first, second){
    let result = first + second + bonus;
    console.log(bonus);
    return result;
}

const output = sum (4, 5);
console.log(bonus);
console.log(output);