// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

//solution

function arrayPlusArray(arr1, arr2) {
    let sum1 = 0;
    let sum2 = 0;

    for (let index = 0; index < arr1.length; index++) {
        sum1 = sum1 + arr1[index];
    }

    for (let index = 0; index < arr2.length; index++) {
        sum2 = sum2 + arr2[index];
    }
    let sum = sum1 + sum2
    return sum; 
}

let sum = arrayPlusArray([222,3], [20]);
console.log(sum)