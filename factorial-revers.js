
//Revers mood of multiplications


//(01)
//Revers mood run (9 to 1)
/*============================

function factorial(number) {
  for (let i = number; i >= 1; i--){
    console.log(i)
  }
}
factorial(9)

============================*/

//(02)
//Revers mood run (9 to 1)


function factorial(number) {
  let result = 1;
  for (let i = number; i >= 1; i--){

    result = result * i;
    console.log(i);
  }
  return result;
}

const Multiplication = factorial(9)
console.log("factorial of :", Multiplication);
console.log("Now it's done.");
