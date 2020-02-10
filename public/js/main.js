// jest won't error out on DOM calls.

// console.log(document.querySelector('p').innerHTML);
let date = document.getElementById('date');
let time = document.getElementById('time');

const reservations =
fetch("http://localhost:3000/reservations")
.then((response) => response.json())

reservationData = reservations.then((data)=>{
  let reservationData= reduceReservations(data);
  const resDay = changeReservationFormat(data[0].slot).toDateString();
  const timeslots=Object.keys(createTimes());
  const dateArray=[];
  console.log(data)
console.log(resDay);
//  for (let i=0; i< 15; i++){
    /*
    let today=new Date();
    let day =today.toDateString();
    let newday=today.getDate()+15;
    console.log(today.getMonth())
    let newDate = today.getMonth().toString() + " month "+ newday + " year " + today.getFullYear();
    dateArray.push(newDate) */

//  }
   date.innerHTML+="<option value='date' id='dateslot"+0+"'>" + resDay+ "</option> <br>"
  for(let i=0; i< timeslots.length; i++){
    time.innerHTML+="<option value='time' id='timeslot" +i+"'>" + timeslots[i] +"</option> <br>";
  }

//  console.log(dateArray)
  //date.value=JSON.stringify(reduceReservations(data));
  //reduceReservations(data);
});
