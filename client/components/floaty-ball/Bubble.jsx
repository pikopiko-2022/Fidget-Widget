import React, { useState } from 'react'

const Bubble = ({ initX, initY, color, popBubble }) => {
  const radius = 60
  const [x, setX] = useState(initX - radius / 2)
  const [y, setY] = useState(initY - radius / 2)
  let moving

  const moveBubble = () => {
    clearInterval(moving)
    if (y > 0) {
      const floatSpeed = 5
      setY((y) => y - floatSpeed)
    }
  }
  moving = y > 0 - radius ? setInterval(() => moveBubble(), 200) : null
  return <circle cx={x} cy={y} r={radius} fill={color} onClick={popBubble} />
}

export default Bubble
