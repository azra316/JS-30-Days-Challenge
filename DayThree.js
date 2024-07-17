// Day-3: Control Structure
// Activity one: if else statements
//Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.

function NumberChecking(num) {
  if (num > 0) {
    console.log(`${num} is positive`);
  } else if (num == 0) {
    console.log(`${num} is zero`);
  } else {
    console.log(`${num} is negative`);
  }
}
NumberChecking(4);
NumberChecking(-8);
NumberChecking(0);

//Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
function CheckVotingEligibility(age) {
  if (age >= 18) {
    console.log("you can vote");
  } else {
    console.log("you are under age");
  }
}
CheckVotingEligibility(8);
CheckVotingEligibility(21);

// Activity 2: Nested If-Else Statements
// Task 3: Write a program to find the largest of three numbers using nested if-else statements.
function FindingLargestNum(a, b, c) {
  if (a >= b) {
    if (a >= c) {
      console.log(` ${a} is greater than b and c`);
    } else `the largest Number is ${c}`;
  } else {
    if (b >= a) {
      if (b >= c) {
        console.log(`The largest Number is ${b}`);
      } else {
        console.log(`The largest number is ${c}`);
      }
    }
  }
}
FindingLargestNum(2, 7, 4);
FindingLargestNum(7, 8, 4);

// Activity 3: Switch Case
// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
let PrintDay = (Day) => {
  switch (Day) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("saturday");
      break;
    case 7:
      console.log("sunday");
      break;
    default:
      console.log("Invalid Day; Please enter a number between 1 and 7");
  }
};
PrintDay(8);
PrintDay(2);

// Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
let CheckingGrades = (Marks) => {
  switch (true) {
    case Marks > 90:
      console.log("Grade: A");
      break;
    case Marks > 80:
      console.log("Grade: B");
      break;
    case Marks > 70:
      console.log("Grade: C");
      break;
    case Marks > 60:
      console.log("Grade: D");
      break;
    default:
      console.log("Grade: F");
  }
};
CheckingGrades(99);
CheckingGrades(89);

// Activity 4: Conditional (Ternary) Operator
//Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

let CheckingEvenOdd = (num) => {
  let CheckedNum = num % 2 == 0 ? `${num} is even` : `${num} is odd`;
  return CheckedNum;
};
let PrintingResult = CheckingEvenOdd(8);
console.log(PrintingResult);
PrintingResult = CheckingEvenOdd(67);
console.log(PrintingResult);

// Activity 5: Combining Conditions
// Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

let LeapYearCheck = (year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`${year} is leap year`);
  } else {
    console.log(`${year} is not leap`);
  }
};
LeapYearCheck(2024);
LeapYearCheck(2003);
