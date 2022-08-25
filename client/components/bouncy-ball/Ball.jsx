import React, { useState } from 'react'

const Ball = ({ initX, initY, color }) => {
  const radius = 60
  const [x, setX] = useState(initX - radius / 2)
  const [y, setY] = useState(initY - radius / 2)
  const [direction, setDirection] = useState(getRandomDeg)
  return <circle cx={x} cy={y} r={radius} fill={color} />
}

export default Ball
