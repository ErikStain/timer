import Timer from "./js/timer.js"
const start = document.getElementById('start')
const stop = document.getElementById('stop')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')
console.log(seconds);

const timer = new Timer()
console.log(timer);


start.addEventListener("click",timer.start.bind(timer,hours,minutes,seconds))
stop.addEventListener("click",timer.stop.bind(timer,hours,minutes,seconds))
// timer.getHours()
// timer.getMinutes()
// timer.getSeconds()
// timer.updateClockFace(hours,minutes,seconds)
console.log(new Date());
// console.log(Date.now().getTime());
console.dir(Date);