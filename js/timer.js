// const milliseconds = document.getElementById('milliseconds')

let interval
// start.addEventListener('click', () => {
//   interval = setInterval(() => {
//     const today = new Date()
//     console.log(today)
//     let h = today.getHours()
//     console.log(h)
//     hours.textContent = h
//     let m = today.getMinutes()
//     console.log(m)
//     minutes.textContent = m
//     let s = today.getSeconds()
//     console.log(s)
//     seconds.textContent = s
//     // let ms = today.getMilliseconds()
//     // console.log(ms)
//     // milliseconds.textContent = ms
//   }, 1000)
//   console.log(interval)
// })

// stop.addEventListener('click', () => {
//   if (!interval) {
//     console.log('Вы не установили интервал')
//   } else {
//     clearInterval(interval)
//     hours.textContent = '00'
//     minutes.textContent = '00'
//     seconds.textContent = '00'
//     console.log(`${interval} Остановлен`)
//   }
// })

export default class Timer {
  constructor() {
    this.interval = ''
    this.currentTime = ''
  }
  start(a, b, c) {
    this.interval = setInterval(() => {
      this.currentTime = Date.now()
      console.log(this.currentTime)
      this.updateClockFace(a, b, c)
    }, 1000)
  }
  stop(a,b,c) {
    clearInterval(this.interval)
    a.textContent = "00"
    b.textContent = "00"
    c.textContent = "00"
  }
  getHours(time) {
    // time = 1620066251740
    let hours = (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    hours = Math.floor(hours)
    console.log(hours)
    return hours
  }
  getMinutes(time) {
    // time = 1620066251740
    let minutes = (time % (1000 * 60 * 60)) / (1000 * 60)
    minutes = Math.floor(minutes)
    console.log(minutes)
    return minutes
  }
  getSeconds(time) {
    // time = 1620066251740
    let seconds = (time % (1000 * 60)) / 1000
    seconds = Math.floor(seconds)
    console.log(seconds)
    return seconds
  }
  updateClockFace(a, b, c) {
    a.textContent = this.getHours(this.currentTime)
    b.textContent = this.getMinutes(this.currentTime)
    c.textContent = this.getSeconds(this.currentTime)
  }
}
