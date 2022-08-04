
//Multiplication is called factorial

// (1 * 2 * 3 * 4 * 5 * 6 * 7 == ? )

//(01) Wrong
/*============================

function sumOfNumbers(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++){
    sum = sum * i;
    console.log(i, sum);
  }
  return sum;
}
const result = sumOfNumbers(7);
console.log("Now it's done");

============================*/



//(02) Right
/*============================

function sumOfNumbers(number) {
  let sum = 1;
  for (let i = 1; i <= number; i++){
    sum = sum * i;
    console.log(i, sum);
  }
  return sum;
}
const result = sumOfNumbers(7);
console.log("Now it's done");

============================*/


//(02) Right and its a while loop
/*============================
function sumOfNumbers(number) {
  let i = 1;
  let sum = 1;
  while (i <= number){
    sum = sum * i;
    console.log(i, sum);
    i++;
  }
  return sum;
}
const result = sumOfNumbers(7);
console.log("Now it's done");
============================*/