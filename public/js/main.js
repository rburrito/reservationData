// jest won't error out on DOM calls.

// console.log(document.querySelector('p').innerHTML);
let date = document.getElementById('date');
let time = document.getElementById('time');
let form = document.getElementById('reserveTime');
let name = document.getElementById('name');

const reservations =
fetch("/reservations")
.then((response) => response.json())

reservationData = reservations.then((data)=>{
   console.log(data)
  let reservationData= reduceReservations(data);
  console.log(reservationData);
  console.log(Object.keys(reservationData));

  let day = Object.keys(reservationData); //array
  let timeObject= reservationData[day];
  let timeKeys = Object.keys(timeObject);
  let timeValues = Object.values(timeObject);
  console.log(timeValues)
//console.log(reservationData.hasOwnProperty(Object.keys(reservationData)[0]));
//  console.log(reservationData);

  if (reservationData.hasOwnProperty(day[0]){
    console.log("hi")
  //  console.log(reservationData[Object.keys(reservationData[0])]);
  /* if (reservationData[Object.keys(reservationData)[0]]){
     console.log(true);
   } */
   for (let i=0; i<timeKeys.length;i++){

   }

  }

  const resDay = changeReservationFormat(data[0].slot).toDateString();
  const timeslots=Object.keys(createTimes());
  const dateArray=[];
//  for (let i=0; i< 15; i++){
    /*
    let today=new Date();
    let day =today.toDateString();
    let newday=today.getDate()+15;
    console.log(today.getMonth())
    let newDate = today.getMonth().toString() + " month "+ newday + " year " + today.getFullYear();
    dateArray.push(newDate) */

//  }
   date.innerHTML+="<option id='dateslot"+0+"'>" + resDay+ "</option> <br>"
  for(let i=0; i< timeslots.length; i++){
    time.innerHTML+="<option id='timeslot" +i+"'>" + timeslots[i] +"</option> <br>";
  }

//  console.log(dateArray)
  //date.value=JSON.stringify(reduceReservations(data));
  //reduceReservations(data);
});

//submit form data (commented out code not required.)
  form.addEventListener('submit', async function(data){
    console.log(data);
    /*
    data.preventDefault();
    let formData =  {
      name: name.value,
      time: time.value,
      date: date.value
    };
    const response =await fetch("/reservations", {
      method: "POST",
      headers: {
      'Content-Type': 'application/json'
    },
      body: JSON.stringify(formData)
    });

    return await response.json(); */
  });
