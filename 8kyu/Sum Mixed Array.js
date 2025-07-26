// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.


//Solution

function sumMix(x){
    let sum = 0;
    for (let index = 0; index < x.length; index++) {
    
        sum += Number(x[index])
    }
    return sum
}

console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']));
