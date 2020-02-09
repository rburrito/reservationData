// define your functions like this so they're testable
function sum (num1, num2) {
  return num1 + num2;
};


function createTimes(){
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

function getResTime(reservationDate){
  let resTime=convertToCivTime(reservationDate.getHours())+":"+convertToDoubleDigits(reservationDate.getMinutes());
  return resTime;
}

function reduceReservations(data){
  let dates = {};
  for (let i=0; i<data.length; i++){
  let resDate=new Date(data[i].slot);
  let resTime=getResTime(resDate);
  let resDay=resDate.toDateString();
  const day=new Date();
  }
return dates;
}

// API call to get reservation data
const reservations =
fetch("http://localhost:3000/reservations")
.then((response) => response.json())



//window.onload=function(){
// export reservationData
//}
