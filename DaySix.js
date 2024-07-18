// Day 6: Arrays 
// Activity 1: Array Creation and Access

// Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
const Arrayone = [1,2,3,4,5];
//console.log(Arrayone);

// Task 2: Access the first and last elements of the array and log them to the console. 
const ArrayTwo = [1,2,3,4,5,6,7];
//console.log(`first element of Array: ${ArrayTwo[0]} and last element of Array: ${ArrayTwo[6]}`);

// Activity 2: Array Methods (Basic)
// Task 3: Use the push method to add a new number to the end of the array and log the updated array.
const ArrayThree = [11, 22,45,67,78];
ArrayThree.push(16);
//console.log(ArrayThree);

// Task 4: Use the pop method to remove the last element from the array and log the updated array.
const ArrayFour = [1,2,3,4,5];
ArrayFour.pop();
//console.log(ArrayFour);

// Task 5: Use the shift method to remove the first element from the array and log the updated array.

let ArrayFive = [1,2,3,4,5,6,7];
ArrayFive.shift();
//console.log(ArrayFive);

// Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
let ArraySix = [1,2,3,4,5,6,7,8];
ArraySix.unshift(0);
//console.log(ArraySix);

//  Activity 3: Array Methods (Intermediate)
// Task 7: Use the map method to create a new array where each number is doubled and log the new array.
const ArraySeven = [1,2,3,4,5];
const NewArray = ArraySeven.map( (num)=> num*2);
//console.log(NewArray);

// Task 8: Use the filter method to create a new array with only even numbers and log the new array.
const ArrayEight = [1,2,3,4,5,6,7,8,9,10];
const NewArray2 = ArrayEight.filter( (num)=>{
  if(num%2==0)
    return num;
})
//console.log(NewArray2);

// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
const ArrayNine = [1,2,3,4,5];
const SumArray = ArrayNine.reduce((accumulator , CurrentValue)=>{
 return accumulator+ CurrentValue; 
},0)
//console.log(SumArray);


// Activity 4: Array Iteration
// Task 10: Use a for loop to iterate over the array and log each element to the console.
const ArrayTen = [11,12,13,14,15];
for(let i=0; i<ArrayTen.length; i++){
  //console.log(ArrayTen[i]);
}
// Task 11: Use the forEach method to iterate over the array and log each element to the console.
const Array11 = [2,4,6,8,10];
Array11.forEach( (num)=>{
  //console.log(num);
})
// Activity 5: Multi-dimensional Arrays
// Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
let Array2D = [[1,2,3], [4,5,6],[7,8,9]];
console.log(Array2D);

// Task 13: Access and log a specific element from the two-dimensional array.
console.log(Array2D[0][2]);
console.log(Array2D[1][2]);
console.log(Array2D[2][1]);