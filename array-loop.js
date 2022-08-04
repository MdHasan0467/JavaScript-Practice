// Display every elements of the array

/* ============================
var num = [45, 87, 89, 56, 32, 51, 25];

for(var i = 0; i < 7; i++) {
  var sum = num[i];
  console.log(sum);
}

 ============================*/



/* ============================
   var num = [45, 87, 89, 56, 32, 51, 25, 55, 69, 38, 102];

   for(var i = 0; i < num.length; i++) {
       var sum = num[i];
       console.log(sum);
}
 ============================*/



  // Array index gulo k jog korar jonno.....

/* ============================
var sum = [10, 20, 30, 40, 50];
var total = 0;
for (var i = 0; i <= 4; i++){
  total = total + sum [i];
}
console.log(total);
 ============================*/

//Again

/* ============================
var sum = [10, 20, 30, 40, 50];
var total = 0;
for (var i = 0; i <= 4; i++){
  console.log(sum[i]);
  total = total + sum[i];
}
console.log('mot = ' + total);
 ============================*/




// amra chaile Array r index value gulo k default vabe set na kore ,, User theke niye nite pari.......

var number = new Array();
for (var i = 0; i <= 5; i++){
  number[i] = parseInt(prompt("Enter a number"));

}

var total = 0;
for (var i = 0; i <= 5; i++){
  console.log(number[i]);
  total = total + number[i];
}

console.log("mot = " + total);