// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string



//solution

function fakeBin(x) {
    let numberConcat = "";
    for (let index = 0; index < x.length; index++) {
        const digit = x[index]
    if (digit < 5) {
        numberConcat += "0"
    } else if (digit >= 5) {
        numberConcat += "1"
    }
}
    return numberConcat
}

let d = fakeBin("6,3,4,5,6,7,1,2,23,4");
console.log(d)
