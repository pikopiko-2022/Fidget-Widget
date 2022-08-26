import React, { useState } from 'react'

const RandomClock = () => {
  let timerRef
  const [time, setTime] = useState(new Date())
  const [clockSpeed, setClockSpeed] = useState(100)
  const tick = () => {
    setTime((oldDate) => new Date(oldDate.getTime() + 1000))
    clearInterval(timerRef)
  }
  timerRef = setInterval(tick, 100000 / clockSpeed)

  const handleSlider = (evt) => {
    setClockSpeed(parseInt(evt.target.value))
  }

  return (
    <div className="clock-container">
      <div>
        <div className="clock-display">{`${('0' + time.getHours()).slice(
          -2
        )}:${('0' + time.getMinutes()).slice(-2)}:${(
          '0' + time.getSeconds()
        ).slice(-2)}`}</div>
        <div className="clock-slider-container">
          <input
            type="range"
            min="1"
            max="200"
            value={`${clockSpeed}`}
            className="clock-slider"
            id="myRange"
            onChange={handleSlider}
          />
        </div>
        <div>{clockSpeed}% Time Warp</div>
      </div>
    </div>
  )
}

export default RandomClock
