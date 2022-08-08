



//Exersice-1
//Write a function to check odd or even number.
//You need to do it in 2 ways- has return and no return.
//=======================================================






//=====< No return >=====
/*
function getSum(number) {
  if (number % 2 !== 0) {
    console.log('This is an odd number ')
  }
  else {
    console.log('This is an even number')
  }
}
getSum(181);
*/







//=====< Has return >=====
/* 
function getSum(number) {

  if (number % 2 !== 0) {
    return 'This is an odd number';
  }
  else {
    return 'This is an even number';
  }
}
const result = getSum(505);
console.log(result);    // console.log(getSum(505));

*/
//=======================================================







// Exersice-2
// Write a function which will take 3 integers and return the largest number.
// You need to do it in 2 ways- has return and no return.
//=======================================================

//No return
/*
function getLargeNumber(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
    console.log(num1, ' is the largest number.')
}
  else if(num2 > num1 && num2 > num3) {
    console.log(num2, 'is the largest number.')
  }
    else {
      console.log(num3, ' is the largest number.')
  }
}

getLargeNumber(25, 50, 36);
*/


//Has return
/*
function getLargeNumber(sum1, sum2, sum3) {
  if (sum1 > sum2 && sum1 > sum3) {
    return (sum1 + ' is the largest number.');
  }
  else if (sum2 > sum1 && sum2 > sum3) {
    return (sum2 + ' is the largest number.');
  }
  else {
    return (sum3 + ' is the largest number.');
  }
}

const getResult = getLargeNumber(255, 138, 532);
console.log(getResult);
*/

//=======================================================









// Exersice-3
// Write a program to find the total price of those product object.
// { name: “Laptop”, color: “black” , price: 12000 }
// { name: “Monitor”, color: “gray” , price: 5000 }
// { name: “Mobile”, color: “black” , price: 2500 }
//=======================================================
/*
const Dell = {
  name : 'leptoop',
  color: 'black',
   price : 12000
}
const Samsung = {
  name : 'leptoop',
  color: 'gray',
   price : 5000
}
const Apple = {
  name : 'leptoop',
  color: 'black',
   price : 2500
}

// console.log(Dell.price);
// console.log(Samsung.price);
// console.log(Apple.price);

const totalPrice = Dell.price + Samsung.price + Apple.price

console.log(totalPrice);
*/
//=======================================================











// Problem-1
//Write a function that will take a radius of a circle and will return the area of circle. [ Hint: Area of Circle = 𝝅𝒓𝟐]

//Meaning of that Question: emon ekti function declare koro , jekhane ekti britter beshardo perameter hisebe thakbe ebong britter khetrofol ber koro.

//=======================================================
/*
function areaOfCircle(radius) {
  const pi = 3.1416;
  const area = pi * radius * radius;
  return area.toFixed(2);
  //.toFixed is for the set 2 digit after point of number,,,, By using toFixed a number is convert by a string.
}
console.log(areaOfCircle(5));
  */
 //======================================================= 


  








//Write a function that will take a radius of a circle and will return the area of circle. [ Hint: Area of Circle = 𝝅𝒓𝟐]
 //=======================================================
/*
function areaOfCircle(r) {
  const pi = 3.1416;
  const area = pi * r * r;
  return area.toFixed(2);
}
console.log(areaOfCircle(7));
*/
 //=======================================================







// Problem - 2
// Write a function that will take feet as the input parameter and will convert it into inch and will return the result in inch.
 //=======================================================

function feetToInches(feet) {
  const inchesPerFeet = 12;
  const inchesValue = feet * inchesPerFeet;
  return inchesValue;
  }
const result = feetToInches(5);
console.log(result);


  //=======================================================
