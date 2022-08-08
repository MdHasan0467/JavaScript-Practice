

// Write a function findOddSum() that will take the array [5, 7, 8, 10, 45, 30] as the input parameter and will return the sum of the odd numbers.



function findSum(num) {
  let sum = 0; //Mone kori sum er jogfol 0,, jehetu ekhono kono jog kori nai!y7
  for (let i = 0; i < num.length; i++){
    const index = i;
    const element = num[index];
//  sum = sum + element;
    sum += element;
  }
  return sum;
}

function findOddSum(num) {
  const oddNumbers = [];                           
  for (let i = 0; i < num.length; i++){
    const index = i;
    const element = num[index];
    if (element % 2 !== 0) {
       console.log(index, element);
       oddNumbers.push(element);
    }
  }
  return oddNumbers;
}

const myArrayNumbers = [5, 7, 8, 10, 45, 30];
const oddNumbers = findSum(myArrayNumbers);
console.log(oddNumbers);
findSum(myArrayNumbers);




















