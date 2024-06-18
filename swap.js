function swapTwo(a, b) {
  return [b, a];
}

console.log(swapTwo(100, 200));
console.log(swapTwo(44, 33));
console.log(swapTwo(21, 12));
console.log(swapTwo(3, 4));

// Using the "&&" Operator
function and(a, b) {
  return a && b;
}
console.log(and(true, false)); // ➞ false
console.log(and(true, true)); //➞ true
console.log(and(false, true)); //➞ false
console.log(and(false, false)); // ➞ false

// Are the numbers equal?
console.log("Are the numbers equal");
const isSameNumber = (a, b) => {
  return a === b;
};
console.log(isSameNumber(4, 8));
console.log(isSameNumber(2, 2)); //
console.log(isSameNumber(1, "1")); //

// Football points (Create a function that takes the nubers or wind, draws and losses and calculates the number of points  a football team obtained so far  win get 3 points draw 1 point losses get 0 point example)

function footballPoints(win, draws, losses) {
  return win * 3 + draws * 1 + losses * 0;
}
console.log(footballPoints(3, 4, 2));
console.log(footballPoints(5, 0, 2));
console.log(footballPoints(0, 0, 1));

function convertSecond(h, m) {
  return h * 3600 + m * 60;
}
console.log(convertSecond(1, 3));
console.log(convertSecond(2, 0));

// Fix the code in the code tab so the function return  true if and only if x is equal to 7
console.log("is seven check");
function isSeven(x) {
  if (x === 7) {
    return true;
  } else {
    return false;
  }
}

console.log(isSeven(4));
console.log(isSeven(7));
console.log(isSeven(9));

console.log("equality check");

function checkEquality(x, y) {
  if (x === y) {
    return true;
  } else {
    return false;
  }
}

console.log(checkEquality(1, true));
console.log(checkEquality(0, "0"));
console.log(checkEquality(1, 1));
console.log(checkEquality(undefined, null));

// Profitable Gamble Create a function that takes three arguments prob, prize and pay and return true if prob*prize >pay. otherwize return false

function profitAbleGamble(prob, prize, pay) {
  if (prob * prize > pay && 1 > 0) {
    return true;
  } else {
    return false;
  }
}

console.log(profitAbleGamble(0.2, 50, 9));
console.log(profitAbleGamble(0.9, 1, 2));
console.log(profitAbleGamble(0.9, 3, 2));

// create a function that takes a boolean variable  flag and return it as a string
function boolToString(flag) {
  return flag.toString();
}

console.log(typeof boolToString(true));
console.log(typeof boolToString(false));

// Create a function that returns the given argument, but by using arrow function an

const arrowFunc = (a) => a;

console.log(arrowFunc(1));
console.log(arrowFunc("2"));
console.log(arrowFunc(true));

// To create a JavaScript function that calculates the number of frames shown in a given number of minutes for a certain FPS (frames per second), you can define a function that multiplies the number of minutes by the number of seconds per minute (60) and then by the FPS. Here's the implementation:

function frames(minutes, fps) {
  return minutes * 60 * fps;
}

console.log(frames(2, 12));
console.log(frames(3, 24));
console.log(frames(4, 25));

// create a function that will handle simple math expressions. That input is an expression in the form of a string. calculator ("23+4")

function calculator(str) {
  return eval(str);
}

console.log(calculator("23+4"));
console.log(calculator("45-15"));
console.log(calculator("13+2-5*2"));
console.log(calculator("49/7*2-3"));

// Buggy Code (Part 4):  Emmy has written a function that returns a greeting to users. However, she's in love with Mubashir, and would like to greet him slightly differently. She added a special case in her function, but she made a mistake.

function greet(name) {
  if (name === "Mubashir") {
    return "Hello, My Love!";
  } else {
    return "Hello, " + name + "!";
  }
}

console.log(greet("Mubashir"));
console.log(greet("Matt"));
console.log(greet("Helen"));

// Two Makes Ten: Create a function that takes two arguments a and b , Both arguments are integers return true if one of them is 10 or if their sum is 10

function makesTen(a, b) {
  if (a === 10 || b === 10 || a + b === 10) {
    return true;
  } else {
    return false;
  }
}

console.log(makesTen(9, 10));
console.log(makesTen(9, 9));
console.log(makesTen(1, 9));
console.log(makesTen(1, 10));

// Let's Fuel Up : A vehicle needs 10 times the amount of fuel than the distance it travels. However, it must always carry a minimum of 100 fuel before setting off.  Create a function which calculates the amount of fuel it needs, given the distance. (একটি যানবাহন যত দূরত্ব অতিক্রম করে তার চেয়ে 10 গুণ পরিমাণ জ্বালানি প্রয়োজন। যাইহোক, সেট অফ করার আগে এটি সর্বদা ন্যূনতম 100 জ্বালানী বহন করতে হবে। একটি ফাংশন তৈরি করুন যা দূরত্বের ভিত্তিতে প্রয়োজনীয় জ্বালানীর পরিমাণ গণনা করে।)
console.log("Fuel Calculation");
function calculateFuel(distance) {
  if (distance <= 0) {
    return "Distance cannot be negative or zero.";
  }
  if (distance * 10 < 100) {
    return 100;
  } else {
    return distance * 10;
  }
}

console.log(calculateFuel(10));
console.log(calculateFuel(20));
console.log(calculateFuel(23.5));
console.log(calculateFuel(0));
console.log(calculateFuel(3));

// Buggy Code (Part 2) : Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.

function maxNum(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

console.log(maxNum(1, 2));
console.log(maxNum(3, 1));
console.log(maxNum(-10, 0));

// Pair Management : Given two arguments, return an array which contains these two arguments.

function makePair(a, b) {
  return [a, b];
}

console.log(makePair(1, 2));
console.log(makePair(3, 4));
console.log(makePair(5, 6));

// Compare String by Count of Characters: Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of charcters in the first string is equal to the total number of characters in the second string.

// compare string length
function compareStr(str1, str2) {
  if (str1.length === str2.length) {
    return true;
  } else {
    return false;
  }
}

console.log(compareStr("abc", "def"));
console.log(compareStr("abc", "abcdef"));
console.log(compareStr("abc", "ab"));
console.log(compareStr("abc", "abcde"));

// Is the String Empty: Create a function that returns true if a string is empty and false otherwise. Example: isEmpty("") -> true, isEmpty("abc") -> false, isEmpty(" ") -> false, Note: a string containg only
console.log("is Empty: string check");
function isEmpty(str) {
  if (str.length === 0) {
    return true;
  } else {
    return false;
  }
}
function isEmptyString(str) {
  return str === "";
}

console.log(isEmptyString(""));
console.log(isEmpty(""));
console.log(isEmpty("abc"));
console.log(isEmpty(" "));

// Check if an integer divisible by 5: Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.

function divisibleByFive(number) {
  if (number % 5 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(divisibleByFive(5));
console.log(divisibleByFive(10));
console.log(divisibleByFive(15));
console.log(divisibleByFive(20));
console.log(divisibleByFive(21));

// Multiple of 100: Create a function that takes an integer and returns true if it's divisible by 100, otherwise return false.

function divisible(num) {
  if (num % 100 === 0) {
    return true;
  } else {
    return false;
  }
}

function stringLength(str) {
  // Base case: If the string is empty, return 0
  if (str === "") {
    return 0;
  }

  // Recursive case: Remove the first character and call the function again
  // adding 1 to the result for the removed character
  return 1 + stringLength(str.substring(1));
}

function recursiveLength(str) {
  // Base case: If the string is empty, return 0
  if (str === "") {
    return 0;
  }

  // Recursive case: Return 1 plus the length of the string minus the first character
  return 1 + recursiveLength(str.slice(1));
}

// Example usage:
console.log(recursiveLength("")); // 0
console.log(recursiveLength("Hello")); // 5
console.log(recursiveLength("Recursion")); // 9

// Divide Evenly: Given two integers a and b return true if a can be divided evenly by b, Return false otherwise
console.log("divide evenly");
function diviesEvenly(a, b) {
  if (a % b === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(diviesEvenly(98, 7));
console.log(diviesEvenly(84, 4));
console.log(diviesEvenly(18, 5));

// Return a String as an Integer: Crate a function that takes a string and returns it is an Integer. (All numbers will be whole. all Numbers will be positive)

// parseInt("123")
// parseFloat("123");
// Number("123");
// unary plus operator +
// let x = 5;
// console.log(+x)
// Math.floor("23")
// const string = "123";
// console.log(string*1); Multiplying 1 with string
// console.log(~~"23")

function stringInteger(str) {
  return parseInt(str);
}

console.log(stringInteger("123"));
console.log(stringInteger("456"));
console.log(stringInteger("789"));

// Area of a Rectangle: Create a function that calculates the area of a rectangle. If the arguments are invalid, your function must return -1.

function areaOfRectangle(width, height) {
  if (width <= 0 || height <= 0) {
    return -1;
  }
  return width * height;
}

console.log(areaOfRectangle(10, 5));
console.log(areaOfRectangle(1.5, 2.5));
console.log(areaOfRectangle(10, -5));
console.log(areaOfRectangle(-5, 5));

// Minimal I: If Boolean Then Boolean

/**
 * In this series we're going to see common redundancies and superfluities that make our code unnecessarily complicated and less readable, and we're going to learn how to avoid them.

In line with the spirit of the series, we can summarize the general rules of minimalist code in two simple principles:

Keep your code clean and readable.
While not violating the first principle: get rid of everything superfluous.
In order to achieve this you should:

Deepen your knowledge of logics.
Deepen your understanding of the particular language you're coding with.
I would also add: observe and learn from the pros. Make a habit of checking the Solutions tab after solving a challenge on Edabit. There is absolutely nothing wrong in assimilating features of someone else's coding style, especially if yours is not yet fully developed.

Goal
In the Code tab you will find a code that is missing a single character in order to pass the tests. However, YOUR GOAL is to submit a function as minimalist as possible. Use the tips in the Tips section down below.

Write a function that returns true if the given integer is even, and false if it's odd.

Tips
Using an if statement in order to return boolean or to set a variable to a boolean is redundant.

A function that returns true if a person's age is 18 or greater and false otherwise, could be written as:

function legalAge(age) {
  if(age >= 18) {
    return true
  }
  else {
    return false
  }
}
Notice that age >= 18 will already give us a boolean (true or false). This means that the function can be written in a much simpler and cleaner way:

function legalAge(age) {
  return age >= 18
}
Notes
This is an open series: there isn't a definite list of features for the challenges. Please, do not hesitate to leave your suggestions in the Comment tab.
Readability is indeed a subjective concept. Let's discuss it! Feel free to leave your opinion in the Comments tab.
 */

function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// More cleaner of above code
function isEvenAgain(num) {
  return num % 2 === 0; // return true or flase if
}

// Concatenate first and last name into one string. Given two strings, firstName and lastName, return a single string in the format "last, first".

function concatName(firstName, lastName) {
  return lastName + ",  " + firstName;
}

console.log(concatName("John", "Doe"));
console.log(concatName("Mary", "Jane"));

// Buggy Code: The challenge is to try and fix this buggy code, given the inputs true and false. See the examples below for the expected output.
function has_bugs(arg) {
  if (arg === true) {
    return "sad days";
  } else {
    return "It is a good day";
  }
}

console.log(has_bugs(true));
console.log(has_bugs(false));

// Evaluate an Equation: Create a function that evalutates an equation

function evaluate(arg) {
  return eval(arg);
}

console.log(evaluate("1+2"));
console.log(evaluate("2*3"));
console.log(evaluate("6/(9-7)"));
console.log(evaluate("3+2-4"));

// Remove the first element of an Array: According to the lodash documentation, _.drop creates a slice of an array with n elements dropped from the beginning.

// array.portotype.slice()
function dropFirst(arr, n) {
  return arr.slice(n);
}

console.log(dropFirst([8, 22, 33], 1));
console.log(dropFirst([1, 2, 3], 2));
console.log(dropFirst([1, 2, 3], 5));
console.log(dropFirst([1, 2, 3], 0));
console.log("remove first element of an array");
function removeFirst(arr) {
  arr.shift();
  return arr;
}

console.log(removeFirst([-5, 4, 3, 6, 5, 89]));

// Upvotes vs Downvotes: Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.

function getVoteCount(obj) {
  return obj.upvotes - obj.downvotes;
}

console.log(getVoteCount({ upvotes: 13, downvotes: 0 }));
console.log(getVoteCount({ upvotes: 2, downvotes: 33 }));
console.log(getVoteCount({ upvotes: 10, downvotes: 10 }));

// Reverse an Array: Write a function that reverse an array

function reverseArray(arr) {
  const result = arr.reverse();
  return result;
}

console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArray([5, 4, 3, 2, 1]));
console.log(reverseArray([]));

// Movie theatre admittance: Write a function that checks whether a person can watch an MA15+ rated movie. One of the following two conditions is required for admittance: (1. The person is at least 15 years old. 2. They have parental supervision.)

function acceptIntoMovie(age, isSupervied) {
  return age >= 14 && isSupervied;
}
console.log(acceptIntoMovie(14, true));
console.log(acceptIntoMovie(14, false));
console.log(acceptIntoMovie(15, true));
console.log(acceptIntoMovie(16, false));

// Return Negative : Crate a function that takes a number as an argument and returns negative of that number. Return negative numbers without any change.

// function returnNegative(num) {
//   if (num <= 0) {
//     return num;
//   } else {
//     return num * -1;
//   }
// }

function returnNegative(num) {
  if (num > 0) {
    return -Math.abs(num);
  } else {
    return num;
  }
}
console.log(returnNegative(5));
console.log(returnNegative(-9));
console.log(returnNegative(0));

// Radians to Degrees : Create a function that takes a angle in radians and returns the corresponding angle in degrees.

function radiansToDegrees(rad) {
  return rad * (180 / Math.PI);
}

console.log(radiansToDegrees(1));
console.log(radiansToDegrees(20));
console.log(radiansToDegrees(50));

// Fix the bug: simple array manipulation => Help fix all the bugs in the function incrementItems! It is intended to add 1 to every element in the array!

function incrementItems(arr) {
  const increasedBy = 1;
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + increasedBy;
  }
  return arr;
}

console.log(incrementItems([0, 1, 2, 3]));
console.log(incrementItems([2, 4, 6, 8]));
console.log(incrementItems([-1, -2, -3, -4]));

// Drinks Allowed: A bartender is writing a simple program to determine whether he should serve drinks to someone. He only serves drinks to people 18 and older and when he's not on break.  Given the person's age, and whether break time is in session, create a function which returns whether he should serve drinks.

function serveDrink(age, onBreak) {
  if (age >= 18 && !onBreak) {
    return true;
  } else {
    return false;
  }
}

console.log(serveDrink(17, true));
console.log(serveDrink(19, false));
console.log(serveDrink(30, true));

// Century Crisis :
function futurePeople(population, n) {
  // Number of months in three decades
  const months = 3 * 10 * 12;

  // Total new people added in three decades
  const totalNewPeople = n * months;

  // Future population
  const futurePopulation = population + totalNewPeople;

  return futurePopulation;
}

// Examples
console.log(futurePeople(256, 2)); // ➞ 976
console.log(futurePeople(3248, 6)); // ➞ 5408
console.log(futurePeople(5240, 3)); // ➞ 6320

/**
 * Explanation:
Number of Months Calculation: We calculate the number of months in three decades by multiplying 3 (decades) by 10 (years per decade) by 12 (months per year).

Total New People Calculation: We calculate the total number of new people added over these 360 months by multiplying the number of new people added per month (n) by the number of months.

Future Population Calculation: We add the total number of new people to the current population to get the future population.

The futurePeople function takes the current population and the number of new people added each month as arguments, and returns the future population after three decades. The examples demonstrate how to use the function and what the expected output will be.

 * 
 */

// Format 1: Template Stings

const a = "John";
const b = "Joe";
const c = "Jack";
const template = `There name were : ${a} , ${b} and ${c}.`;
console.log(template);

// Arrow Function: In the Code tab you will find code that is missing a single character in order to pass the tests. However, your goal is to submit a function as minimalist as possible. Use the tips in the tips section below.

const add = () => 2;
const add2 = (x) => 2 + x;
const add3 = (x) => 3 + x;
const add4 = (x) => 4 + x;
const add5 = (x) => 5 + x;
const add7 = (x) => 7 + x;
const add11 = (x) => 11 + x;
console.log(add());
console.log(add2(2));
console.log(add3(3));
console.log(add4(4));
console.log(add5(5));
console.log(add7(7));
console.log(add11(11));

// Using Ternary Operator:
// condition ? result_if_true : result_if_false;

function yeap_nope(arg) {
  state = arg ? "yeah" : "nope";
  return state;
}
console.log(yeap_nope(true));
console.log(yeap_nope(false));

// Minimal IV: if-else if-else Inferno
// function compare_to_100(num){
//     if(num > 100) return "Greater";
//     if(num <100) return "Smaller";
//     return "Equals";
// }

function compare_to_100(num) {
  if (num > 100) {
    return "gretter";
  } else if (num < 100) {
    return "smaller";
  } else {
    return "equals";
  }
}

// Is the string Odd or Even:Given a string, return true if its length is even or false if the length is odd.

const oddOrEven = (char) => {
  if (char.length % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(oddOrEven("cherry"));

// Inches to Feet: Create a function that accepts a measurement value in inches and returns the equivalent of the measurement value in feet.

function inchesToFeet(inches) {
  const feet = inches / 12;
  return feet;
}

console.log(inchesToFeet(12));
console.log(inchesToFeet(36));

// I'd like a New Shade of Blue, Please I have a bucket containing an amount of navy blue paint and I'd like to paint as many walls as possible. Create a function that returns the number of complete walls that I can paint, before I need to head to the shops to buy more.(n is the number of square meters I can paint.w and h are the widths and heights of a single wall in meters.)

function howManyWalls(n, w, h) {
  return Math.floor(n / (w * h));
}

console.log(howManyWalls(100, 4, 5));
console.log(howManyWalls(10, 15, 12));
console.log(howManyWalls(41, 3, 6));

// To the power of : Create a function that takes a base number and an exponent number and returns the calculation.

// function calculatePower(base, exponent) {
//   let result = 1;

//   for (let i = 1; i <= exponent; i++) {
//       result *= base;
//   }

//   return result;
// }

function calculatePower(base, exponent) {
  return Math.pow(base, exponent);
}

console.log(calculatePower(3, 3));
console.log(calculatePower(5, 5));
console.log(calculatePower(10, 10));

// Return the last element of an array: Create a function that accepts an array and returns the last item in the array.

function lastElement(array) {
  return array[array.length - 1];
}
// const lastElement = array.slice(-1);
// const lastElement = array.pop();
console.log(lastElement([1, 2, 3, 4, 5]));
console.log(lastElement(["a", "c", "d", "e", "f", "x"]));

// String and Number Conversions:  You need to create two functions to substitute toString() and parseInt(); A function called intToString() that converts integers into strings and a function called stringToInt() that converts strings into integers.
function intToString(num) {
  return num.toString();
}

console.log(intToString(10));
console.log(typeof intToString(10));

function stringToInt(str) {
  // return Number(str);
  return parseInt(str);
}

console.log(stringToInt("12"));

// On/Off Switch : Create a function that returns how many possible arrangements can come from a certain number of switches (on / off). In other words, for a given number of switches, how many different patterns of on and off can we have?

function posCom(num) {
  return Math.pow(2, num);
}

console.log(posCom(1));
console.log(posCom(3));
console.log(posCom(10));

// Among Us Imposter Formula Create a function that calculates the chance of being an imposter. The formula for the chances of being an imposter is 100 × (i / p) where i is the imposter count and p is the player count. Make sure to round the value to the nearest integer and return the value as a percentage.
function imposterFormula(i, p) {
  // calculate the formula
  const percentage = (i / p) * 100;
  // round the value to the nearest integer
  const roundedPercentage = Math.round(percentage);
  // return the value as a percentage
  return `${roundedPercentage}%`;
}
console.log(imposterFormula(1, 10));
console.log(imposterFormula(2, 5));
console.log(imposterFormula(1, 8));

// Find out the leap year: A leap year happens every four years, so it's a year that is perfectly divisible by four. However, if the year is a multiple of 100 (1800, 1900, etc), the year must be divisible by 400. Write a function that determines if the year is a leap year or not.

function leapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  } else {
    return false;
  }
}

// function leapYear(year) {
//   return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
// }

// Word Without First Character: Create a function taht takes a word and returns the world without including the first character.

function newWord(str) {
  return str.slice(1);
}
console.log(newWord("apple"));
console.log(newWord("cherry"));
console.log(newWord("plum"));

// Delete first character of a strng in JavaScript
// slice()
// substr()
// replace()
// substring()
// String.prototype.split()

// string.slice(startingIndex, endingIndex);
// string.substr(startIndex, EndIndex);
// string.replace(searchValue, newValue);
// string.substring(index);

function newWordAgain(str) {
  // str.split() return an array ['string']
  // str.split('') return ['s','t','r','i','n','g']
  //str.split("").slice(1) return ['t','r','i','n','g']
  // str.split("").slice(1).join() return t,r,i,n,g

  // str.split("").slice(1).join(""); return tring

  return str.split("").slice(1).join("");
}

console.log(newWordAgain("Hello"));

// Flip the boolean: Due to a programming concept known as truthiness, certain values can be evaluated to (i.e. take the place of) booleans. For example, 1 (or any number other than 0) is often equivalent to true, and 0 is often equivalent to false.

function flipBoolean(argument) {
  return argument ? 0 : 1;
}

console.log(flipBoolean(true));
console.log(flipBoolean(false));
console.log(flipBoolean(1));
console.log(flipBoolean(0));

//Name Greeting! : Create a function that takes a name and returns a greeting in the form of a string. Don't use a normal function, use an arrow function.

const helloName = (name) => "Hello " + name + "!";
console.log(helloName("Gerald"));
console.log(helloName("Tiffany"));
console.log(helloName("Ed"));

// Is the number even or odd: Create a function that takes a number as an argument and returns "even" for even numbers and "odd" for odd numbers.

function isEvenOrOdd(number) {
  if (number % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

console.log(isEvenOrOdd(3));
console.log(isEvenOrOdd(146));
console.log(isEvenOrOdd(64));
console.log(isEvenOrOdd(19));

// Fix the Error: Check Whether a Given Number is Odd
function isOdd(num) {
  return num % 2 !== 0;
}

console.log(isOdd(-5));
console.log(isOdd(25));
console.log(isOdd(0));
console.log(isOdd(13));

// Stack the boxes: Here's an image of four models. Some of the cubes are hidden behind other cubes. Model one consists of one cube. Model two consists of four cubes, and so on... Write a function that takes a number n and returns the number of stacked boxes in a model n levels high, visible and invisible.

function stackBoxes(n) {
  return n * n;
}

// Examples:
console.log(stackBoxes(1)); // ➞ 1
console.log(stackBoxes(2)); // ➞ 4
console.log(stackBoxes(3)); // ➞ 9
console.log(stackBoxes(0)); // ➞ 0
console.log(stackBoxes(4)); // ➞ 16

// Tringle and Parallelogram Area Finder: Write a function that accepts base (decimal), height (decimal) and shape ("triangle", "parallelogram") as input and calculates the area of that shape. Area of a triangle is 0.5 * b * h,(Area of a parallelogram is b * h,Assume triangle and parallelogram are the only inputs for shape.)

function areaShape(b, h, shape) {
  if (shape === "triangle") {
    return 0.5 * b * h;
  } else if (shape === "parallelogram") {
    return b * h;
  } else {
    return "no shape";
  }
}

console.log(areaShape(2, 3, "triangle"));
console.log(areaShape(8, 6, "parallelogram"));
console.log(areaShape(2.9, 1.3, "parallelogram"));

// // Convert an Array to String: Create a function that takes an array of numbers or letter and return an string

function arrayToString(arr) {
  return arr.join("");
}
console.log(arrayToString(["foo", "bar"]));
console.log(arrayToString(["a", "b", "d", "u", "l"]));

// Concatenating Two Integer Arrays: Create a function to concatenate two integer array

function concat(arrayOne, arrayTwo) {
  // return arrayOne.concat(arrayTwo); // ok
  return [...arrayOne, ...arrayTwo];
}
console.log(concat([1, 2, 3, 4, 5, 6], [7, 8, 9, 10]));
console.log(concat([7, 8], [10, 9, 1, 1, 2]));
console.log(concat([4, 5, 1], [3, 3, 3, 3, 3]));

// Find the Index: Create a function and takes an array and a string as arguments and return the index of the string

function findIndex(array, argument) {
  return array.indexOf(argument);
}

console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"));

console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue"));

console.log(findIndex(["a", "g", "y", "d"], "d"));
console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple"));

// Array Indexing: Given an index and an array, return the value of the array with the given index.

function valueAt(arr, value) {
  value = Math.floor(value);
  return arr[value];
}

console.log(valueAt([1, 2, 3, 4, 5, 6, 7], 10 / 2));
console.log(valueAt([1, 2, 3, 4, 5, 6], 8.0 / 2));
console.log(valueAt([1, 2, 3, 4], 6.535355314 / 2));

// find the index (part 1): Create a function that find the index of a given item

function search(arr, element) {
  return arr.indexOf(element);
}

console.log(search([1, 5, 3], 5));
console.log(search([9, 8, 3], 3));
console.log(search([1, 2, 3], 4));

//Buggy Code (Part 3): Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.
function sumArray(array) {
  let sum = 0;
  // for (var i = 0; i < array.length; i++) {
  //     sum = sum + array[i];
  // }
  // array.forEach((num) => (sum += num));

  sum = array.reduce((a, c) => {
    return a + c;
  }, 0);
  return sum;
}

console.log(sumArray([1, 2, 3, 4, 5]));
console.log(sumArray([-1, 0, 1]));
console.log(sumArray([0, 4, 8, 12]));

//Find the index part2: Create a function that searches for the index of a given item in an array. If the item is present, it should return the index, otherwise, it should return -1.

function search(array, element) {
  return array.indexOf(element);
}

console.log(search([1, 2, 3, 4], 3));
console.log(search([2, 4, 6, 8, 10], 8));
console.log(search([1, 3, 5, 7, 9], 11));

//Word Numbers! Create a function that returns a number, based on the string provided. Here is a list of all digits:

function world(arg) {
  switch (arg.toLowerCase()) {
    case "one":
      return 1;
      break;
    case "two":
      return 2;
      break;
    case "three":
      return 3;
      break;
    case "four":
      return 4;
      break;
    case "five":
      return 5;
      break;
    case "six":
      return 6;
      break;
    case "seven":
      return 7;
      break;
    case "eight":
      return 8;
      break;
    case "nine":
      return 9;
      break;
    case "zero":
      return 0;
      break;
    default:
      return "out of range";
      break;
  }
}

console.log(world("one"));
console.log(world("two"));
console.log(world("three"));
console.log(world("four"));
console.log(world("five"));
console.log(world("six"));
console.log(world("seven"));
console.log(world("eight"));
console.log(world("nine"));
console.log(world("zero"));
console.log(world("minar"));

// Check if an array contains a  Given number: Write a function to check if an array contains a particular number

function check(arr, ele) {
  return arr.includes(ele);
}

console.log(check([1, 2, 3, 4, 5], 3));
console.log(check([1, 1, 2, 1, 1], 3));
console.log(check([5, 5, 5, 6], 5));
console.log(check([], 5));

// minimal 2
function oddOrEven(n) {
  return n % 2 ? "odd" : "even";
  // return n % 2 === 0 ? "even" : "odd";
}
console.log(oddOrEven(20));
console.log(oddOrEven(21));

// Numbers of stickers:Given a Rubik's Cube with a side length of n, return the number of individual stickers that are needed to cover the whole cube. formula 6a^2

//(The Rubik's cube of side length 1 has 6 stickers.The Rubik's cube of side length 2 has 24 stickers.The Rubik's cube of side length 3 has 54 stickers.)

function howManyStickers(n) {
  return 6 * n * n;
}

console.log(howManyStickers(1));
console.log(howManyStickers(2));
console.log(howManyStickers(3));

/**
 
Burglary Series (19): Prevent Changes
The police send you an electronic statement for you to sign. As you begin to sign, an error pops up. Apparently, they sent you a protected document.

This challenge is a bit different as the function you are given already contains some code that you should not change or remove. Also, don't do a return statement, it is already included. Your task is, given an object, prevent changes to that object.

Examples
const obj = { noChanges: true }

preventChanges(obj) {
  // Write your code here, don't use a return statement

  obj.noChanges = false;
  obj.signature = "whatever"
  return obj;

}  ➞ { noChanges: true }
Notes
If you have suggestions on how to present or further test this challenge please leave me a comment. Thanks!
This series is part of a collection that focuses on objects. If you are interested in following the breathtaking narrative skills of yours truly or just do some object focused challenges (the challenges are ordered in ascending difficulty order), you can more easily do that here.

 */

const obj = { noChange: true };

function preventChanges(obj) {
  Object.freeze(obj);
  obj.noChange = false;
  obj.signature = "whatever";
  return obj;
}

console.log(preventChanges(obj));

// Four passenger and a Driver: A typical car can hold four passengers and one driver, allowing five people to travel around. Given n number of people, return how many cars are needed to seat everyone comfortably.

function carsNeeded(n) {
  return Math.ceil(n / 5);
}

console.log(carsNeeded(5));
console.log(carsNeeded(11));
console.log(carsNeeded(0));
console.log(carsNeeded(6));

// check string for spaces: create a function that returns true if a string contains any spaces

function hasSpaces(str) {
  return str.includes(" ");
}

console.log(hasSpaces("hello"));
console.log(hasSpaces("hello world!"));
console.log(hasSpaces(" "));
console.log(hasSpaces(""));
console.log(hasSpaces(",.ljjjd"));

// Kinetic energy:
function kineticEnergy(m, v) {
  return 0.5 * m * v * v;
}

console.log(kineticEnergy(60, 3));
console.log(kineticEnergy(45, 10));
console.log(kineticEnergy(63.5, 7.35));
console.log(kineticEnergy(65, 13));
//Volueme of a Box : Create a function that takes an object argument sizes (contains width, length, height, keys) and returns the volume of the box.

function volumeOfBox(sizes) {
  return sizes.width * sizes.length * sizes.height;
}

console.log(volumeOfBox({ width: 2, length: 5, height: 1 }));
console.log(volumeOfBox({ width: 4, length: 2, height: 2 }));
console.log(volumeOfBox({ width: 2, length: 3, height: 5 }));
