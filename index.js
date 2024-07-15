//Day:1 Variable and Data Types 


// Activity one : Variable Declaration
var num = 16; 
console.log(num);
 let Goal = "BecomeAGoodDeveloper";
console.log(Goal);
// Activity Two: Constant Declaration
const ImBool = true;
console.log(ImBool);
// Activity Three: DataTypes
const name = "Dhriti";
const Age = 20;
const IsStudent= true;
const Marks = [92, 93, 97, 98, 95];
const DhritiInfo = {
  Email: "Dhriti@google.com",
  PanNo: 3674,
  isWorking: false
}
console.log(`type of name: ${typeof(name)}\ntype of Age: ${typeof(Age)}\nType of IsStudent: ${typeof(IsStudent)}\nType of Marks: ${typeof(Marks)}\nType of DhritiInfo:${typeof(DhritiInfo)}`);
// Activity 4: Reassigning variables
let MyPan = 98745;
console.log(MyPan);
MyPan= 45673;
console.log(MyPan);

// Activity 5: Understanding Const
const MyAdhar = 234567;
console.log(MyAdhar);
//MyAdhar = 4326; TypeError: Assignment to constant variable.

// Feature Request 
// Variable Types Console log 
 const Fruit = "Apple";
const DOB = 16;
const PanNumber = null;
const Human = true;
let age; // constant ko declare krte time hi initiallize krna padhega.
let MyInformation = {
  name: "azra",
  age: 16,
  Hobby: "reading",
  email: "azra@google.com"
}

const Score = [22, 56, 34, 67];
const FruitFun = (FruitName) =>{
  return `I like ${FruitName}`
}
 console.log(`${FruitFun('mango')} and the type of FruitFunction: ${typeof(FruitFun)}`);
console.log(`${Fruit} and the type of Fruit: ${typeof(Fruit)}`);
console.log(` My DOB is ${DOB} and Type of DOB is ${typeof(DOB)}`);
console.log(`My pan Number is ${PanNumber} and the Type of Pan Number: ${typeof(PanNumber)}`);
console.log(`I'm a human being and it is ${Human} and the type of Human is ${typeof(Human)}`);
console.log(`My Age is ${Age} and the Type of Age: ${typeof(Age)}`);
console.log(`My information is :  ${JSON.stringify(MyInformation)} and the type of MyInformation: ${typeof(MyInformation)} `);
console.log(`My score is ${Score} and the Type of Score: ${typeof(Score)}`);
console.log(`Fruit Function tells me ${FruitFun("Apple")} and the Type of fruit Function is ${typeof(FruitFun)}`);

// Reassignment Demo:

let Book = "Atomic Habit";
Book = "HowToWinFrndandFamilyInfluencePeople";
const MyName = "azra";
//MyName = "azraahmad";   TypeError: Assignment to constant variable.