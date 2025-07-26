// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

//solution

function findSmallestInt(arr) {
    return Math.min(...arr);
}

let dsfs = findSmallestInt([34, 15, 88, 2])
console.log(dsfs);

function findSmallestInt2(arr) {
    return arr.reduce((a, c) => { return Math.max(a, c) })

}

let dsfs2 = findSmallestInt2([34, 15, 88, 2])
console.log(dsfs2);