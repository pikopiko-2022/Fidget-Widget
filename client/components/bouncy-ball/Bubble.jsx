import React from 'react'
import { getRandomNumber } from '../utils'
const Bubble = ({ initX, initY, color, killBubble }) => {
  const radius = getRandomNumber(20, 100)
  return (
    <circle
      cx={initX - radius / 2}
      cy={initY - radius / 2}
      r={radius}
      fill={color}
      onClick={killBubble}
    />
  )
}

export default Bubble
