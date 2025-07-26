// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

// solution

function getAverage(marks) {
    let element = 0;
    for (let i = 0; i < marks.length; i++) {
        element += marks[i];
    }
    return Math.floor(element/marks.length)
}

console.log(getAverage([1,1,1,1,1,1,1,2]));

function getAverage2(marks){
    return Math.floor(marks.reduce((acc, val) => acc + val, 0 ) /marks.length)
}

console.log(getAverage2([1,1,1,1,1,1,1,2]));


