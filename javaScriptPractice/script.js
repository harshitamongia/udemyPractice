console.log('Learning JS ');

// Helper Functions
function print(printMe) {
    console.log(printMe)
}

/*
Learing about Variables and dataypes
*/

/*
// Declaring and Printing Two strings 
// String A
var firstName = 'John';
console.log(firstName);

// String B and Int A
var lastName = 'Smith';
var age = 28;

// Using Boolean
var fullAge = true;
console.log (fullAge);

// Declaring and Using String C
var job = 'Teacher';
console.log(job);

// How to declare temp variables using "_ and $" 
var _rainMan = 'Rain Man';
var $mainMan = 'Main Man';
console.log(_rainMan, $mainMan);

// ----------------------------------

// Variable mutation and type coersion

var firstName = 'John';
var age = '23'
console.log(firstName + ' ' + age);

// Type Coersion : the process of converting value from one type to another 
// (such as string to number, object to boolean, and so on). 
// Any type, be it primitive or an object, is a valid subject for type coercion. 
// For Example here " console.log(firstName + ' ' + age); " the variable age is a 
// number but it is printed as a string just so that it becomes a part of the bigger 
// string in the console log

var job, isMarried;
job = 'teacher';
isMarried = 'false';
console.log(firstName + ' is a ' + age + ' year old ' + job + ". Is he married? " + isMarried);

/*
*********************** 
// Variable Mutation - age was a number before and below we assign it a string value. JS can change/mutate the type 
// of the variable 'on the fly'. This is called the Variable Mutation
*********************** 

age = "Twenty Eight";
job = "Driver";
alert(firstName + ' is a ' + age + ' year old ' + job + ". Is he married? " + isMarried);

var lastName = prompt('What is his last name? ');
console.log(firstName + ' ' + lastName)
*/

/*
*********************** 
// Operators
*********************** 

// "  '/' '*'  '-'  '+'  "
// "  '>' '<' "

***********************/

/*
**********************
// typeof - gives you the type of the entity in front of it
********************** 
var x;
console.log(typeof x);      // Undefined
console.log(typeof xy);     // Undefined
console.log(typeof '12');   // String
console.log(typeof 12);     // Number

************************/

/*
**********************
var currentYear = 2019;
var legalAge = 18;
var yearJohn = 1989;

const calculatedAgeJohn = currentYear - yearJohn;
console.log(calculatedAgeJohn);
var isLegalAge = calculatedAgeJohn >= legalAge;
console.log(isLegalAge);

**********************
// average 
**********************

var ageJohn = calculatedAgeJohn;
var ageMark = 36;
var average = (ageJohn + ageMark) / 2;
console.log(average);

var x, y;
x = y = 26;
*/

/********************************************/

/*

// Coding Challenge #1
 
var heightJohn = 1.7;
var heightMark = 1.6;
var massJohn = 50;
var massMark = 60;

var BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIJohn);
var BMIMark = massMark / (heightMark * heightMark);
console.log(BMIMark);

var isMarkHigher = BMIMark > BMIJohn;
console.log("Is Mark's BMI greater thatn John's ? " + isMarkHigher);

*********************************************/


/*********************** 
// If else
***********************/

/***********************
var fisrtName = "John"
var civilStatus = 'single'

if (civilStatus === 'married'){
    console.log(fisrtName + ' is married!');
} else{
    console.log(fisrtName + ' will hopefullly marry soon :) ');
}

var isMarried = true;
if (isMarried){
    console.log(fisrtName + ' is married!');
} else{
    console.log(fisrtName + ' will hopefullly marry soon :) ');
}

var heightJohn = 1.7;
var heightMark = 1.6;
var massJohn = 50;
var massMark = 60;

var BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIJohn);
var BMIMark = massMark / (heightMark * heightMark);
console.log(BMIMark);

if (BMIMark > BMIJohn){
    console.log('Mark\'s BMI is greater than John\'s BMI ')
} else {
    console.log('John\'s BMI is greater than Mark\'s BMI ')
}

*********************************************/

/*********************************************

// Boolean Logic

// var firstName = 'John';
// var age = 19;

// if (age < 13){
//     console.log(firstName + ' is a boy.');
// } else if ( age >= 13 && age < 20){ // Between 13 and 20 === age >= 13 AND age < 20
//     console.log(firstName + ' is a teenager.')
// } else if ( age >= 20 && age < 30) {
//     console.log(firstName + ' is a young man')
// } else {
//     console.log(firstName + ' is a man.');
// }

// var firstName = 'John';
// var age = 14;

*********************************************/












// /*********************************************

// // Ternary Operator and Switch Statements

// *********************************************/

// // Ternary Statement

// var firstName = 'John';
// var age = '30';

// age >= 18 ? console.log(firstName + ' drinks beer.') : console.log( firstName + ' drinks juice.');
// var drink = age >= 18 ? 'beer' : 'juice';
// console.log(firstName + ' drinks '  + drink + '.');

// // Switch Statement

// var job = 'designer'
// switch(job) {
//     case 'teacher':
//         console.log( firstName + " teaches others how to code");
//         break;
//     case 'designer':
//         console.log( firstName + " designs things");
//         break;
//     default:
//         console.log( firstName + " teaches others how to code");
// }

// // Switching True - basically if the case is true then that is executed

// switch(true){
//     case (age < 13) : 
//         console.log( `${firstName} is a Boy` );
//         break;
//     case (age >= 13 && age < 20) : 
//         console.log( `${firstName} is a Teenager` );
//         break;
//     case (age >= 20 && age < 30) : 
//         console.log( `${firstName} is a Young Man` );
//         break;
//     default : 
//         console.log(`${firstName} is a Man`);
// }










// /*********************************************

// // Truthy and Falsy Values and Equality Operators

// *********************************************/


// // Falsy values: undefined, null, 0, '', NaN
// // Truthly values: Not Falsy values.

// // Note: This is a way to check if a variable has been defined or not.
// var height;
// height = '23';

// if (height || height === 0){
//     console.log('The variable is defined');
// } else {
//     console.log('The variable has NOT been defined');
// }


// // Equality operators

// if (height === 23){
//     console.log(`This equaity == does type coersion!`)
// } else {
//     console.log(`This doesn\'t work!`);
// }










/*********************************************

// Coding challenge 2

*********************************************/


/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/


/*********************************************
// // Test Cases:
*********************************************/

// var teamJohnAverage = ((89+120+103)/3)
// var teamMikeAverage = ((116+94+123)/3)
// var teamMaryAverage = ((97+134+105)/3)


// var teamJohnAverage = ((89+120+103)/3)
// var teamMikeAverage = ((89+120+103)/3)
// var teamMaryAverage = ((97+134+105)/3)

// var teamJohnAverage = ((89+120+103)/3)
// var teamMikeAverage = ((116+94+123)/3) 
// var teamMaryAverage = ((89+120+103)/3)

// var teamJohnAverage = ((89+120+103)/3)
// var teamMikeAverage = ((116+94+123)/3)
// var teamMaryAverage = ((116+94+123)/3)

// var teamJohnAverage = ((89+120+103)/3)
// var teamMikeAverage = ((89+120+103)/3)
// var teamMaryAverage = ((89+120+103)/3)


// console.log(`John = ${teamJohnAverage} and Mike = ${teamMikeAverage} and Mary = ${teamMaryAverage}`)

// if (teamMikeAverage === teamJohnAverage && teamJohnAverage === teamMaryAverage && teamMikeAverage === teamMaryAverage) {
//     console.log("It's a 3-way tie with an average score of = " + teamJohnAverage);
// } else if (teamMikeAverage === teamMaryAverage && teamMikeAverage > teamJohnAverage) {
//     console.log("Team Mike tied in lead with Team Mary with an average score of = " + teamMikeAverage);
// } else if (teamMaryAverage === teamJohnAverage && teamMaryAverage > teamMikeAverage) {
//     console.log("Team Mary tied in lead with Team john with an average score of = " + teamMaryAverage);
// } else if (teamJohnAverage === teamMikeAverage && teamJohnAverage > teamMaryAverage) {
//     console.log("Team John tied in lead with Team Mike with an average score of = " + teamJohnAverage);
// } else if (teamJohnAverage > teamMikeAverage && teamJohnAverage > teamMaryAverage) {
//     console.log("Team John Wins with an average score of = " + teamJohnAverage);
// } else if (teamMikeAverage > teamJohnAverage && teamMikeAverage > teamMaryAverage) {
//     console.log("Team Mike Wins with an average score of = " + teamMikeAverage);
// } else if (teamMaryAverage > teamJohnAverage && teamMaryAverage > teamMikeAverage) {
//     console.log("Team Mary Wins with an average score of = " + teamMaryAverage);
// } else {
//     console.log("Some Error")
// }


// switch(true){
//     case (teamMikeAverage === teamJohnAverage && teamJohnAverage === teamMaryAverage && teamMikeAverage === teamMaryAverage) : 
//         console.log("It's a 3-way tie with an average score of = " + teamJohnAverage);
//         break;
//     case (teamMikeAverage === teamMaryAverage && teamMikeAverage > teamJohnAverage) : 
//         console.log("Team Mike tied in lead with Team Mary with an average score of = " + teamMikeAverage);
//         break;
//     case (teamMaryAverage === teamJohnAverage && teamMaryAverage > teamMikeAverage) : 
//         console.log("Team Mary tied in lead with Team john with an average score of = " + teamMaryAverage);
//         break;
//     case (teamJohnAverage === teamMikeAverage && teamJohnAverage > teamMaryAverage) : 
//         console.log("Team John tied in lead with Team Mike with an average score of = " + teamJohnAverage);
//         break;
//     case (teamJohnAverage > teamMikeAverage && teamJohnAverage > teamMaryAverage) : 
//         console.log("Team John Wins with an average score of = " + teamJohnAverage);
//         break;
//     case (teamMikeAverage > teamJohnAverage && teamMikeAverage > teamMaryAverage) : 
//         console.log("Team Mike Wins with an average score of = " + teamMikeAverage);
//         break;
//     case (teamMaryAverage > teamJohnAverage && teamMaryAverage > teamMikeAverage) : 
//         console.log("Team Mary Wins with an average score of = " + teamMaryAverage);
//         break;
//     default:
//         console.log("Some Error")

// }


// function average() {
//     var totalScore = 0 
//     var avg = 0
//     for (var i = 1; i < 4; i++) {
//         totalScore += parseInt(prompt("Enter Score"));
//         //console.log(totalScore)
//         avg = (totalScore / i)
//         //console.log(avg)
//     }
//     console.log(avg)
//     return avg;
// }

// var numberOfTeams = parseInt(prompt('Enter Number of Teams'));

// for (numberOfTeams; numberOfTeams > 0 ; numberOfTeams--){
//     name = prompt('Enter team name')
//     var avg = average()
//     console.log(`Team ${name}'s average score = ${avg}`)
// } 




// i === 3 ? console.log(` ${score/i}`) : console.log('Input next score')







// /*********************************************

// // Functions

// *********************************************/


// function calculateAge (birthYear) {
//     return 2019 - birthYear;
// }

// var ageMike = calculateAge(1990);
// console.log(`Mike is ${ageMike} year old ${typeof(`Mike ${ageMike}`)}`);
// var ageJohn = calculateAge(1999);
// console.log(ageJohn);
// var ageMary = calculateAge(1890);


// function yearsToRetire (birthYear, firstName) {
//     var age = calculateAge(birthYear);
//     var retirement = 65 - age;
//     retirement < 0 ? console.log(firstName + ' is already retired') : console.log( firstName + ' retires in ' + retirement + ' years')
// }

// yearsToRetire(1990, 'John');
// yearsToRetire(1940, 'Mike');
// yearsToRetire(1987, 'Jane');












/*********************************************

// Functions Statements and Expressions

*********************************************/

// Function Declaration
// function whatDoYouDo (job, fistname) {}


// var whatDoYouDo = function (job, firstName) {
//     switch (job){
//         case 'teacher':
//             return firstName + ' teaches kids how to code';
//         case 'driver' :
//             return firstName + ' drives a car';
//         case 'designer' :
//             return firstName + ' designs websites';
//         default:
//             return firstName + ' does something else';  
//     }
// }

// console.log(whatDoYouDo('teacher', 'john'));
// console.log(whatDoYouDo('designer', 'Mark'));
// console.log(whatDoYouDo('Queen', 'Jane'));
// console.log(whatDoYouDo('something1' , '1something'))

// // Statement vs Expressions - This is not tied to just functions' it is a global concept.
// // Expression returns a value that needs to be handled
// // Eg: 
// // - typeof 23
// // - if (a>b){ } // the condition here was an expression
// // - 2 + 3

// // Statement doesn't return a value.
// // if (true) {console.log ("23")};
// // The if statement in here does't return anything that needs to be handled. Infact it's return value is displayed as undefined. The only output is due to the console.log()} 

















/*********************************************

// Arrays

*********************************************/


var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948); // not used as much

console.log(names[2]);
console.log(names);
console.log(names.length);

// Array mutation

names[1] = 'Ben';
console.log(names);

// Using Array Mutation to add elements on positions that don't exist
// PS, this creates : (6) ["John", "Ben", "Jane", empty × 2, "mary"] the empty space if not handled properly.
// names[5] = 'mary';
// console.log(names);

// if you want to instead add element to the end of the array

names[names.length] = "Mary";
console.log(names);

// different datatypes in one data structure i.e. the following array

// Array [FirstName, LastName, BirthYear, Job, isMarried - which is a boolean value]
var john = ['John', 'Smith', 1990, 'teacher', false]
console.log(john);

// Using Array methods

// Adding element to the last position in the array using array.push()
john.push('blue');
print(john);

// Adding element to the first postion in the array using array.unshift()
john.unshift('Mr. ');
print(john);

// Removing the last element in the array using array.pop()
john.pop();
print(john);

john.pop();
print(john);

// removing the first element from the beginning
john.shift();
print(john)

john.shift();
print(john)

// Position of an element in the array can be looked up using the array.indexOf(elementYouWantToFind)
// If elementYouWantToFind is not part of the array you are looking it up in, then the output will be "-1"
print(john.indexOf(1990))

// This is also used to check/test if the elementYouWantToLookUp is part of the array or not
print(john.indexOf(12))

// using indexOf with ternary operator for condtional 
var isPartOf = john.indexOf('Designer') === -1? "NOT a part of" : "is a part of";
print(isPartOf);

var isPartOf = john.indexOf('teacher') === -1? "NOT a part of" : "is a part of";
print(isPartOf);

print(john.indexOf("teacher"));