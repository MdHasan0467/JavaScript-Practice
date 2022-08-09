//Leap Year
//==================================================|
function leapYear(Year) {
  const remainder = Year % 4;
  if (remainder == 0) {  
    return true;
  }
  else {
    return false;
  }
}

let isIt =( "It is " + leapYear(1998));

console.log(isIt);

//==================================================