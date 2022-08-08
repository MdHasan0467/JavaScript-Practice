

// Module:22.3
// Remove duplicate items from an array

const sum = [25, 55, 25, 30, 14, 68, 55, 68];

function analysisSum(sum) {
  let uniqueNumber = [];
  for (let i = 0; i < sum.length; i++){
    const singleNumber = sum[i];
    if (uniqueNumber.includes(singleNumber) === false) {
      uniqueNumber.push(singleNumber);
    }
  }
  return uniqueNumber;
}
const result = analysisSum(sum);
console.log(result);



















