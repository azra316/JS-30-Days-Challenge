 // Day-8: ES6 + Features
// Activity 1: Template Literals

// Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
const Name = "Catlina";
const Age = 21;
console.log(`I'm ${Name} and my Age is ${Age}`);
// Task 2: Create a multi-line string using template literals and log it to the console.
const Quote = `Honesty is the best policy 
              I read this quote in my school
              I love reading books`;
console.log(Quote);

// Activity 2: Destructuring
// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
let Colors = ['red', 'green', 'blue'];
let [first, second, third ] = Colors;
console.log(first);
console.log(second);
console.log(third);
// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
let PersonInfo = {
  name: "azra",
  age: 200,
  nationality: "India"
}
let {name, age, nationality} = PersonInfo;
console.log(name);
console.log(age);
console.log(nationality);

// Activity 3: Spread and Rest Operators
// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
let Array1 = [22, 33, 44];
let Array2 = [55,66,77];
let AddArray = [...Array1, ...Array2, 88,99]
console.log(AddArray);
// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
function AddElement(...RestNum){
  return RestNum.reduce((total, currentNum)=> total+currentNum,0);
}
let Sum= AddElement(1,2,3,4,5);
console.log(Sum);
// Activity 4: Default Parameters
// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
function SumNum(num1,num2 =1){
  return num1*num2;
}
let result = SumNum(11);
console.log(result);

// Activity 5: Enhanced Object Literals
// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
let apple = "red";
let papaya = "yellow;"
let Fruits = {
  apple,
  papaya,
  LikeFruits(){
    console.log(`I like apple its color is ${this.apple} and my friend like Papaya its color is ${this.papaya}`);
  }
};
console.log(Fruits);
Fruits.LikeFruits();
// Task 9: Create an object with computed property names based on variables and log the object to the console.
const keyPart1 = 'first';
const keyPart2 = 'Name';
const obj = {
  [keyPart1 + keyPart2]: 'Alice'
};
console.log(obj);
