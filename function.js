//====================================================>
/*======< Function is here >======< 8 Example >======*/
//====================================================>



// (01)
/*==================================================
// Function bujar jonno 1st ami ekta normal var declare kortesi....

var number = 5;
var total = number * number; // For display square output
console.log("Result = " + total);

==================================================*/





// (02)
/*==================================================
// ai same jinis k e ami ekta function declare kore tar body r modde diye dilam.....

function Math(number) {
  var number = 5;
var total = number * number;
console.log("Result = " + total);
}

//calling this function by its name for display output......

Math();

==================================================*/





// (03)
/*==================================================
function Math(number) {
var total = number * number;
console.log("Result = " + total);
}

//aikhane just function bodyr modde j value ta declare kora chilo ,,,, seita k amra function k jeikhane call koresi seikhane diye dilam,,, just it......

Math(5);

==================================================*/

// (04)
/*==================================================
function sum(num1, num2) {
  var total = (num1 + num2);
  console.log("Result = " + total)
}
sum(50, 90);
==================================================*/




// (05)
/*==================================================
function sum(num1, num2) {
  var total = (num1 + num2);
  console.log("Result = " + total)
}
sum(50, 90);
sum(10, 20);
sum(40, 60);
sum(20, 50);
sum(80, 60);
// Aivabe jotobar call korbo toto bar output dekhabe,,,, even new value add korle new result show korbe

==================================================*/







// (06): Return KeyWord

/*==================================================
function Math(number) {
let total = number * number;
  return total
}

let Result = Math(5);

console.log("Result = " + Result); +// return keyword use korle console.log() sob somoy bahire hobe
==================================================*/








// (07)
/*==================================================
function addition(sum1, sum2) {
  let result = sum1 + sum2;
  console.log('sum = ' + result);
}

function subtraction(num1, num2) {
  let result = num1 - num2;
  console.log('num = ' + result);
}

addition(120, 95);
addition(25, 60);

subtraction(120, 95);
subtraction(225, 60);
==================================================*/







// (08)
/*==================================================|

// Self Invoking Function
(1)
(function sleep() {
  console.log('Good Night')
})();

//========>

(2)
(function() {
  console.log('Good Night')
})();

==================================================*/










// (09)Leap Year
/*==================================================|
function leapYear(Year) {
  const remainder = Year % 4; //Year k 4 diye vag korle vag shesh koto thake ta ber korar jonno
  if (remainder == 0) {   // vag shesh == 0 ?
    console.log(Year, "Is A Leaf Year");
  }
  else {
    console.log(Year, "Is Not A Leaf Year");
  }
}

 leapYear(1998);
==================================================*/





// (10)Leap Year
/*==================================================|
function leapYear(Year) {
  const remainder = Year % 4;
  if (remainder == 0) {  
    return true;
  }
  else {
    return false;
  }
}

let isIt =( "It is " + leapYear(1998));

console.log(isIt);

==================================================*/



//==================================================
// Convert inches to feet

function inchesToFeet(inches) {
  const feet = inches / 12;
  return feet;
}
const ShakilInches = 72;
const ShakilFeet = inchesToFeet(ShakilInches);
console.log(ShakilFeet);

//==================================================




