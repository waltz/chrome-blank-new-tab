const hourArm = document.getElementById('hour-arm')
const minuteArm = document.getElementById('minute-arm')
const secondArm = document.getElementById('second-arm')

const render = () => {
  const date = new Date()
  const hours = Math.abs(12 - date.getHours())
  const hoursInDegrees = (360/12) * hours
  const minutes = date.getMinutes()
  const minutesInDegrees = (360/60) * minutes
  const seconds = date.getSeconds()
  const secondsInDegrees = (360/60) * seconds

  hourArm.style.transform = `rotate(${hoursInDegrees}deg)`
  minuteArm.style.transform = `rotate(${minutesInDegrees}deg)`
  secondArm.style.transform = `rotate(${secondsInDegrees}deg)`
}

render()
setInterval(render, 1000)
