// Given: a sequence of different type of values (number, string, boolean). You should return an object with a separate properties for each of types presented in input. Each property should contain an array of corresponding values.

// keep order of values like in input array
// if type is not presented in input, no corresponding property are expected
// So, for this input:

// ['a', 1, 2, false, 'b']
// expected output is:

// {
//   number: [1, 2],
//   string: ['a', 'b'],
//   boolean: [false]
// }


//solution

// function separateTypes(input) {     такое подойдёт если уже есть объект с ключами и мы по ним расспределяем, но не тогда нам самостоятельно нужно создать ключи
//     const result = {
//         string: [],
//         boolean: [],
//         number: []
//     };

//     // Перебираем каждый элемент входного массива!!!!!!!
//     for (const item of input) {  //какая логика?
//         const type = typeof item;

//         if (type === 'string') {
//             result.string.push(item);
//         } else if (type === 'boolean') {
//             result.boolean.push(item);
//         } else if (type === 'number') {
//             result.number.push(item);
//         }
//     }

//     return result;
// }

// const testInput = ['a', 1, , 2,];
// console.log(separateTypes(testInput));


function separateTypes(input) {
    const result = {};

    // Перебираем каждый элемент входного массива.
    for (const item of input) {
        const type = typeof item;

        // Если ключа для данного типа ещё нет, создаём его с пустым массивом.
        if (!result[type]) {
            result[type] = [];
        }

        // Добавляем элемент в массив соответствующего типа.
        result[type].push(item);
    }

    return result;
}