
//(01) Declare a object

/*============================
const myInfo = {
  name: 'Hasan',
  age: 25,
  weight: '78kg',
  profession: 'Web Developer'
}
console.log(myInfo.name);
console.log(myInfo['weight']);

============================*/



//(02) Use of multiple functions in a object

/*============================
const car = {
  name: 'Volvo',
  weight: '780kg',
  color: 'White',
  price: '25cr',
  production: 300,
  drive: function (){
    console.log('hello hasan');
  },
  start: function () {
    console.log("Now I'm Driving.");
  }
}

car.drive();
car.start();

============================*/



//(03) calling a function at the another function in the object
// for this action you must call a fuction in the out side of this object body, OtherWise it doesn't work 


/*============================
const car = {
  drive: function (){
  
    console.log('hello hasan');

    car.start();

  },
  start: function () {
  
    console.log("Now I'm Driving.");

  }
}

car.drive();

============================*/



































