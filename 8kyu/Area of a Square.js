// Area of a Square
// Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input.

// A
// Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)

//soluyion 

function squareArea(A) {
    let side = (2 * A)/ Math.PI;
    return side * side;
}