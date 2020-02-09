// define your functions like this so they're testable
function sum (num1, num2) {
  return num1 + num2;
};


function createTimes(){
  // 10 tables
   // reservation from 1PM to 10PM
  let reservationTimes={};
  for(let i=1; i<10;i++){
    reservationTimes[i.toString()+':00']=10;
    reservationTimes[i.toString()+':30']=10;
  }
  //console.log(reservationTimes);
  return reservationTimes;
}

function convertToCivTime(hour){
  if (hour > 12){
    hour=hour-12;
  }
  return hour;
}

function convertToDoubleDigits(number){
  if (number.toString().length<2){
    number='0'+number;
  }
  return number
}

function reduceReservations(data){
  let dates = {};
  for (let i=0; i<data.length; i++){
  //console.log(data[0].slot);
  let resDate=new Date(data[i].slot);
  let resTime=convertToCivTime(resDate.getHours())+ ":"+convertToDoubleDigits(resDate.getMinutes());
  }
return dates;
}

let reservationData;

// API call to get reservation data
fetch("http://localhost:3000/reservations")
.then((response) => response.json())
.then((data) => {
  console.log('Success:', data);
  // call createTimes function to remove timeslots from the ones taken and display them in front-end

 reservationData=data;
 reduceReservations(reservationData);
});

//window.onload=function(){
// export reservationData
//}
