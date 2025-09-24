// Please write a function that sums a list, but ignores any duplicated items in the list.
//
//     For instance, for the list [3, 4, 3, 6] the function should return 10,
//     and for the list [1, 10, 3, 10, 10] the function should return 4.


//solution
function sumNoDuplicates(numList) {
    let newArray = []
    const solution = numList.filter(i =>{
        if(i.length !== i){
           i.push(newArray)
            newArray = newArray.reduce((total, number) => {
                return total + number;
            }, 0);
        }
    })
    return solution;
}
