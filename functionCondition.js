

//(01)
// Is It A  Even Number ?
/*============================
function verifyEvenNumber(number) {
  const remainder = number % 2;
  if (remainder == 0) {
    return true
  }
  else {
    return false
  }
}

const evenNumber = verifyEvenNumber(303);
console.log(evenNumber);

============================*/





//(02)
// Is It A  Odd Number ?
/*============================

function verifyEvenNumber(number) {
  const remainder = number % 2;
  if (remainder == 1) {
    return true
  }
  else {
    return false
  }
}

const evenNumber = verifyEvenNumber(303);
console.log(evenNumber);

============================*/











//(03)
// X jodi 18 years And height jodi 6 feet hoy ,,, Taholy X is a Strong man(name soho dekhao)
/*============================

function strongMan(name, age, feet) {

  if (age == 18 && feet == 6) {
    return true;
  }
  else {
    return false;
  }
  
}
const Shakil = strongMan('Shakil', 17, 6);
console.log('Shakil is', Shakil);

const Murad = strongMan(18, 6);
console.log('Murad is', Murad);

============================*/







//(04)
// X jodi 18 years And height jodi 6 feet hoy ,,, Taholy X is a Strong man(name soho dekhao)
/*============================

function strongMan(name, age, feet) {
  const targetAge = 18
  const targetFeet =6

  if (age == targetAge  && feet == targetFeet) {
    console.log(name, 'is a strong Man')
  }
  else {
    console.log(name, 'is not a strong Man')
  }
  
}
const verifyShakil = strongMan('Shakil', 17, 6);

const verifyMurad = strongMan('Murad', 18, 6);

============================*/











//(05)
// X jodi 18 years And height jodi 6 feet hoy ,,, Taholy X is a Strong man(name soho dekhao)


  function strongMan(name, age, feet) {
     const targetAge = 18;
     const targetFeet = 6;
  
     let result = ' '
  
     if (age == targetAge  && feet == targetFeet) {
//     result = result +  name + 'is a strong man';
       result += name + 'is a strong man';
     }
     else {
//       result = result +  name + 'is a strong man';
         result += name + 'is not a strong man';
     }
     return result;
  }
  const verifyShakil = strongMan('Shakil', 17, 6);
  console.log(verifyShakil);

  const verifyMurad = strongMan('Murad', 18, 6);
  console.log(verifyMurad);



 