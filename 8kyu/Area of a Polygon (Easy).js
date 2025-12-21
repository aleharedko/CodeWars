// Write the function polygonArea(A,B,C,D) that finds the area of polygons of this type:
//
//     alt text
//
// Assume D always equals B/2.
// Assume the angles formed by AB and BC are right angles.

//solution

function polygonArea(A,B,C,D){
    D = B/2
    const  area = ((A + C)/2 * B)
    return area
}