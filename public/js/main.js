// jest won't error out on DOM calls.

//import './utils.js' as utils
const utils=import('./utils.js')
// console.log(document.querySelector('p').innerHTML);
let reservationTimes = document.getElementById('reservation times');
reservationTimes.innerHTML=JSON.stringify(utils.reservationData);
