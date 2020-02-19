// jest won't error out on DOM calls.

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

  let day = Object.keys(reservationData);

  const timeslotsAllOpen=Object.keys(createTimes());

  let futureReservationDates = createFutureReservationDates();
   date.innerHTML="<option id='Choose Date'> Choose date </option> <br>"

   for (let i=0; i<futureReservationDates.length;i++){
     date.innerHTML+="<option id='dateslot"+i+"'>" + futureReservationDates[i]+ "</option> <br>"
   }

   date.addEventListener('click', ()=>{
     info.innerHTML="";
     time.innerHTML=" time.innerHTML=<option id='timeslot'> Choose time</option> <br>";
       for (let i=0; i< timeslotsAllOpen.length;i++){
         time.innerHTML+="<option id='timeslot" +i+"'>" + timeslotsAllOpen[i] +"</option> <br>";
       }
   });

time.addEventListener("click", ()=>{
  if (reservationData.hasOwnProperty(date.value)){
    if (reservationData[date.value][time.value]>0 || reservationData[date.value][time.value]===undefined){
      info.innerHTML="";
    }
    else{
      info.innerHTML= time.value+" on " + date.value +" is not available. <br>";
    }
  }
});

form.addEventListener('submit',(data)=>{
  if(reservationData[date.value][time.value]<1){
    data.preventDefault();
    info.innerHTML="Your reservation could not be completed. Please select another time."
  } else {
    info.innerHTML="You successfully reserved a table for "+date.value+" at " +time.value+".";
  }
});

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
