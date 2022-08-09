// 1. less than 100 tickets = per ticket price is 100 tk
/*
2. more than 100 but less than 200 tickets = 
 first 100 tickets per  ticket price is 100 tk And
 rest per ticket 90 tk
*/
/*
3. more than 200 tickets =
  first 100 -- > 100 tk
  101 to 200 --> 90 tk
  200 + --> 70tk
*/



function ticketprice(ticketQuentity) {
  const first100Rate = 100;
  const second100Rate = 90;
  const restTicketRate = 70;

  if (ticketQuentity <= 100) {
    const price = ticketQuentity * first100Rate;
    return price;
  }
  else if (ticketQuentity <= 200) {

    const first100Price = 100 * first100Rate;
    const restTicketQuentity = ticketQuentity - 100;
    const restTicketPrice =  restTicketQuentity * second100Rate ;
    const totalPrice = first100Price + restTicketPrice;

    return totalPrice;
  }
  else {
    const first100Price = 100 * first100Rate;
    const second100Price  = 100 * second100Rate;
    const restTicketQuentity = ticketQuentity - 200;
    const restTicketPrice = restTicketQuentity * restTicketRate;
    const totalCost = first100Price + second100Price + restTicketPrice;

    return totalCost;
  }
}

const Price = ticketprice(201);
console.log(Price);