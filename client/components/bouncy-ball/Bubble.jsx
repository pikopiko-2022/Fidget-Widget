import React, { useState } from 'react'
import { getRandomNumber } from '../utils'
const Bubble = ({ initX, initY, color, killBubble }) => {
  const radius = getRandomNumber(20, 100)
  const [x, setX] = useState(initX - radius / 2)
  const [y, setY] = useState(initY - radius / 2)

  // const moveBubble = () => {
  //   if (y > 0) {
  //     const floatSpeed = 1
  //     setY((y) => y - floatSpeed)
  //   } else {
  //     clearInterval(moving)
  //     // killBubble()
  //   }
  // }
  // const moving = setInterval(() => moveBubble(), 200)
  return <circle cx={x} cy={y} r={radius} fill={color} onClick={killBubble} />
}

export default Bubble
