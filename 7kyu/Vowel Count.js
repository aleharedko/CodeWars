// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.


//solution

function getCount(str) {
    let count = 0;
    for (let index = 0; index < str.length; index++) {
        const element = str[index];
        (element ===  "a" || element ===  "e" || element ===  "i" || element ===  "o" || element ===  "u") ? count++ : null;
    }
    return count;
}

let r =  getCount('abracadabra') 
console.log(r);
