// jest won't error out on DOM calls.

// console.log(document.querySelector('p').innerHTML);
let date = document.getElementById('date');
let time = document.getElementById('time');
let form = document.getElementById('reserveTime');
let name = document.getElementById('name');

const reservations =
fetch("/reservations")
.then((response) => response.json());

reservationData = reservations.then((data)=>{
   console.log(data)
  let reservationData= reduceReservations(data);
  console.log(reservationData);
//  console.log(Object.keys(reservationData));

  let day = Object.keys(reservationData); //array
//  let timeObject= reservationData[day];
//  let timeKeys = Object.keys(timeObject);
//  let timeValues = Object.values(timeObject);
  const timeslotsAllOpen=Object.keys(createTimes());
//
  let futureReservationDates = createFutureReservationDates();
   date.innerHTML="<option id='Choose Date'> Choose date </option> <br>"
   for (let i=0; i<futureReservationDates.length;i++){
     date.innerHTML+="<option id='dateslot"+0+"'>" + futureReservationDates[i]+ "</option> <br>"
     for(let j=0; j<day.length; j++){

      if (futureReservationDates[i]==day[j]){
        console.log(day[j]);
           let timeObject=reservationData[day[j]];
           let specificTimes =reduceTimes(timeObject);

           date.addEventListener("click",()=>{
             time.innerHTML="";
             for (let k=0; k<specificTimes.length;k++){
               console.log(specificTimes)
               time.innerHTML+="<option id='timeslot" +k+"'>" + specificTimes[k] +"</option> <br>";
             }
           });

      }
     }



   }

});


//submit form data (commented out code not required.)
  /* form.addEventListener('submit', async function(data){
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
