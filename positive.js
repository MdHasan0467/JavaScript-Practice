
//  একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে।"

//================< Solution >=================

const numbersArray = [20, 50, -60, 45, 70, -90, 100, -55, 10, 30];

function positiveNumber(num) {
  let positive = [];
  for (let i = 0; i < num.length; i++){
    let element = num[i]
    if (element > 0) {
      positive.push(element);
    }
  }
  return positive;
}

const findPositive = positiveNumber(numbersArray);
console.log(findPositive);

//==============================================







