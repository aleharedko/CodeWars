// Write a function that adds a named property to an object. It must be possible to set the property to a new value. 
// If the property already exists on the object, and error should be thrown.

//solution

function addProperty(obj, prop, value) {
    if (prop in obj) {  // поик пропертиса в объекте
        throw new Error(`Ошибка: Свойство "${propertyName}" уже существует в объекте и не может быть перезаписано.`) // генерация ошибки
    } else {
        obj[prop] = value  //добавления проппертиса со значение в масив при его отсутствии
    }
}