import React, { useState } from 'react'

const RandomClock = () => {
  let timerRef
  const [time, setTime] = useState(new Date())
  const [clockSpeed, setClockSpeed] = useState(1)
  const tick = () => {
    setTime((oldDate) => new Date(oldDate.getTime() + 1000))
    clearInterval(timerRef)
    // setTime(time.setSeconds(time.getSeconds() + 1000))
  }
  timerRef = setInterval(tick, 1000 * clockSpeed)

  return (
    <div>
      <div className="clock-display">{`${('0' + time.getHours()).slice(-2)}:${(
        '0' + time.getMinutes()
      ).slice(-2)}:${('0' + time.getSeconds()).slice(-2)}`}</div>
    </div>
  )
}

export default RandomClock
