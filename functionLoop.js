

// Write a function findOddSum() that will take the array [5, 7, 8, 10, 45, 30] as the input parameter and will return the sum of the odd numbers.



function findOddSum(num) {
  let sum = 0;                           // mone kori sum er jogfol 0,, jehetu ekhono kono jog kori nai!
  for (let i = 0; i < num.length; i++){
    const index = i;
    const element = num[index]
//  sum = sum + element;
    sum += element;
    console.log(index, element, sum);
  }
  return sum;
}

const myArrayNumbers = [5, 7, 8, 10, 45, 30];
findOddSum(myArrayNumbers);




















