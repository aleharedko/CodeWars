// Please write a function that sums a list, but ignores any duplicated items in the list.
//
//     For instance, for the list [3, 4, 3, 6] the function should return 10,
//     and for the list [1, 10, 3, 10, 10] the function should return 4.


//solution
// function sumNoDuplicates(numList) {    РКШЕНИЕ ПРАВИЛЬНОЕ И ХОРОШЕЕ НО НЕ ПОД ДАННУЮ ЗАДАЧУ, ПОДСЧИТЫВАЕТ СУММУ ТОЛЬКО УНИКАЛЬНЫХ ЧИСЕЛ
//     const newSet = [...new Set(numList)]; //создаю уникальный бъектальный
//     let newArray = Array.from(newSet); // переделываю объект в массив
//
//     return newArray.reduce((total, num) => {
//         return total + num;
//     }, 0);
// }
//
// const array = [5, 6, 10, 3, 10, 10, 6, 7, 0, 9, 1, 1, 6, 3, 1]
// let newArray = sumNoDuplicates(array)
// console.log(newArray)

function sumNoDuplicates(numList) {
1
    12


}

const array = [5, 6, 10, 3, 10, 10, 6, 7, 0, 9, 1, 1, 6, 3, 1]
let newArray = sumNoDuplicates(array)
console.log(newArray)


