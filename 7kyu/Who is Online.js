// You have a group chat application, but who is online!?

// You want to show your users which of their friends are online and available to chat!

// Given an input of an array of objects containing usernames, status and time since last activity (in mins), create a function to work out who is online, offline and away.

// If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.

// The input data has the following structure:

// [{
//   username: 'David',
//   status: 'online',
//   lastActivity: 10
// }, {
//   username: 'Lucy', 
//   status: 'offline',
//   lastActivity: 22
// }, {
//   username: 'Bob', 
//   status: 'online',
//   lastActivity: 104
// }]
// The corresponding output should look as follows:

// {
//   online: ['David'],
//   offline: ['Lucy'],
//   away: ['Bob']
// }
// If for example, no users are online the output should look as follows:

// {
//   offline: ['Lucy'],
//   away: ['Bob']
// }
// username will always be a string, status will always be either 'online' or 'offline' (UserStatus enum in C#) and lastActivity will always be number >= 0.

// Finally, if you have no friends in your chat application, the input will be an empty array []. In this case you should return an empty object {} (empty Dictionary in C#).


// solution

const whosOnline = (friends) => {
    // 1. Создаем пустой объект для хранения результатов
    const statusMap = {};

    // 2. Если массив пуст, возвращаем пустой объект
    if (friends.length === 0) {
        return statusMap;
    }

    // 3. Перебираем каждого друга в массиве
    for (const friend of friends) {
        let status;

        // 4. Определяем статус:
        // Если 'online' и последняя активность больше 10 минут, то 'away'
        if (friend.status === 'online' && friend.lastActivity > 10) {
            status = 'away';
        } 
        // Если просто 'online' (активен), то 'online'
        else if (friend.status === 'online') {
            status = 'online';
        } 
        // Во всех остальных случаях, 'offline'
        else {
            status = 'offline';
        }
        
        // 5. Добавляем имя друга в соответствующий массив в объекте
        // Если массив для данного статуса еще не существует, создаем его
        if (!statusMap[status]) {  // не понимаю данны участок кода
            statusMap[status] = [];
        }
        // Добавляем имя пользователя
        statusMap[status].push(friend.username);
    }
    
    // 6. Возвращаем итоговый объект
    return statusMap;
};