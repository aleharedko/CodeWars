// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
//
//     Examples
// highAndLow("1 2 3 4 5"); // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
//     There will always be at least one number in the input string.
//     Output string must be two numbers separated by a single space, and highest number is first.


//solution

// function highAndLow(numbers){ // фактически ручная переборка, не удобно и лего запутаться
//     const result =  numbers.reduce((stats, num) => {
//         if (num > stats.max) stats.max = num;
//
//
//         if (num < stats.min) stats.min = num;
//         return stats
//     }, {max: numbers[0], min: numbers[0]})
//
//     return `${result.max} ${result.min}`
// }
//
// console.log( highAndLow([10, 2, 45, 80, 5]))


function highAndLow(numbers) {
    const arr = numbers.split(' ').map(Number);
    return `${Math.max(...arr)} ${Math.min(...arr)}`;
}