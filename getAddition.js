
//======< Special One is (04) here,,,,Which is a new one >======

//(01)
//      (1 + 2 + 3 + 4 + 5 + 6 + 7 == ?)
/*============================
let sum = 0;
for (let i = 1; i <= 7; i++){
  sum = sum + i;
  console.log  (i, sum)
}
============================*/




//(02)
//      (1 + 2 + 3 + 4 + 5 + 6 + 7 * 8 * 9 * 10 == ?)
/*============================
let sum = 0;
for (let i = 1; i <= 10; i++){
  sum = sum + i;
  console.log(i, sum)
}
============================*/






//(03)
//(1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 + 11 + 12 + 13 + 14 + 15  == ?)
/*============================
let addition = 0;
for (let i = 1; i <= 15; i++){
  addition = addition + i;
  console.log(i, addition)
}
============================*/



//(04)
//(i er j man ber hobe tar shathe 20 jog hobe) jemon-
// 1+20 = 20; 20+20 = 40; 40+20 = 60;
//=============================================
var addition = 0;
for (let i = 1; i <= 20; i++){
  addition = addition + 20;
  // console.log(i, addition)
}


//=========Conver it with a function=============

function sumOfNumbers(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++){
    sum = sum + i;
    console.log(i, sum);
  }
  return sum;
}
const result = sumOfNumbers(7);
console.log("Now it's done");


//=============================================