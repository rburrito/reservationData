// jest won't error out on DOM calls.

// console.log(document.querySelector('p').innerHTML);
let date = document.getElementById('date');
let time = document.getElementById('time');
let form = document.getElementById('reserveTime');
let name = document.getElementById('name');
let info =document.getElementById('info');

const reservations =
fetch("/reservations")
.then((response) => response.json());

reservationData = reservations.then((data)=>{
  let reservationData= reduceReservations(data);
  console.log(reservationData);

  let day = Object.keys(reservationData);

  const timeslotsAllOpen=Object.keys(createTimes());

  let futureReservationDates = createFutureReservationDates();
   date.innerHTML="<option id='Choose Date'> Choose date </option> <br>"

   for (let i=0; i<futureReservationDates.length;i++){
     date.innerHTML+="<option id='dateslot"+i+"'>" + futureReservationDates[i]+ "</option> <br>"

     date.addEventListener('click', ()=>{
       console.log(reservationData.hasOwnProperty(futureReservationDates[i]), futureReservationDates[i]);
       time.innerHTML="";
       if (reservationData.hasOwnProperty(futureReservationDates[i])){
         let timeObject=reservationData[futureReservationDates[i]];
         let specificTimes =reduceTimes(timeObject);
          // console.log(date.value, specificTimes)
           for (let k=0; k < specificTimes.length;k++){
             time.innerHTML+="<option id='timeslot" +k+"'>" + specificTimes[k] +"</option> <br>";
           }
       }
       else {
        // console.log(date.value, timeslotsAllOpen);
         for (let i=0; i< timeslotsAllOpen.length;i++){
           time.innerHTML+="<option id='timeslot" +i+"'>" + timeslotsAllOpen[i] +"</option> <br>";
         }
       }
     });


   }

});


  /* form.addEventListener('submit', async function(data){ // code not required. I was missing name value in HTML tags
    console.log(data);

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

    return await response.json();
  }); */
