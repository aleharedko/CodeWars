// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.
// Examples:
// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A


//solution
function getMiddle(s) {
  const length = s.length;
  const middleIndex = Math.floor(length / 2);

  if (length % 2 === 0) {
    // Если длина строки четная, возвращаем 2 символа
    return s.substring(middleIndex - 1, middleIndex + 1);
  } else {
    // Если длина строки нечетная, возвращаем 1 символ
    return s.charAt(middleIndex);
  }
}