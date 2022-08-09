
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

// (1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9 * 10 * 11 * 12 == ? )
/*============================
function sumOfNumbers(number) {
  let sum = 1;
  for (let i = 1; i <= number; i++){
    sum = sum * i;
    console.log(i, sum);
  }
  return sum;
}
const result = sumOfNumbers(12);
console.log("Now it's done");

============================*/




//(03) Right and its a while loop
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








//(04) module : 22.5
// Use add and multiplication to calculate wood requirements

/*
***Fixed value: per item wood requirments
1. Chair ---> 3 cft
2. Table ---> 10 cft
3. Bed   ---> 50 cft

***very/ changeble value : quantity
*/


function woodCalculator(chairQuantity, tableQuantity, bedQuentity) {
  const perChair = 3; 
  const perTable = 10; 
  const perBed = 50; 

        const totalchairWood = perChair * chairQuantity;
        const totaltableWood = perTable * tableQuantity;
        const totalBedWood = perBed * bedQuentity;
  //  console.log(totalchairWood, totaltableWood, totalBedWood)

  const totalWood = totalchairWood + totaltableWood + totalBedWood;
  return totalWood;
 }
const totalWood = woodCalculator(0, 0, 1);
console.log('total wood required: ', totalWood);





















































