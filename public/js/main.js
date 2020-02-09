// jest won't error out on DOM calls.

// console.log(document.querySelector('p').innerHTML);
let reservationTimes = document.getElementById('reservation times');

reservationData = reservations.then((data)=>{
  console.log(data);
  reservationTimes.innerHTML=JSON.stringify(data);
  reduceReservations(data);
});
